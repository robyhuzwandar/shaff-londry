import React from 'react';
import {Platform, Dimensions} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import MenuDrawer from '../component/MenuDrawer';


const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) =>{
    return(
      <MenuDrawer navigation={navigation}/>
    )
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen
  }, DrawerConfig
);
const AppContainer = createAppContainer(DrawerNavigator)
export default AppContainer;