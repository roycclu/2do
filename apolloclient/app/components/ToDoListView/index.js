'use strict'

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView } from 'react-native';
import Moment from 'moment';

import styles from './styles.js'
import ListItem from './ListItem'
import Header from './Header'

const propTypes = {
  language: React.PropTypes.string.isRequired,
  ToDoList: React.PropTypes.array.isRequired,
  onCheckBox: React.PropTypes.func.isRequired,
  onClickAdd: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired,
}

class ToDoListView extends Component {

  componentWillMount(){
    console.log(this.constructor.name+" componentWillMount() props: ", this.props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      })
    const data = this.convertArrayToMap(this.props.ToDoList || [])
    // const data = this.convertArrayToMap(this.props.ToDoList.sort(this.compare))

    this.state = {
      language: this.props.language,
      dataSource: ds.cloneWithRowsAndSections(data),
      animating: this.props.animating
    }
  }

  componentWillReceiveProps(nextProps){
    // console.log(this.constructor.name+" ", nextProps.ToDoList)
    // console.log(this.constructor.name+" ", JSON.stringify(nextProps.ToDoList))
    if (nextProps.ToDoList != this.state.dataSource) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(
          this.convertArrayToMap(nextProps.ToDoList))
      })
    }

    // if (nextProps.ToDoList != this.state.dataSource) {
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRowsAndSections(
    //       this.convertArrayToMap(nextProps.ToDoList.sort(this.compare)))
    //   })
    // }
  }

  compare(a, b){
    a.writable = true;
    b.writable = true;
    const indexSort = a.index < b.index
    if (indexSort) {
      return 1
    } else {
      return -1
    }
    return 0
    return
  }

  convertArrayToMap(array){
    const map = {};
    map['ToDo'] = [];
    map['Complete'] = [];
    array.forEach((entry) => {
      // if (!map[entry.complete]) {
      //   map[entry.complete] =[];
      // };
      if (entry.complete) {
        map['Complete'].push(entry)
      } else {
        map['ToDo'].push(entry)
      }
    });
    return map;
  }

  _renderRow = (entry) => {
    return (
      <ListItem
        index={entry.index}
        text={entry.text}
        complete={entry.complete || false}
        onCheckBox={(index) => {this.props.onCheckBox(index)}}
        onDelete={this.props.onDelete.bind(this)}/>
    )
  }

  _renderSectionHeader(sectionData, sectionID){
    return ( <View/> )
    // return (
    //   sectionID === "ToDo" ? <View/> :
    //   <View style={styles.sectionHeaderContainer}>
    //     <View style={styles.spaceKeeperSectionHeaderLeft}/>
    //     <Text style={styles.sectionHeader}>{sectionID}</Text>
    //     <View style={styles.spaceKeeperSectionHeaderRight}/>
    //   </View>
    // )
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted){
    return (
      <View key={sectionID+"-"+rowID} style={styles.separatorContainer}>
      </View>
    )
  }

  _renderHeader = () => {
    return (
      <Header
        onClickAdd={(text) => {this.props.onClickAdd(text)}}
      />
    )
  }

  render() {
    console.log(this.constructor.name+" render() component")
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSectionHeader={this._renderSectionHeader}
          renderSeparator={this._renderSeparator}
          renderHeader={this._renderHeader}
          enableEmptySections={true}
        />
      </View>
    )
  }
}

ToDoListView.propTypes = propTypes

export default ToDoListView
