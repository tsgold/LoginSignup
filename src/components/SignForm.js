import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';


class SignForm extends Component{
    render(){
        return(
         <View style={styles.container}>
          <View>
            <Image style={{width:200, height:56, marginVertical:10, marginLeft:10}} 
             source={require('../img/logoLongrich.png')} />
          </View>



          <Text>Nama : <TextInput/></Text>
          <Text>Username : <TextInput/></Text>
          <Text>Password : <TextInput/></Text>
          <Text>Retype Password : <TextInput/></Text>

          <TouchableOpacity></TouchableOpacity>



         </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // backgroundColor:'#7697a0'
        backgroundColor:"#f0f8ff"
      },
    
      inputBox: {
        width: 300,
        backgroundColor: 'rgba(118,151,160,.5)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#7697a0',
        marginVertical:10
      }
})

export default SignForm