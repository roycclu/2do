'use strict'

import { StyleSheet, Dimensions } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(147,177,197)"
  },

  sectionHeaderContainer: {
    width: 80,
    height: 22,
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 6,
    alignSelf: 'center',
    alignItems: 'center'
  },

  spaceKeeperSectionHeaderLeft: {
    flex: 1
  },

  sectionHeader: {
    fontSize: 12,
  },

  spaceKeeperSectionHeaderRight: {
    flex: 1
  },

  separatorContainer: {
    flexDirection: 'row',
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.0)'
  }

});
