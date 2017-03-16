'use strict'

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Actions } from 'react-native-router-flux'

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import AppRouter from './containers/AppRouter'

export default class Entry extends Component {

  componentDidMount() {
    setTimeout(() => {
      Actions['Main']()
    }, Platform.OS != 'ios' ? 1500 : 1500)
  }

  render() {
    const networkInterface = createNetworkInterface({
      uri: 'http://localhost:8080/graphql'
    })
    const client = new ApolloClient({
      networkInterface
    });
    return (
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    )
  }
}
