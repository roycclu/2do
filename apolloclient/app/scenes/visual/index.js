'use strict'

import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import styles from './styles'
import Toolbar from '../../components/Toolbar';
import Graph from '../../components/Graph'
import * as fixtures from '../../components/Graph/fixtures';

// class GraphWithGQL extends Component {
//
// }

class Visual extends Component {

  state = {
    graphData: fixtures.forecastIoData
  };

  onRefresh() {
    console.log(this.constructor.name+" onRefresh() forceUpdate")
    this.forceUpdate()
  }

  render() {
    const graphProps = {};
      graphProps.data = this.state.graphData.daily.data;
      console.log(this.constructor.name," data: ", JSON.stringify(graphProps.data))
      graphProps.xAccessor = d => new Date(d.time * 1000);
      if (false) {
        graphProps.yAccessor = d => d.temperatureMax;
      } else {
        graphProps.yAccessor = d => d.temperatureMin;
      }

    return (
      <View style={styles.container}>
        <Toolbar
          hideStatusBarBG = {Platform.OS != 'ios'}
          text = {'2do Visual'}
          showProgressDots={false}
          onClickRightOne = {this.onRefresh.bind(this)}
          />
        <View style={styles.content}>
          <Graph {...graphProps} />
        </View>
      </View>
    )
  }
}

export default Visual
