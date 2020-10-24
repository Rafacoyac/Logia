/*import React, { Component } from 'react';
import {
     AlertIOS,
     Dimensions,
     Image,
     ScrollView,
     StyleSheet,
     Text,
     TextInput,
     TouchableOpacity,
     View
} from 'react-native';

//mport { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { Actions } from 'react-native-router-flux';

//import firebaseApp from 'AppName/firebase_setup';

// Set width and height to screen dimensions
const { width, height } = Dimensions.get("window"); 

// For Firebase Auth
//const auth = firebaseApp.auth();

// Removed styles for StackOverflow

export default class Login extends Component {
    
     render() {
       return (
         <View style={styles.mainContainer}>
           
             <View style={styles.loginContainer}>

               <View style={styles.inputContainer}>

                 <TextInput
                   style={styles.formInput}
                   placeholder="Email"
                   keyboardType="email-address"
                   autoFocus={true}
                   autoCorrect={false}
                   autoCapitalize="none"
                   //onChangeText={(email) => this.setState({email})}
                 />

                 <TextInput
                   style={styles.formInput}
                   secureTextEntry={true}
                   placeholder="Password"
                   autoCorrect={false}
                   autoCapitalize="none"
                   //onChangeText={(password) => this.setState({password})}
                 />

                 <TouchableOpacity 
                   style={styles.loginButton}
                   //onPress={this._logInUser.bind(this)}
                 >
                   <Text style={styles.loginButtonText}>Log In</Text>
                 </TouchableOpacity>

                 <TouchableOpacity>
                   <Text style={styles.toSignupButton}>Dont have an account? Create one!</Text>
                 </TouchableOpacity>

               </View>
             </View>

             <View style={styles.footer}>
               <Text style={styles.footerText}>
                 By signing up, I agree to TextbookSwap's <Text style={styles.footerActionText}>Terms of Service</Text> and <Text style={styles.footerActionText}>Privacy Policy</Text>.
               </Text>
             </View>
           
         </View>
       );
     }

     
}*/

import React, { Component } from 'react';
import { TouchableOpacity, Text, Image,Button, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
//import { color } from 'react-native-reanimated';

function Login ({navigation}){
  /*constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  go = () => {
           const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === true){
               alert('valid');
           }
           else{
               alert();
           }
 
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
*/
//handleClick = () => {
  //some code
  //alert("Hola mundo");
  //return <Principal/>
// }
  //render() {
    return (
      <View style={styles.container}>
            <View>
                <Image source={require('../images/sos1.png')} style={styles.tinyLogo}/>
            </View>
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
        
        <Button
          title={'Iniciar sesión'}
          //style={styles.input}
          //onPress={this.onLogin.bind(t)}
          onPress = {() => {
            navigation.navigate('Index')
            //this.handleClick(); //usual call like vanilla javascript, but uses this operator
         }}       
        />
        <TouchableOpacity>
                   <Text style={{color:'white'}}>¿Ya tienes una cuenta?
                   <Text 
                   onPress = {() => {
                    navigation.navigate('Register')
                 }}   
                   >  Registrate aqui</Text>
                   </Text>
        </TouchableOpacity>
      </View>
    );
//  }
}
export default Login;
//AppRegistry.registerComponent('App', () => App)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#596C7E',
    
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