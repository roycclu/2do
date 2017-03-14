'use strict'

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class App extends Component {
  constructor() {
    super()
    this.state = {
      index: '1',
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(index){
    console.log(this.constructor.name+" updateIndex: ", index)
    this.setState({
      index
    })
  }
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

    const ToDo = ({ data }) => (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Index: {data.todo && data.todo.index}</Text>
        <Text>Owner: {data.todo && data.todo.owner}</Text>
        <Text>ToDo: {data.todo && data.todo.text}</Text>
        <Text>Due: {data.todo && data.todo.due}</Text>
        <Text>Done: {data.todo && data.todo.done}</Text>
      </View>
    )

    const ViewWithData = graphql(query, {
      options: { variables: { index: this.state.index }}
    })(ToDo)

    console.log(this.constructor.name+" state.index: ", this.state.index)
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Find ToDo</Text>
        <TextInput
          onChangeText={(text) => this.updateIndex(text)}
          style={styles.input} />
        <ViewWithData />
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

export default App
