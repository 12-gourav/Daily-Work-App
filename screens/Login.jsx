import { View, Text, Platform, StatusBar, SafeAreaView, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {useDispatch,useSelector} from "react-redux";
import {  login } from '../Redux/action';


const Login = () => {
const dispatch = useDispatch();

const {error,message} = useSelector(state=>state.auth);


  const Navigaition = useNavigation();
const [gmail,setGmail] = useState("");
const [password,setPassword] = useState("");


const handleSubmit = () => {
  if(!gmail && !password){
    return alert("plz fill all the fields")
  }
   dispatch(login(gmail,password));
  setGmail("");
  setPassword("");
}


useEffect(()=>{
  if(error){
    alert(error);
    dispatch({type:"clearError"});
  }
  if(message){
    dispatch({type:"clearMessage"})
  }
 
},[dispatch,alert,error,message]);



  return (
    <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
      <SafeAreaView>
      
      <LinearGradient colors={["#FFFFFF","#EAF0F9"]} style={{height:"100%"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{width:"100%",padding:40}}>
      <Text style={{fontWeight:"700",fontSize:28,textAlign:"center",color:"#85AFEE"}}>Login</Text>
    </View>
    <View style={{alignItems:"center"}}>
    <Image source={require("../assets/login.png")} style={{resizeMode:"contain",width:100,height:100}}></Image>

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
  <TouchableOpacity onPress={()=> Navigaition.navigate("register") }>
    <Text style={{fontWeight:"700",color:"#6C6C6C",fontSize:16}}>Don't Have an Account ?</Text>
  </TouchableOpacity>
</View>
<View style={{marginTop:20}}>
  <TouchableOpacity onPress={()=> Navigaition.navigate("forget")}>
    <Text style={{fontWeight:"700",color:"#6C6C6C",fontSize:16}}>Forget Password ?</Text>
  </TouchableOpacity>
</View>

<View style={{marginTop:40}}>
  <TouchableOpacity onPress={handleSubmit}>
    <Image source={require("../assets/loginbtn.png")} style={{resizeMode:"contain",width:320,height:70}}></Image>
  </TouchableOpacity>
</View>






    </View>







    </ScrollView>
</LinearGradient>

      </SafeAreaView>
    
    </View>
  )
}

export default Login