'use strict'

import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width
  },
  innerContainer: {
    backgroundColor: 'transparent',
    position: 'relative',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  active: {
    textDecorationLine: 'underline'
  },
  containerCreatePost: {
    flexDirection: 'row',
    backgroundColor: '#459DF5',
    height: 45,
    width: 45,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  active: {
    textDecorationLine: 'underline'
  },
  me: {
    backgroundColor: 'transparent'
  },
  meActive: {
    color: '#459DF5',
    backgroundColor: 'transparent'
  },
  timeline: {
    backgroundColor: 'transparent'
  },
  timelineActive: {
    color: '#459DF5',
    backgroundColor: 'transparent'
  },
  timelineContainer:{
      marginLeft: 15,
      marginRight: 15,
      height: 30,
      width: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      shadowColor: "rgba(0,0,0,1)",
      shadowOpacity: 0.4,
      shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
  },
  meContainer:{
      marginLeft: 15,
      marginRight: 15,
      height: 30,
      width: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      shadowColor: "rgba(0,0,0,1)",
      shadowOpacity: 0.4,
      shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
  }
})
