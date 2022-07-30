import { View, Text, Platform, StatusBar, SafeAreaView, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {Avatar} from "react-native-paper";
import mime from "mime";
import {useDispatch} from "react-redux";
import { registerUser } from '../Redux/action';

const Register = () => {

  const Route = useRoute();
const dispatch = useDispatch();
  const Navigaition = useNavigation();
  const [name,setName] = useState("");
const [gmail,setGmail] = useState("");
const [password,setPassword] = useState("");
const [avatar,setAvatar] = useState("");

const handleSubmit = async () => {
  if(!gmail || !password || !name){
    return alert("plz fill all the fields")
  }

  const myForm = new FormData();

  myForm.append("name",name);
  myForm.append("email",gmail);
  myForm.append("password",password);
  myForm.append("avatar",{
    uri:avatar,
    type:mime.getType(avatar),
    name:avatar.split("/").pop()
  })

  console.log(myForm);
await dispatch(registerUser(myForm));
alert("Your OTP has been sent successfully in your Register Mail account ! Verify Your Account Otherwise Your Account has benn Deleted.......")


  Navigaition.navigate("vaccount")
}

useEffect(()=>{

if(Route.params){
  if(Route.params.image){
    setAvatar(Route.params.image);
   
  }
}

},[Route,Navigaition])





  return (
    <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
    <SafeAreaView>
    
    <LinearGradient colors={["#FFFFFF","#EAF0F9"]} style={{height:"100%"}}>
    <ScrollView showsVerticalScrollIndicator={false}>
  <View style={{width:"100%",padding:40}}>
    <Text style={{fontWeight:"700",fontSize:28,textAlign:"center",color:"#85AFEE"}}>Register</Text>
  </View>
  <View style={{alignItems:"center"}}>
    <TouchableOpacity onPress={()=> Navigaition.navigate("camera",{updateProfile:false})}>
      {
        avatar ? <Avatar.Image size={120} source={{uri:avatar}}  style={{resizeMode:"contain",
    }} /> :  <Image source={require("../assets/register.png")}
         style={{resizeMode:"contain",width:100,height:100}}></Image>
      }
   
    </TouchableOpacity>
 

  <View style={{width:"100%",paddingLeft:25,marginTop:30,paddingRight:25}}>
<Text style={{fontWeight:"700",fontSize:16,color:"#595757"}}>Username :-</Text>
<View style={{backgroundColor:"#fff",overflow:'hidden',width:"100%",flexDirection:'row',alignItems:"center",height:50,marginTop:20,borderRadius:20}}>
<Image source={require("../assets/user.png")} style={{resizeMode:"contain",width:18,height:20,marginLeft:20}}></Image>
<TextInput defaultValue={name} onChangeText={(e)=> setName(e)} style={{width:"75%",color:"black",marginLeft:20,height:50}} placeholder="Enter Your Name"></TextInput>
</View>
</View>
<View style={{width:"100%",paddingLeft:25,marginTop:30,paddingRight:25}}>
<Text style={{fontWeight:"700",fontSize:16,color:"#595757"}}>Gmail :-</Text>
<View style={{backgroundColor:"#fff",overflow:'hidden',width:"100%",flexDirection:'row',alignItems:"center",height:50,marginTop:20,borderRadius:20}}>
<Image source={require("../assets/user.png")} style={{resizeMode:"contain",width:18,height:20,marginLeft:20}}></Image>
<TextInput defaultValue={gmail} onChangeText={(e)=> setGmail(e)} style={{width:"75%",color:"black",marginLeft:20,height:50}} placeholder="Enter Your Gmail"></TextInput>
</View>
</View>
<View style={{width:"100%",paddingLeft:25,marginTop:30,paddingRight:25}}>
<Text style={{fontWeight:"700",fontSize:16,color:"#595757"}}>Password :-</Text>
<View style={{backgroundColor:"#fff",overflow:'hidden',width:"100%",flexDirection:'row',alignItems:"center",height:50,marginTop:20,borderRadius:20}}>
<Image source={require("../assets/lock.png")} style={{resizeMode:"contain",width:18,height:20,marginLeft:20}}></Image>
<TextInput secureTextEntry={true} t defaultValue={password} onChangeText={(e)=> setPassword(e)} style={{width:"75%",color:"black",marginLeft:20,height:50}} placeholder="Enter Your Password"></TextInput>
</View>
</View>

<View style={{marginTop:50}}>
<TouchableOpacity onPress={()=> Navigaition.navigate("login")}>
  <Text style={{fontWeight:"700",color:"#6C6C6C",fontSize:16}}>Already Have an Account ?</Text>
</TouchableOpacity>
</View>

<View style={{marginTop:40}}>
<TouchableOpacity onPress={handleSubmit}>
  <Image source={require("../assets/registerbtn.png")} style={{resizeMode:"contain",width:320,height:70}}></Image>
</TouchableOpacity>
</View>






  </View>







  </ScrollView>
</LinearGradient>

    </SafeAreaView>
  
  </View>
  )
}

export default Register