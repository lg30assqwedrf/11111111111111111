import React from "react";
import { StyleSheet,ScrollView, Linking,View,Image } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';


const targetScreen = ({ route }) => {
  
  return (
    <View style={style.allback}>
    <ScrollView >

    

    <View style={style.back}>
    <Text style={style.word}>暖身</Text>
    <Text style={style.zero}>2</Text>
    <Text style={style.num}>/4</Text>
      <View style={style.line}/>
      <View style={style.line1}/>   
      
    </View>
    <View style={style.back}>
    <Text style={style.word}>伸展</Text>
    <Text style={style.zero}>0</Text>
    <Text style={style.num}>/6</Text>
      <View style={style.line}>
          
      </View>
      </View>
      <View style={style.back}>
      <Text style={style.word}>調節心血管</Text>
      <Text style={style.zero}>0</Text>
      <Text style={style.num}>/6</Text>
      <View style={style.line}>
          
      </View>
      </View>
      <View style={style.back}>
      <Text style={style.word}>全身肌耐力</Text>
      <Text style={style.zero}>0</Text>
      <Text style={style.num}>/4</Text>
      <View style={style.line}>
          
      </View>
      </View>
      <View style={style.back}>
      <Text style={style.word}>暖和運動</Text>
      <Text style={style.zero}>0</Text>
      <Text style={style.num}>/4</Text>
      <View style={style.line}>
          
      </View>
      </View>
        


    

   
  </ScrollView>
  </View>
  );
}
const style = StyleSheet.create({
  allback:{
 
backgroundColor:'#DAD7D7'
  },
  back:{
    height:120,
    width:330,
    backgroundColor:'#FFFFFF',
    marginLeft:25,
    marginTop:25,
    borderRadius:25,
  },
  line:{
      backgroundColor:'#DAD7D7',
      height:3,
      width:280,
      marginTop:25,
      marginLeft:25
  },
  word:{
    color:'#000',
    fontSize:25,
    marginLeft:36,
    marginTop:20,
    fontWeight:'540'
  },
  zero:{
    color:'#000',
    fontSize:25,
    marginLeft:250,
    marginTop:-28,
    fontWeight:'540' 
  },
  num:{
    color:'#000',
    fontSize:20,
    marginLeft:275,
    marginTop:-25,
    fontWeight:'540' 
  },
  line1:{
    backgroundColor:'#C400FF',
    height:3,
    width:140,
    marginTop:-3,
    marginLeft:25
  }
});

export default targetScreen;
