import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ButtonPress extends React.Component {

  render() {
    return (
      <TouchableOpacity style={styles.btn} onPress={this.props.Klik} >
        <Text style={styles.label}> {this.props.title} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  label: {
    color: 'white'
  }
});
