import React from 'react'
import {View, Text, StyleSheet} from 'react-native' 
import DrawerButton from '../component/DrawerButton';
import TextField from '../component/TextField';

export default class HomeScreen extends React.Component {
  render(){
    return(
      <View>
        <DrawerButton navigation={this.props.navigation}/>
        <View style={styles.container}>
          <Text>Home</Text>
          <TextField/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {  
    top: 300,
    alignItems: 'center',
    justifyContent: 'center',
  }
})