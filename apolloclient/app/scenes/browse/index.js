'use strict'

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ToDoListView from '../../components/ToDoListView';
import Toolbar from '../../components/Toolbar';
import styles from './styles'

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
      options: { variables: { index: 1 }}
    })(ToDos)

    return (
      <ViewWithData />
    )
  }
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
        <ListViewWithData />
      </View>
    )
  }
}

export default Browse
