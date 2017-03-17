'use strict'

import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import styles from './styles'
import Toolbar from '../../components/Toolbar';
import ToDoListView from '../../components/ToDoListView';
import AddToDo from '../../components/AddToDo'

class ListViewWithGQL extends Component {
  render() {
    const queryToDos = gql`query ToDoQuery {
      todos {
        index
        owner
        text
        due
        done
        complete
      }
    }`

    const mutateCheckToDo = gql`mutation checktodo($index: ID!, $done: String!) {
      checktodo (index: $index, done: $done){
        index
        owner
        text
        due
      }
    }`;

    const mutationAddTodo = gql`mutation addtodo($text: String!) {
      addtodo (text: $text){
        owner
        text
        due
      }
    }`;

    const ViewWithGQL = compose
    (
      graphql(mutationAddTodo, {
        // name: 'onClickAdd',
        props: ({ ownProps, mutate }) => ({
          onClickAdd: (text) => {
            console.log(this.constructor.name," mutation addtodo submitted")
            mutate({
              variables: { text },
              optimisticResponse: {
                __typename: 'mutation',
                addtodo: {
                  __typename: 'ToDo',
                  text: text
                }
              },
              refetchQueries: [{
                query: queryToDos
              }],
            });
            this.props.onAddSubmitted();
          },
        }),
      }),
      graphql(mutateCheckToDo, {
        // name: 'onCheckBox',
        props: ({ ownProps, mutate }) => ({
          onCheckBox: (index) => {
            const done = new Date()
            console.log(this.constructor.name," mutation checktodo submitted :",index, done.toString())
            mutate({
              variables: { index, done },
              optimisticResponse: {
                __typename: 'mutation',
                checktodo: {
                  __typename: 'ToDo',
                  index: index,
                  done: done,
                  complete: true
                }
              },
              refetchQueries: [{
                query: queryToDos
              }],
            });
            this.props.onCheckSubmitted();
          },
        }),
      }),
      graphql(queryToDos, {
        options: { variables: { } },
        props: ({ data: { todos : ToDoList } }) => ({
          ToDoList: ToDoList || [],
          language: 'en'
        }),
      })
    )
    (ToDoListView)

    return (
      <ViewWithGQL />
    )
  }
}
ListViewWithGQL.propTypes = {
  onCheckSubmitted: PropTypes.func.isRequired,
  onAddSubmitted: PropTypes.func.isRequired
}

class Browse extends Component {

  onClickRow() {
  }

  onRefresh() {
    console.log(this.constructor.name+" onRefresh() forceUpdate")
    // this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          hideStatusBarBG = {Platform.OS != 'ios'}
          text = {'2do Browse'}
          showProgressDots={false}
          showIconRightOne
          onClickRightOne = {this.onRefresh.bind(this)}
          />
        <ListViewWithGQL
          onAddSubmitted={this.onRefresh.bind(this)}
          onCheckSubmitted={this.onRefresh.bind(this)}/>
      </View>
    )
  }
}

export default Browse


// class AddToDoWithMutation extends Component {
//   render() {
//     const mutation = gql`mutation addtodo($text: String!) {
//       addtodo (text: $text){
//         owner
//         text
//         due
//       }
//     }`;
//
//     const ViewWithGQL =
//       graphql(mutation, {
//         props: ({ mutate }) => ({
//           onClickAdd: (text) => {
//             console.log(this.constructor.name," mutation submitted")
//             mutate({ variables: { text } });
//             this.props.onAddSubmitted();
//           },
//         }),
//       })
//       (AddToDo)
//
//     return (
//       <ViewWithGQL />
//     )
//   }
// }
// AddToDoWithMutation.propTypes = {
//   onAddSubmitted: PropTypes.func.isRequired
// }
