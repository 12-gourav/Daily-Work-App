import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import {useDispatch} from "react-redux";
import { logoutUser } from '../Redux/action';

const Logout = () => {

  const dispatch = useDispatch();





  useEffect(()=>{

    dispatch(logoutUser());
  
  },[dispatch])





  return (
    <View>
      <Text>Logout</Text>
    </View>
  )
}

export default Logout