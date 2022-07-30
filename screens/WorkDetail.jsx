import { View, Text, Platform, StatusBar, SafeAreaView,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { deleteWork, updateWork,loadUser } from '../Redux/action';

const WorkDetail = () => {
    const Navigation = useNavigation();
    const dispatch = useDispatch();
    const Route = useRoute();
    const d = new Date(Route.params.item.createdAt);
const date  = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;


const taskUpdate = async () =>{

  try {
    await dispatch(updateWork(Route.params.item._id));
    alert("Work Update SuccessFully.....")
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
  }
}


const taskDelete = async ()=>{
  try {
    await  dispatch(deleteWork(Route.params.item._id));
    alert("Work Delete SuccessFully.....")
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
  }
 
}






  return (
    <View style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
    <SafeAreaView>
   
    <LinearGradient colors={["#FFFFFF","#EAF0F9"]} style={{height:"100%"}}>
    <View style={{flexDirection:"row",marginTop:20,marginLeft:20,justifyContent:"space-between",alignItems:"center"}}>
        <TouchableOpacity onPress={()=> Navigation.goBack()}>
        <Image source={require("../assets/backbtn.png")} style={{width:55,height:55,resizeMode:"contain"}}></Image>
        </TouchableOpacity>
        <Text style={{fontWeight:"400",fontSize:18,color:"black",paddingRight:10,fontSize:16}}> {date}</Text>
    </View>
    <ScrollView>
    <View>
            <Text style={{textAlign:"center",fontSize:28,color:"#85AFEE",fontWeight:"700",textShadowColor:"rgba(133, 175, 238, 0.35)",textShadowOffset:{
                width:3,height:4
            },textShadowRadius:10}}>Your Work</Text>
        </View>

<View style={{flex:1,marginTop:20}}>

<View style={{padding:20}}>
<Text style={{fontSize:18,fontWeight:"700",color:"#000",lineHeight:26}}> {Route.params.item.title} </Text>
<Text style={{color:"#595757",lineHeight:26,textAlign:"justify",fontWeight:"400",fontSize:17,paddingLeft:20,paddingTop:20}}>
{Route.params.item.description}</Text>



<Text style={{fontWeight:"bold",marginTop:18,fontSize:18,color:"#73A2E9"}}>Status :-  {Route.params.item.completed ? <Text style={{color:"green"}}>Completed</Text> : <Text style={{color:"red"}}>Not Completed</Text>}</Text>
</View>

<TouchableOpacity onPress={() => taskUpdate()}><Image source={require("../assets/updatebtn.png")} style={{resizeMode:"contain",width:"100%",height:60,marginTop:20}}/></TouchableOpacity>
<TouchableOpacity  onPress={() => taskDelete()}><Image source={require("../assets/delbtn.png")} style={{resizeMode:"contain",width:"100%",height:60,marginTop:20}}/></TouchableOpacity>






</View>




</ScrollView>

    </LinearGradient>

    </SafeAreaView>
    </View>
  )
}

export default WorkDetail