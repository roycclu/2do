'use strict'

import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles'

export default class NavigationButtons extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      active: this.props.active,
      hidden: this.props.hidden
    }
  }
  onClick(linkName) {
    if (this.props.onClick) {
      this.props.onClick(linkName)
    }
    this.setState({
      active: linkName
    })
  }
  render() {
    return (
      <View style={{flex:1}}>
        {this.props.children}
        <LinearGradient
        locations={[0.6,1]}
        colors={['rgba(255,255,255,0.01)', 'rgba(255,255,255,0.8)']}
        style={[styles.container, this.state.hidden ? {'opacity': 0} : null]}
        >
          <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.timelineContainer} onPress={() => this.onClick("Browse")}>
          <Icon
                style={this.state.active === 'Timeline'? styles.timelineActive : styles.timeline}
                name="md-infinite" size={22} color="#8F8F9C"
                />
          </TouchableOpacity>
          <TouchableOpacity style={styles.meContainer} onPress={() => this.onClick("Visual")}>
              <Icon
              style={this.state.active === 'Me'? styles.meActive : styles.me}
               name="md-person" size={22} color="#8F8F9C" />
           </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    )
  }
}
