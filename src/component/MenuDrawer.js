import React from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component {

  navLink(nav, text){
    return(
      <TouchableOpacity
        style={{height: 50}}
        onPress={() => this.props.navigation.navigate(nav)}
      >
        <Text style={styles.labelButton}>
        {text}
        </Text>
      </TouchableOpacity>
    )
  }

  render(){
    return(
      <View style={styles.container}>
      <Text>
        Menu
      </Text>
        <View style={styles.navMenu}>
          {this.navLink('Home', 'Home')}
          {this.navLink('Profile', 'Profile')}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:20,
  },
  navMenu: {
    top:200,
    paddingTop: 10
  },
  labelButton:{
    flex:1,
    fontSize: 20,
    padding: 6,
    color: 'black',
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left'
  }
})