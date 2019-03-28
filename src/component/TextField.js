import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import {StyleSheet} from 'react-native'
import { Input } from 'native-base';

export default class TextField extends React.Component {
  render(){
    return(
      <Input placeholder='Regular Textbox' />
    )
  }
}

const styles = StyleSheet.create({
  menuIcon: {
      zIndex: 9,
      position: 'absolute',
      top:40,
      left:20
  }
}) 
