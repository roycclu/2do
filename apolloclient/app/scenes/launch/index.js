'use strict'

import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

export default class AppScreen extends Component {

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.headline} >
        {'2do'}
      </Text>
    </View>
    )
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4aa6d9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#fff",
    fontSize: 20
  }
});
