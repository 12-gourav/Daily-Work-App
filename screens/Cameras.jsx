import React, { useState, useEffect } from 'react';
import {  Text, View, TouchableOpacity,Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const Cameras = () => {
  const Navigation = useNavigation();
  const Route = useRoute();
  console.log(Route.params.updateProfile);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [camera, setCamera] = useState(null);
    
    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

const openImagePickerAsync = async () =>{
const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
if(permissionResult.granted === false){
   alert("Permission toj access camera roll is required!");
   return
}
const data = await ImagePicker.launchImageLibraryAsync({
  allowsEditing:true,aspect:[1,1],quality:1
});
console.log(data.uri);
if(Route.params.updateProfile){
  return Navigation.navigate("updateprofile",{image:data.uri});
}else{
  return Navigation.navigate("register",{image:data.uri});
}


}

const clickPicture = async ()=>{

  const data = await camera.takePictureAsync();
  if(Route.params.updateProfile){
    return Navigation.navigate("updateprofile",{image:data.uri});
  }else{
    return Navigation.navigate("register",{image:data.uri});
  }
  
}


    return (
      <View style={{flex:1}} >
        <Camera  type={type} style={{flex:1}} ratio="18:9" ref={(e)=> setCamera(e)} />

          <View style={{flexDirection:"row",position:"absolute"
          ,bottom:0,justifyContent:"space-evenly",width:"100%",backgroundColor:"rgba(0,0,0,0.6)",paddingBottom:15,paddingTop:15}}>

    <TouchableOpacity onPress={openImagePickerAsync}>
    <Image source={require("../assets/b3.png")}></Image>
    </TouchableOpacity>

    <TouchableOpacity onPress={clickPicture} >
    <Image source={require("../assets/b2.png")}></Image>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setType(type === CameraType.back ? CameraType.front : CameraType.back)}>
    <Image source={require("../assets/b1.png")}></Image>
    </TouchableOpacity>

          </View>
 
      </View>
    );
  
}

export default Cameras