'use strict'

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import Browse from './app/containers/Browse'
import AppRouter from './app/containers/AppRouter'

import Entry from './app/entry'

class apolloclient extends Component {
  render() {
    return (
    <Entry />
    )
  }
}

AppRegistry.registerComponent('apolloclient', () => apolloclient);
