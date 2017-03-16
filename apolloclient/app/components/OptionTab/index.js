'use strict'

import React, { Component } from 'react'
import {
  View, Text, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const propTypes = {
  default: React.PropTypes.oneOf(['right', 'left']).isRequired,
  rightText: React.PropTypes.string.isRequired,
  leftText: React.PropTypes.string.isRequired,
  onSwitch: React.PropTypes.func.isRequired,
}

const defaultProps = {
  iconSize: 40
}

class OptionTab extends Component {

  componentWillMount(){
    this.state={
      option: this.props.default
    }
  }

  onSwitch(option){
    this.setState({option})
    this.props.onSwitch(option)
  }

  render() {
   console.log(this.constructor.name+" render() component")
   return (
     <View style={styles.wrapper}>
       <View style={styles.itemWrapper}>
         <TouchableOpacity onPress={() => this.onSwitch('left')}>
           <View style={[styles.optionWrapper,
             this.state.option === 'left' ? {backgroundColor: 'rgba(0,0,0,.1)'}:{}]}>
             <Text style={styles.text}>{this.props.leftText}</Text>
           </View>
         </TouchableOpacity>
         <View style={styles.divider}/>
         <TouchableOpacity onPress={() => this.onSwitch('right')}>
           <View style={[styles.optionWrapper,
             this.state.option === 'right' ? {backgroundColor: 'rgba(0,0,0,.1)'}:{}]}>
             <Text style={styles.text}>{this.props.rightText}</Text>
           </View>
         </TouchableOpacity>
       </View>
     </View>
  )}
}

OptionTab.propTypes = propTypes
OptionTab.defaultProps = defaultProps

export default OptionTab
