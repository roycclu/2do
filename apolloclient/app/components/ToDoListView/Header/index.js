'use strict'

import React, { Component } from 'react'
import {
  View, Text, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const propTypes = {
  onClickAdd: React.PropTypes.func.isRequired,
}

const defaultProps = {
  iconSize: 40
}

class AddToDo extends Component {

  componentWillMount() {
    this.state={
      todo: "",
      editing: false
    }
  }

  onClickAdd(){
    this.props.onClickAdd(this.state.todo);
    this.setState({todo: ''});
  }

  render() {
   console.log(this.constructor.name+" render() component")
   return (
     <View style={styles.wrapper}>
       <View style={styles.itemWrapper}>
         <TouchableOpacity onPress={this.onClickAdd.bind(this)}>
           <Icon name='ios-add' size={this.props.iconSize} color={'white'}
             style={styles.iconAdd}/>
         </TouchableOpacity>
         <TextInput
           ref='textInput'
           style={styles.textInput}
           underlineColorAndroid='rgba(0,0,0,0)'
           onSumbmitEditing={this.onClickAdd.bind(this)}
           onChangeText={(todo) => this.setState({todo, editing: true})}
           placeholder={'Add a 2do...'}
           placeholderTextColor='white'
           value={this.state.todo}
         />
       </View>
     </View>
  )}
}

AddToDo.propTypes = propTypes
AddToDo.defaultProps = defaultProps

export default AddToDo
