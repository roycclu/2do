'use strict'

import React, { Component } from 'react'
import {
  View, Text, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const propTypes = {
  onChange: React.PropTypes.func.isRequired,
  checked: React.PropTypes.bool,
  clickable: React.PropTypes.bool,
  checkboxStyle: React.PropTypes.object
}

const defaultProps = {
  iconSize: 20
}

class CheckBox extends Component {

  componentWillMount() {
    this.state={
      checked: this.props.checked || false,
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.checked !== this.state.checked) {
      this.setState({ checked: nextProps.checked })
    }
  }

  onChange = (newVal) => {
    console.log(this.constructor.name+" render() onChange: ", newVal)
    if (this.state.checked !== newVal) {
      this.setState({ checked: newVal },
        () => {
          this.props.onChange(newVal);
      });
    }
  }

  setChecked = this.onChange.bind(null, true);
  setUnchecked = this.onChange.bind(null, false);

  render() {
   console.log(this.constructor.name+" render() component")
   return (
     <View style={styles.wrapper}>
     {
       this.props.clickable ?
         this.state.checked ?
         <Icon
            name={"ios-radio-button-on"}
            size={this.props.iconSize}
            color="rgb(255,255,255)"
            style={[styles.checkBoxStyle, this.props.checkBoxStyle]}
            onPress={this.setUnchecked}
            hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}/>
          :
          <Icon
             name={"ios-radio-button-off"}
             size={this.props.iconSize}
             color="rgb(255,255,255)"
             style={[styles.checkBoxStyle, this.props.checkBoxStyle]}
             onPress={this.setChecked}
             hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}/>
       :
       <View style={styles.checkBoxStyle}/>
     }
     </View>
  )}
}

CheckBox.propTypes = propTypes
CheckBox.defaultProps = defaultProps

export default CheckBox
