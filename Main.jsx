import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './screens/Home';
import BottomNav from './BottomNav';
import TaskMenue from './screens/TaskMenue';
import Logout from "./screens/Logout";
import Login from "./screens/Login";
import Register from "./screens/Register";
import TaskList from './screens/TaskList';
import TaskDetail from './screens/TaskDetail';
import WorkList from './screens/WorkList';
import WorkDetail from './screens/WorkDetail';
import ClientList from "./screens/ClientList";
import ClientDetail from "./screens/ClientDetail";
import Comming from './screens/Comming';
import Notifications from './screens/Notifications';
import AddTask from './screens/AddTask';
import AddWork from './screens/AddWork';
import AddClient from './screens/AddClient';
import Profile from './screens/Profile';
import UpdateProfile from './screens/UpdateProfile';
import Forget from './screens/Forget';
import Cameras from './screens/Cameras';
import VerifyAccount from './screens/VerifyAccount';
import {useSelector,useDispatch} from "react-redux";
import { loadUser } from './Redux/action';
import SkeltonLoader from './components/SkeltonLoader';
import ResetPassword from './screens/ResetPassword';

const Main = () => {
  const dispatch = useDispatch();
    const Stack = createNativeStackNavigator();
  
   
    const {isAuthenticated,loading} = useSelector(state => state.auth);




useEffect(()=>{
  dispatch(loadUser());
 
  
},[dispatch]);




  return (
    loading ?<SkeltonLoader/>
     : 
      <NavigationContainer>
    <Stack.Navigator initialRouteName={isAuthenticated ? "wrap" : "login"}>
    <Stack.Screen name="wrap" component={BottomNav} options={{headerShown:false}}  />
        <Stack.Screen name="home" component={Home} options={{headerShown:false}}  />
        <Stack.Screen name="login" component={Login} options={{headerShown:false}}  />
        <Stack.Screen name="register" component={Register} options={{headerShown:false}}  />
        <Stack.Screen name="taskmenue" component={TaskMenue} options={{headerShown:false}}  />
        <Stack.Screen name="logout" component={Logout} options={{headerShown:false}}  />
        <Stack.Screen name="notifications" component={Notifications} options={{headerShown:false}}  />
        <Stack.Screen name="tasklist" component={TaskList} options={{headerShown:false}}  />
        <Stack.Screen name="taskdetail" component={TaskDetail} options={{headerShown:false}}  />
        <Stack.Screen name="worklist" component={WorkList} options={{headerShown:false}}  />
        <Stack.Screen name="workdetail" component={WorkDetail} options={{headerShown:false}}  />
        <Stack.Screen name="clientlist" component={ClientList} options={{headerShown:false}}  />
        <Stack.Screen name="clientdetail" component={ClientDetail} options={{headerShown:false}}  />
        <Stack.Screen name="comming" component={Comming} options={{headerShown:false}}  />
        <Stack.Screen name="addtask" component={AddTask} options={{headerShown:false}}  />
        <Stack.Screen name="addwork" component={AddWork} options={{headerShown:false}}  />
        <Stack.Screen name="addclient" component={AddClient} options={{headerShown:false}}  />
        <Stack.Screen name="profile" component={Profile} options={{headerShown:false}}  />
        <Stack.Screen name="updateprofile" component={UpdateProfile} options={{headerShown:false}}  />
        <Stack.Screen name="forget" component={Forget} options={{headerShown:false}}  />
        <Stack.Screen name="camera" component={Cameras} options={{headerShown:false}}  />
        <Stack.Screen name="vaccount" component={VerifyAccount} options={{headerShown:false}}  />
        <Stack.Screen name="resetPassword" component={ResetPassword} options={{headerShown:false}}  />
    </Stack.Navigator>
   </NavigationContainer>
    )
   
  
}

export default Main