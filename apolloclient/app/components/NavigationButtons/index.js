'use strict'

import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles'

export default class NavigationButtons extends React.Component {

  componentWillMount(){
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
        colors={['rgba(255,255,255,0.01)', 'rgba(255,255,255,0.5)']}
        style={[styles.container, this.state.hidden ? {'opacity': 0} : null]}
        >
          <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.timelineContainer} onPress={() => this.onClick("Browse")}>
            <Icon
              style={this.state.active === 'Browse'? styles.timelineActive : styles.timeline}
              name="logo-buffer" size={30} color="#8F8F9C"
              />
          </TouchableOpacity>
          <TouchableOpacity style={styles.meContainer} onPress={() => this.onClick("Visual")}>
              <Icon
                style={this.state.active === 'Visual'? styles.meActive : styles.me}
                name="ios-color-filter" size={30} color="#8F8F9C" />
           </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    )
  }
}
