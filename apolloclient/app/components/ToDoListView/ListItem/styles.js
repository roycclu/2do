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
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },

  itemWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    height: 42
  },

  iconCheck: {
    marginRight: (width - shrink)/20,
    marginLeft: (width - shrink)/20
  },

  checkbox: {
    width: 18,
    height: 18,
    marginLeft: (width - shrink)/20
  },

  text: {
    flex: 1,
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0)',
    fontWeight: '300',
    color: 'rgba(0,0,0,.8)',
    paddingBottom: 0
  },

  delBtn: {
    backgroundColor: 'red',
    flex: 1,
    padding: 5,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }


});
