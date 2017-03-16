'use strict'

import React, { Component } from 'react'
import { View, Navigator, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { Router, Scene, Modal, Actions } from 'react-native-router-flux';

import Launch from './Launch'
import NavigationBar from './NavigationBar'
import Browse from './Browse'
import Visual from './Visual'

const RouterWithRedux = connect()(Router);

class AppRouter extends Component {

  render() {
    return (
    <View style={{flex: 1}}>
      <StatusBar hidden={false}
        backgroundColor="#459DF5"
        barStyle="light-content"/>
      <RouterWithRedux>
          <Scene key="root" hideNavBar hideTabBar>
            <Scene key="Launch" component={Launch} title="Launch" initial={true}/>
            <Scene key="Main" component={NavigationBar} hideNavBar hideTabBar>
              <Scene key="MainContainer" hideNavBar hideTabBar>
                <Scene key="Browse" component={Browse} title="Browse" initial />
                <Scene key="Visual" component={Visual} title="Visual"  direction="lefttoright" />
              </Scene>
            </Scene>
          </Scene>
      </RouterWithRedux>
    </View>
    )
  }
}

export default AppRouter
