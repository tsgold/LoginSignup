import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Logo from './src/components/Logo';


class App extends Component {
  render() {
    return(
     <View style={styles.container}>
        <Logo/>
       <TextInput style={styles.inputBox} placeholder="Email" placeholderTextColor="#ffffff"/>

       <TextInput style={styles.inputBox} placeholder="Password" placeholderTextColor="#ffffff"/>
       <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>Submit</Text>
       </TouchableOpacity>

       <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Create an account </Text>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('Register')}><Text style={styles.signupButton}> Sign Up</Text></TouchableOpacity>
       </View>
     </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },

  button: {
    width: 300,
    backgroundColor: '#4a707a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color:'#ffffff',
    textAlign:'center'
  },

  signupTextCont : {
    flexGrow:1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },

  signupText: {
    color: '#1c313a',
    fontSize: 16
  },

  signupButton: {
    color: '#4a707a',
    fontSize:16,
    fontWeight:'700'
  }

})

const Router = createStackNavigator ({
  Home : {
    screen: App
  },

  Register :{
  screen: SignForm
  }
})

export default Router;