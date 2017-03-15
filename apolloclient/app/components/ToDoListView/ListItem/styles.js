'use strict'

import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const shrink = 60;

module.exports = StyleSheet.create({

  wrapper: {
    width: width,
    height: 50,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  itemWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
  },

  iconCheck: {
    marginRight: (width - shrink)/20,
    marginLeft: (width - shrink)/20
  },

  text: {
    flex: 1,
    fontSize: 16,
    height: 22,
    backgroundColor: 'rgba(255,0,0,.1)',
    fontWeight: '300',
    color: 'rgba(0,0,0,.8)',
    paddingBottom: 0
  }

});
