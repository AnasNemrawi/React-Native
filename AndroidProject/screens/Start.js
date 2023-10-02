 
import React, {useState} from 'react';  
import {StyleSheet, Text, Button, View} from 'react-native'; 


 
 
 const Start = props => {

  function nav(){
      props.navigation.navigate({routeName: 'SecondScreen'});
  }

   
 return (  
        <View style={styles.container}>  
       
       <Text>Start Page </Text>
        <Button title="Second Screen" onPress={nav}/>
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

export default  Start;


