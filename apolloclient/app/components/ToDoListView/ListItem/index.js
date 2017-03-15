'use strict'

import React, { Component } from 'react'
import {
  View, Text, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const propTypes = {
  onCheck: React.PropTypes.func.isRequired,
}

class ListItem extends Component {

  render() {
   console.log(this.constructor.name+" render() component")
   return (
     <View style={styles.wrapper}>
       <View style={styles.itemWrapper}>
         <TouchableOpacity onPress={() => this.props.onClickAdd(this.state.todo)}>
           <Icon name='ios-radio-button-off' size={20} color={'rgba(0,0,0,.4)'}
             style={styles.iconCheck}/>
         </TouchableOpacity>
         <Text style={styles.text}>{this.props.text}</Text>
       </View>
     </View>
  )}
}

ListItem.propTypes = propTypes

export default ListItem
