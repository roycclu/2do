'use strict'

import React, { Component } from 'react'
import {
  View, Text, Platform, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const propTypes = {
  text: React.PropTypes.string.isRequired,
  hideStatusBarBG: React.PropTypes.bool,
  showProgressDots: React.PropTypes.bool.isRequired,
  progressDot: React.PropTypes.oneOf([1, 2, 3, 4, 5]),
  showIconLeftOne: React.PropTypes.bool,
  showIconLeftTwo: React.PropTypes.bool,
  showIconRightTwo: React.PropTypes.bool,
  showIconRightOne: React.PropTypes.bool,
  iconLeftOne: React.PropTypes.string,
  iconLeftTwo: React.PropTypes.string,
  iconRightTwo: React.PropTypes.string,
  iconRightOne: React.PropTypes.string,
  iconLeftOneStyle: React.PropTypes.number,
  iconLeftTwoStyle: React.PropTypes.number,
  iconRightTwoStyle: React.PropTypes.number,
  iconRightOneStyle: React.PropTypes.number,
  onClickLeftOne: React.PropTypes.func,
  onClickLeftTwo: React.PropTypes.func,
  onClickRightTwo: React.PropTypes.func,
  onClickRightOne: React.PropTypes.func
}

const defaultProps = {
  iconSize: 23
}

class Toolbar extends Component {

  _renderIconLeftOne(name="md-arrow-back", style) {
  const self = this
   return (
     <Icon name={name} size={self.props.iconSize} color="rgb(255,255,255)"
       style={[styles.iconToolbar, style]}
       onPress={() => this.props.onClickLeftOne()}
       hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}/>
   )
  }

  _renderIconLeftTwo(name="ios-globe-outline", style) {
   const self = this
   return (
     <Icon name={name} size={self.props.iconSize} color="rgb(255,255,255)"
       style={[styles.iconToolbar, style]}
       onPress={() => this.props.onClickLeftTwo()}
       hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}/>
   )
  }

  _renderIconRightTwo(name="ios-arrow-round-forward-outline", style) {
   const self = this
   return (
     <Icon name={name} size={self.props.iconSize} color="rgb(255,255,255)"
       style={[styles.iconToolbar, style]}
       onPress={() => this.props.onClickRightTwo()}
       hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}/>
   )
  }

  _renderIconRightOne(name="md-refresh", style) {
   const self = this
   return (
     <Icon name={name} size={self.props.iconSize} color="rgb(255,255,255)"
       style={[styles.iconToolbar, style]}
       onPress={() => this.props.onClickRightOne()}
       hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}/>
   )
  }

  _renderIconPlaceHolder() {
   return (
     <Icon name="md-arrow-back" size={22} color="rgba(255,255,255,0)"
       style={styles.iconToolbar}/>
   )
  }

  render() {
   console.log(this.constructor.name+" render() component")
   return (
     <View style={styles.toolbarWrapper}>
       <StatusBar backgroundColor='rgba(0,0,0,1)' barStyle="light-content"/>
       <View style={[styles.statusBariPhone, this.props.hideStatusBarBG ? {height: 0} : {}]}/>
       <View style={styles.toolbar}>
         <View style={styles.iconLeftOneWrapper}>
           {this.props.showIconLeftOne ?
             this._renderIconLeftOne(this.props.iconLeftOne, this.props.iconLeftOneStyle)
             : this._renderIconPlaceHolder()}
         </View>
         <View style={styles.iconLeftTwoWrapper}>
           {this.props.showIconLeftTwo ?
             this._renderIconLeftTwo(this.props.iconLeftTwo, this.props.iconLeftTwoStyle)
             : this._renderIconPlaceHolder()}
         </View>
         <View style={styles.contentWrapper}>
           <Text style={styles.toolbarText}>
             {this.props.text}
           </Text>
           { this.props.showProgressDots ?
             <View style={styles.progressDotsWrapper}>
               <Icon name={this.props.progressDot === 1
                 ? 'ios-radio-button-on' : 'ios-radio-button-off'}
                 size={10} color="rgb(255,255,255)"
                 style={styles.progressDot}/>
               <Icon name={this.props.progressDot === 2
                 ? 'ios-radio-button-on' : 'ios-radio-button-off'}
                 size={10} color="rgb(255,255,255)"
                 style={styles.progressDot}/>
               <Icon name={this.props.progressDot === 3
                 ? 'ios-radio-button-on' : 'ios-radio-button-off'}
                size={10} color="rgb(255,255,255)"
                 style={styles.progressDot}/>
               <Icon name={this.props.progressDot === 4
                 ? 'ios-radio-button-on' : 'ios-radio-button-off'}
                size={10} color="rgb(255,255,255)"
                 style={styles.progressDot}/>
               <Icon name={this.props.progressDot === 5
                 ? 'ios-radio-button-on' : 'ios-radio-button-off'}
                size={10} color="rgb(255,255,255)"
                 style={styles.progressDot}/>
             </View>
             :
             <View/>
           }
         </View>
         <View style={styles.iconRightTwoWrapper}>
           {this.props.showIconRightTwo ?
             this._renderIconRightTwo(this.props.iconRightTwo, this.props.iconRightTwoStyle)
             : this._renderIconPlaceHolder()}
         </View>
         <View style={styles.iconRightOneWrapper}>
           {this.props.showIconRightOne ?
             this._renderIconRightOne(this.props.iconRightOne, this.props.iconRightOneStyle)
             : this._renderIconPlaceHolder()}
         </View>
       </View>
     </View>
  )}
}

Toolbar.propTypes = propTypes
Toolbar.defaultProps = defaultProps

export default Toolbar
