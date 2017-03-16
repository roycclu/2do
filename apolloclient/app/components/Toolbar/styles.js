'use strict'

import { StyleSheet, Dimensions } from 'react-native';

module.exports = StyleSheet.create({

  toolbarWrapper: {
    flexDirection: 'column'
  },

  statusBariPhone: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#358ec8',
    height: 20
  },
// '#7dc0ea'
// '#4aa6d9'
  toolbar: {
    flexDirection: 'row',
    backgroundColor: '#358ec8',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40,
    width: Dimensions.get('window').width
  },

  iconLeftOneWrapper: {
    flex: 1,
    alignItems: 'center'
  },

  iconLeftTwoWrapper: {
    flex: 1,
    alignItems: 'center'
  },

  contentWrapper: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  toolbarText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: "#fff",
    fontSize: 20,
    marginTop: 0,
    marginBottom: 0,
  },

  iconRightTwoWrapper: {
    flex: 1,
    alignItems: 'center'
  },

  iconRightOneWrapper: {
    flex: 1,
    alignItems: 'center'
  },

  progressDotsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  progressDot: {
    marginLeft: 6,
    marginRight: 6,
    marginTop: 3
  },

});
