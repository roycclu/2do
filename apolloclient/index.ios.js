'use strict'

import React from 'react';
import { AppRegistry } from 'react-native';
// import App from './app'
import Browse from './app/containers/Browse'

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const apolloclient = () => {
  const networkInterface = createNetworkInterface({
    uri: 'http://localhost:8080/graphql'
  })
  const client = new ApolloClient({
    networkInterface
  });
  return (
    <ApolloProvider client={client}>
      <Browse />
    </ApolloProvider>
  )
}

AppRegistry.registerComponent('apolloclient', () => apolloclient);
