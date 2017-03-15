'use strict'

import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import styles from './styles'
import Toolbar from '../../components/Toolbar';
import ToDoListView from '../../components/ToDoListView';
import AddToDo from '../../components/AddToDo'

class ListViewWithData extends Component {
  render() {
    const query = gql`query ToDoQuery {
      todos {
        index
        owner
        text
        due
        done
      }
    }`
    const ToDos = ({ data: { todos: ToDoList }}) => {
      console.log(this.constructor.name+" ToDoList: "+JSON.stringify(ToDoList))
      return(
        ToDoList ?
        <ToDoListView
          language={'en'}
          ToDoList={ToDoList}
          onClickRow={() => {}}
          />
        :
        <View style={{flex: 1}}/>
    )}

    const ViewWithData = graphql(query, {
      options: { variables: { }}
    })(ToDos)

    return (
      <ViewWithData />
    )
  }
}

class AddToDoWithMutation extends Component {
  render() {
    const mutation = gql`mutation AddToDo($text: String!) {
      addtodo (text: $text){
        owner
        text
        due
      }
    }`;

    const ViewWithData = graphql(mutation, {
      props: ({ mutate }) => ({
        onClickAdd: (text) => {
          console.log(this.constructor.name," mutation submitted")
          mutate({ variables: { text } });
          this.props.onAddSubmitted();
        },
      }),
    })(AddToDo)

    return (
      <ViewWithData />
    )
  }
}
AddToDoWithMutation.propTypes = {
  onAddSubmitted: PropTypes.func.isRequired
}

class Browse extends Component {

  onClickRow() {
  }

  onRefresh() {
    console.log(this.constructor.name+" onRefresh() forceUpdate")
    this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          hideStatusBarBG = {Platform.OS != 'ios'}
          text = {'2do App'}
          showProgressDots={false}
          showIconRightOne
          onClickRightOne = {this.onRefresh.bind(this)}
          />
        <AddToDoWithMutation
          onAddSubmitted={this.onRefresh.bind(this)}/>
        <ListViewWithData />
      </View>
    )
  }
}

export default Browse
