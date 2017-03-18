'use strict'

import React, { Component } from 'react'
import {
  View, Text, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import CheckBox from '../../CheckBox'

import styles from './styles'

const propTypes = {
  index: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  complete: React.PropTypes.bool.isRequired,
  onCheckBox: React.PropTypes.func.isRequired,
}

class ListItem extends Component {

  componentWillMount() {
    this.state = {
      checked: this.props.complete
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.checked !== nextProps.complete ) {
      this.setState({checked: nextProps.complete});
    }
  }

  render() {
   console.log(this.constructor.name+" render() component")
   const listItemStyle = this.state.checked ? { backgroundColor: 'rgba(255,255,255,.5)'} : {} ;
   const checkBoxStyle = this.state.checked ? { color: 'rgba(0,0,0,.2)'} : {} ;
   const fontStyle = this.state.checked ?
      {color: 'rgba(0,0,0,.4)', textDecorationLine: 'line-through'} : {} ;
   return (
     <View style={styles.wrapper}>
       <View style={[styles.itemWrapper, listItemStyle]}>
         <TouchableOpacity onPress={() => this.props.onClickAdd(this.props.index)}>
           <CheckBox
             checkBoxStyle={[{color: 'rgba(0,0,0,1)'}, checkBoxStyle, styles.iconCheck]}
             checked={this.state.checked}
             onChange={(status) => {
                console.log(this.constructor.name+" changed to "+status);
                // this.setState({checked: status});
                if (status) this.props.onCheckBox(this.props.index);
              }}/>
         </TouchableOpacity>
         <Text style={[styles.text, fontStyle]}>{this.props.text}</Text>
       </View>
     </View>
  )}
}

ListItem.propTypes = propTypes

export default ListItem
