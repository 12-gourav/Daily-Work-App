import { View, Text, Platform, StatusBar, SafeAreaView,Image,TouchableOpacity, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {useSelector,useDispatch} from "react-redux";
import { News } from '../Redux/action';
import SkeltonLoader from "../components/SkeltonLoader";

const Notifications = () => {
  const [expanded, setExpanded] = useState(true);
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  const {news,loading} = useSelector(state => state.news);







  useEffect(()=>{
    try {
      dispatch(News());
    } catch (error) {
      dispatch({type:"clearError"});
    }
  },[dispatch])

  const handlePress = () => setExpanded(!expanded);
  return (

    <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
    <SafeAreaView>
    <LinearGradient colors={["#FFFFFF","#EAF0F9"]} style={{height:"100%"}}>
    <View style={{flexDirection:"row",marginTop:20,marginLeft:20}}>
            <TouchableOpacity onPress={()=> Navigation.goBack()}>
            <Image source={require("../assets/backbtn.png")} style={{width:55,height:55,resizeMode:"contain"}}></Image>
            </TouchableOpacity>
          
        </View>
        <View>
            <Text style={{textAlign:"center",fontSize:28,color:"#85AFEE",fontWeight:"700",textShadowColor:"rgba(133, 175, 238, 0.35)",textShadowOffset:{
                width:3,height:4
            },textShadowRadius:8}}>Notifications</Text>
        </View>
       {
        loading ? <SkeltonLoader/> : <ScrollView>
        {
          !news ? <View style={{width:"100%",alignItems:"center",justifyContent:"center",height:"100%",marginTop:30}}>
            <Image source={require("../assets/t12.png")} style={{width:300,height:300,resizeMode:"contain"}}/>
          </View> : (
            
        <View style={{marginTop:40}} >
        {
            news.map((item)=>(
        <List.Accordion
        key={item._id}
               style={{backgroundColor:"transparent"}}
                title={item.title}
                left={() => <Image source={require("../assets/n1.png")}/>}>
                <List.Item title={item.description} titleNumberOfLines={20} style={{fontSize:14,fontWeight:"400"
                 ,color:"red",justifyContent:"center"}} />
               
              </List.Accordion>
         
        
            
              
            
      ))
    }
      </View>
          )
        }
        
    

    </ScrollView>
       }
      <View style={{height:100}}>
       
      </View>








      </LinearGradient>
      </SafeAreaView>
      </View>
  
  )
}

export default Notifications