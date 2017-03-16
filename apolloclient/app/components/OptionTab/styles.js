'use strict'

import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const shrink = 60;

module.exports = StyleSheet.create({

  wrapper: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  itemWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,.4)',
    borderWidth: 1,
    alignItems: 'stretch',
    borderRadius: 5
  },

  divider: {
    backgroundColor: 'rgba(0,0,0,.4)',
    width: 1
  },

  optionWrapper: {
    width: 120,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 16,
    fontWeight: '300',
    color: 'black'
  }

});
