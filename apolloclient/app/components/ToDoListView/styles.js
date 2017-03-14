'use strict'

import { StyleSheet, Dimensions } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  sectionHeaderContainer: {
    width: Dimensions.get('window').width,
    height: 25,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(0,0,0,0.15)'
  },

  spaceKeeperSectionHeaderLeft: {
    flex: 0.3
  },

  sectionHeader: {
    fontSize: 12
  },

  spaceKeeperSectionHeaderRight: {
    flex: 1.8
  },

  separatorContainer: {
    flexDirection: 'row',
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }

});
