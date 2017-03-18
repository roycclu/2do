'use strict'

import React, { Component } from 'react'
import {
  View, Text, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import Swipeout from 'react-native-swipe-out';

import CheckBox from '../../CheckBox'
import styles from './styles'

const propTypes = {
  index: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  complete: React.PropTypes.bool.isRequired,
  clickable: React.PropTypes.bool,
  onCheckBox: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired,
}

class ListItem extends Component {

  componentWillMount() {
    this.state = {
      checked: this.props.complete
    }
    console.log(this.constructor.name," props: ",this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.checked !== nextProps.complete ) {
      this.setState({checked: nextProps.complete});
    }
  }

  delBtn = (
    <View style={styles.delBtn}>
      <Text>{'删除'}</Text>
    </View>
  )

  render() {
   console.log(this.constructor.name+" render() component")
   const listItemStyle = this.state.checked ? { backgroundColor: 'rgba(255,255,255,.5)'} : {} ;
   const checkBoxStyle = this.state.checked ? { color: 'rgba(0,0,0,.2)'} : {color: 'rgba(0,0,0,1)'} ;
   const fontStyle = this.state.checked ?
      {color: 'rgba(0,0,0,.4)', textDecorationLine: 'line-through'} : {} ;
   const clickable = this.props.clickable;
   let swipeBtns = [{
     component: this.delBtn,
     backgroundColor: 'transparent',
     onPress: () => this.props.onDelete(this.props.index)
   }];
   return (
     <Swipeout
       right={swipeBtns}
       autoClose={true}
       backgroundColor='transparent'>
     <View style={styles.wrapper}>
       <View style={[styles.itemWrapper, listItemStyle]}>
         <View style={styles.itemLeft}>
           <TouchableOpacity onPress={() => this.props.onClickAdd(this.props.index)}>
             <CheckBox
               checkBoxStyle={checkBoxStyle}
               checked={this.state.checked}
               clickable={clickable}
               onChange={(status) => {
                  console.log(this.constructor.name+" changed to "+status);
                  // this.setState({checked: status});
                  if (status) this.props.onCheckBox(this.props.index);
                }}/>
           </TouchableOpacity>
         </View>
         <View style={styles.itemRight}>
          <Text style={[styles.text, fontStyle]}>{this.props.text}</Text>
         </View>
       </View>
     </View>
     </Swipeout>
  )}
}

ListItem.propTypes = propTypes

export default ListItem
