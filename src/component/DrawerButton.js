import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import {StyleSheet} from 'react-native'

export default class DrawerButton extends React.Component {
  render(){
    console.log('NAV',this.props.navigation)
    return(
      <Ionicons
        name="md-menu"
        color="grey"
        size={32}
        style={styles.menuIcon}
        onPress= {() => this.props.navigation.toggleDrawer()}
      />
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