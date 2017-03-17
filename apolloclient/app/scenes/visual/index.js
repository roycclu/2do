'use strict'

import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import styles from './styles'
import Toolbar from '../../components/Toolbar';
import Graph from '../../components/Graph';
import * as fixtures from '../../components/Graph/fixtures';
import * as seed from '../../components/Graph/seed';
import OptionTab from '../../components/OptionTab'

class Visual extends Component {

  state = {
    graphData: seed.completionData,
    showTimely: true
  };

  onRefresh() {
    console.log(this.constructor.name+" onRefresh() forceUpdate")
    this.forceUpdate()
  }

  onChange = (newVal) => {
    console.log(this.constructor.name," onChange newVal: ", newVal)
    const showTimely = newVal === 'left';
    if (this.state.showTimely !== showTimely) {
      this.setState({ showTimely });
    }
  };

  render() {
    const graphProps = {};
      graphProps.data = this.state.graphData;
      console.log(this.constructor.name," data: ", JSON.stringify(graphProps.data))
      graphProps.xAccessor = d => new Date(d.time * 1000);
      if (this.state.showTimely) {
        graphProps.yAccessor = d => d.ontime;
      } else {
        graphProps.yAccessor = d => d.late;
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
          <OptionTab
            default={'left'}
            leftText={'准时完成'}
            rightText={'迟过目标'}
            onSwitch={this.onChange.bind(this)}/>
          <Graph {...graphProps} />
          <View style={{height: 40}}/>
        </View>
      </View>
    )
  }
}

export default Visual
