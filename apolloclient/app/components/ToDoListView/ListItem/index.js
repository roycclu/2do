'use strict'

import React, { Component } from 'react'
import {
  View, Text, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import CheckBox from 'react-native-checkbox'

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
    // <Icon name='ios-radio-button-off' size={20} color={'rgba(0,0,0,.4)'}
    //   style={styles.iconCheck}/>
   console.log(this.constructor.name+" render() component")
   const lintItemStyle = this.state.checked ? {backgroundColor: 'rgba(255,255,255,.5)'} : {} ;
   const checkBoxStyle = this.state.checked ? { backgroundColor: 'transparent'} : {} ;
   const fontStyle = this.state.checked ?
      {color: 'rgba(0,0,0,.4)', textDecorationLine: 'line-through'} : {} ;
   return (
     <View style={styles.wrapper}>
       <View style={[styles.itemWrapper, lintItemStyle]}>
         <TouchableOpacity onPress={() => this.props.onClickAdd(this.props.index)}>
           <CheckBox
            label={''}
            checkboxStyle={[styles.checkbox, checkBoxStyle]}
            checked={this.state.checked}
            onChange={(status) => {
                console.log(this.constructor.name+" changed to "+!status);
                this.setState({checked: !status});
                if (!status) this.props.onCheckBox(this.props.index);
              }}/>
         </TouchableOpacity>
         <Text style={[styles.text, fontStyle]}>{this.props.text}</Text>
       </View>
     </View>
  )}
}

ListItem.propTypes = propTypes

export default ListItem
