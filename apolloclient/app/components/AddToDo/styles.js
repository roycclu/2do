'use strict'

import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const shrink = 60;

module.exports = StyleSheet.create({

  wrapper: {
    width: width,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(147,177,197)'
  },

  itemWrapper: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,.35)',
    alignItems: 'center',
    borderRadius: 5
  },

  iconAdd: {
    marginRight: (width - shrink)/20,
    marginLeft: (width - shrink)/20
  },

  textInput: {
    flex: 1,
    fontSize: 16,
    height: 45,
    width: width - shrink,
    fontWeight: '300',
    color: 'white',
    paddingBottom: 0
  }

});
