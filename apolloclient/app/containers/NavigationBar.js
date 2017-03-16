'use strict'

import React, { Component } from 'react'
import { View, Navigator, StatusBar } from 'react-native'
import { Router, Scene, Actions, DefaultRenderer } from 'react-native-router-flux';

import NavigationButtons from '../components/NavigationButtons'


class NavigationBar extends Component {

  updateView(scene){
    const state = this.props.navigationState;
    const children = state.children[0].children;
    if(scene === "Browse" && children.length > 1){
      Actions.pop()
    }else{
      Actions[scene]()
    }
  }
  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
    <NavigationButtons
      ref={(NavigationButtons) => this.NavigationButtons = NavigationButtons}
      onClick={(scene) => this.updateView(scene)}
      active="Browse"
      >
      <DefaultRenderer
        navigationState={children[0]}
        onNavigate={this.props.onNavigate}
        {...state} />
    </NavigationButtons>
    )
  }
}

export default NavigationBar
