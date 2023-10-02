 
import React, {useState} from 'react';  
import {StyleSheet, Text, TextInput, Button, View,Image,Dimensions} from 'react-native'; 


 
 
 const Third = props => {

   
 return (  
        <View style={styles.container}>  
       
       <Text>Third Page </Text>
         <Button title="Go Back" onPress={() => {
        props.navigation.popToTop();
      }}/>
        </View>  
    );  
  
 
}


const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
         flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center'  
    },  


});  

export default Third;


