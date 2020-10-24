import React, { Component } from 'react';
import { AppRegistry, Text, Image, Button, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

//export default class App extends Component
 function crearCuenta ({navigation}){
handleClick = () => {
  //some code
  alert("Hola mundo");

  Actions.Register
 }
  //render() {
    return (
      <View style={styles.container}>
            
        <TextInput
          //value={this.state.username}
          //onChangeText={(username) => this.setState({ username })}
           //label='Email'
           placeholder = "Nombre de Usuario"
           //placeholderTextColor = "#FFFF"
          style={styles.input}
        />
        <TextInput
          //value={this.state.password}
          //onChangeText={(password) => this.setState({ password })}
          //label='Password'
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          //value={this.state.password}
          //onChangeText={(password) => this.setState({ password })}
          //label='Password'
          placeholder="Repita su contraseña"
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Registrarse'}
          style={styles.input}
          onPress = {() => {
            navigation.navigate('Login')
         }} 
          //onPress={this.onLogin.bind(t)}
          //onPress = {}
          
        />
        
      </View>
    );
  //}
}
export default crearCuenta;
//AppRegistry.registerComponent('App', () => App)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#413E46',
    
  },
  input: {
    width: 200,
    height: 20,
    padding: 10,
    //borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    fontFamily : 'Arial',
    //borderWidth: 1,
    
    //borderColor: 'black',
    //marginBottom: 10,
  },
  tinyLogo: {
    //padding : -30,
    width: 120,
    height: 120,
  },
});