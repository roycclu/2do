'use strict'

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ToDoListView from '../../components/ToDoListView'


// const ToDoList = [
//   {
//     "index": 1,
//     "owner": "Luke Skywalker",
//     "text": "create a new ToDo",
//     "due": "2016-06-20T02:40:51.699Z",
//     "done": false
//   },
//   {
//     "index": 2,
//     "owner": "Denny Hsieh",
//     "text": "create a new ToDo",
//     "due": "2016-06-20T02:40:51.699Z",
//     "done": false
//   },
//   {
//     "index": 3,
//     "owner": "Luke Skywalker",
//     "text": "check off this ToDo",
//     "due": "2016-06-20T02:40:51.699Z",
//     "done": false
//   },
//   {
//     "index": 4,
//     "owner": "Denny Hsieh",
//     "text": "delete this ToDo by sliding to the right",
//     "due": "2016-06-20T02:40:51.699Z",
//     "done": false
//   }
// ]



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
        <View/>
    )}

    const ViewWithData = graphql(query, {
      options: { variables: { index: 1 }}
    })(ToDos)

    return (
      <ViewWithData />
    )
  }
}

class ToDoViewWithData extends Component {

  render() {
    const query = gql`query ToDoQuery($index: ID!) {
      todo(index: $index) {
        index
        owner
        text
        due
        done
      }
    }`

    const ToDo = ({ data: { todo } }) => {
      console.log(this.constructor.name+" todo: "+todo)
      return (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Index: {todo && todo.index}</Text>
        <Text>Owner: {todo && todo.owner}</Text>
        <Text>ToDo: {todo && todo.text}</Text>
        <Text>Due: {todo && todo.due}</Text>
        <Text>Done: {todo && todo.done}</Text>
      </View>
    )}

    const ViewWithData = graphql(query, {
      options: { variables: { index: this.props.index }}
    })(ToDo)
    return (
      <ViewWithData />
    )
  }
}

class Browse extends Component {
  constructor() {
    super()
    this.state = {
      index: '1',
      ToDoList: []
    }
    // this.onRefresh()
  }

  updateIndex(index){
    console.log(this.constructor.name+" updateIndex: ", index)
    this.setState({
      index
    })
  }

  onClickRow() {

  }

  onRefresh() {
    console.log(this.constructor.name+" onRefresh() forceUpdate")
    this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Find ToDo</Text>
        <TextInput
          onChangeText={this.updateIndex.bind(this)}
          style={styles.input} />
        <ToDoViewWithData
          index={this.state.index}/>
        <TouchableOpacity onPress={this.onRefresh.bind(this)}>
          <Text style={{backgroundColor: '#000000', color: '#ffffff'}}>Refresh</Text>
        </TouchableOpacity>
        <ListViewWithData />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#dddddd',
    height: 50,
    margin: 20,
    marginBottom: 0,
    paddingLeft: 10
  }
})

export default Browse
