import { View, Text, Image } from 'react-native'
import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from './screens/Home';
import Logout from './screens/Logout';

import Login from './screens/Login';
import Notifications from './screens/Notifications';
import TaskMenue from './screens/TaskMenue';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (

<Tab.Navigator initialRouteName='home' screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:{
    position:"absolute",bottom:20,left:20,right:20,elevation:0,borderRadius:15,height:70,
},tabBarActiveTintColor:"#85AFEE"}}


>
    
    <Tab.Screen name="home" component={Home} options={{tabBarIcon:()=>(
        <Image source={require("./assets/i1.png")} style={{width:30,height:30,resizeMode:"contain"}}></Image>
    )}}></Tab.Screen>
    <Tab.Screen name="notifications" component={Notifications} options={{tabBarIcon:()=>(
        <Image source={require("./assets/i2.png")} style={{width:30,height:30,resizeMode:"contain"}}></Image>
    )}}></Tab.Screen>
    <Tab.Screen name="taskmenue" component={TaskMenue} options={{tabBarIcon:()=>(
        <Image source={require("./assets/i3.png")} style={{width:90,height:90,resizeMode:"contain",marginBottom:45}}></Image>
    )}}></Tab.Screen>
    <Tab.Screen name="profile" component={Profile} options={{tabBarIcon:()=>(
        <Image source={require("./assets/i4.png")} style={{width:30,height:30,resizeMode:"contain"}}></Image>
    )}}></Tab.Screen>
   
   <Tab.Screen name="logout" component={Logout} options={{tabBarIcon:()=>(
        <Image source={require("./assets/i5.png")} style={{width:30,height:30,resizeMode:"contain"}}></Image>
    )}}></Tab.Screen>
    
</Tab.Navigator>


  )
}

export default BottomNav