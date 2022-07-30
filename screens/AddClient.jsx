import { View, Text, Platform, StatusBar, SafeAreaView,Image,TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addClient } from "../Redux/action";

const AddClient = () => {
    const Navigation = useNavigation();
    const dispatch = useDispatch();
const [title,setTitle] = useState();
const [description,setDescription] = useState();

const handleSubmit = () => {
try {
    if(!title || !description){
        return alert("plz fill all the fields")
    }
    dispatch(addClient(title,description))
alert("Client Added Successfully");
setDescription("");
setTitle("");
} catch (error) {
    dispatch({type:"clearError"});
}
}


  return (
    <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
    <SafeAreaView>
    <LinearGradient colors={["#FFFFFF","#EAF0F9"]} style={{height:"100%"}}>
    <View style={{flexDirection:"row",marginTop:20,marginLeft:20}}>
            <TouchableOpacity onPress={()=> Navigation.goBack()}>
            <Image source={require("../assets/backbtn.png")} style={{width:55,height:55,resizeMode:"contain"}}></Image>
            </TouchableOpacity>
        </View>
<ScrollView>
        <View style={{marginTop:30}}>
        <Text style={{textAlign:"center",fontSize:28,color:"#85AFEE",fontWeight:"700",textShadowColor:"rgba(133, 175, 238, 0.35)",textShadowOffset:{
                width:3,height:4
            },textShadowRadius:10}}>Create Client</Text>

<View style={{paddingLeft:20,paddingRight:20,marginTop:40}}>
    <Text style={{fontSize:18,color:"#595757",fontWeight:"700"}}>Title :-</Text>
    <View style={{backgroundColor:"#fff",marginTop:20,height:55,justifyContent:"center"
    ,paddingLeft:30,borderRadius:20}}>
    
    <TextInput defaultValue={title} onChangeText={(e) => setTitle(e)} style={{width:"100%",paddingRight:10,color:"silver"}} placeholder='Enter Your Title'></TextInput>
    </View>
   
</View>

<View style={{paddingLeft:20,paddingRight:20,marginTop:40}}>
    <Text style={{fontSize:18,color:"#595757",fontWeight:"700"}}>Description :-</Text>
    <View style={{backgroundColor:"#fff",marginTop:20,height:200,justifyContent:"center"
    ,paddingLeft:30,borderRadius:20}}>
    
    <TextInput defaultValue={description} onChangeText={(e) => setDescription(e)}  style={{width:"100%",height:"100%",paddingRight:10,color:"silver",lineHeight:26}} 
    numberOfLines={5} placeholder='Enter Your Description' multiline ></TextInput>
    </View>
   
</View>


        </View>


        <View style={{alignItems:"center",marginTop:20}}>
            <TouchableOpacity onPress={handleSubmit}>
                <Image source={require("../assets/add3.png")} style={{resizeMode:"contain",width:320,height:250}}></Image>
            </TouchableOpacity>
        </View>









</ScrollView>

        </LinearGradient>
        </SafeAreaView>
        </View>
  )
}


export default AddClient