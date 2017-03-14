'use strict'

import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ListView } from 'react-native'
import Moment from 'moment'

import styles from './styles.js'

const propTypes = {
  language: React.PropTypes.string.isRequired,
  ToDoList: React.PropTypes.array.isRequired,
  onClickRow: React.PropTypes.func.isRequired
}

class ToDoListView extends Component {

  componentWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      })
    // Object.defineProperty(this.props.ToDoList, 'key', {
    //   writable: true
    // })
    const data = this.convertArrayToMap(this.props.ToDoList)
    // const data = this.convertArrayToMap(this.props.ToDoList.sort(this.compare))

    this.state = {
      language: this.props.language,
      dataSource: ds.cloneWithRowsAndSections(data),
      animating: this.props.animating
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(this.constructor.name+" ",nextProps.ToDoList)
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
    const map = {}
    array.forEach((entry) => {
      if (!map[entry.done]) {
        map[entry.done] =[]
      }
      map[entry.done].push(entry)
    })
    return map
  }

  _renderRow = (entry) => {
    return (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Index: {entry && entry.index}</Text>
        <Text>Owner: {entry && entry.owner}</Text>
        <Text>ToDo: {entry && entry.text}</Text>
        <Text>Due: {entry && Moment(entry.due).format('YYYY. MM. DD')}</Text>
        <Text>Done: {entry && (entry.done ? 'done' : 'not yet')}</Text>
      </View>
    )
  }

  _renderSectionHeader(sectionData, sectionID){
    return (
      <View style={styles.sectionHeaderContainer}>
        <View style={styles.spaceKeeperSectionHeaderLeft}/>
        <Text style={styles.sectionHeader}>{sectionID}</Text>
        <View style={styles.spaceKeeperSectionHeaderRight}/>
      </View>
    )
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted){
    return (
      <View key={sectionID+"-"+rowID} style={styles.separatorContainer}>
      </View>
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
          enableEmptySections={true}
        />
      </View>
    )
  }
}

ToDoListView.propTypes = propTypes

export default ToDoListView
