import React from 'react';
import {View, Button} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Login from './Login';
import Register from './crearCuenta';
import Index from './Principal';
//import Baucher from './Comprobante';
 //Pagos from './Pago';import
import { color } from 'react-native-reanimated';

const Routes = ({navigation}) => (
   
   <Router >
      <Scene key = "root">
         <Scene key = "Login"  component = {Login} title = "Iniciar Seción" hideNavBar={true} initial = {true}/>
         <Scene key = "Register" component = {Register} title = "Crear cuenta" />
         <Scene key ="Index" component = {Index} title = "Inicio" hideNavBar={true}/>
        
      </Scene>
   </Router>
   
   
)
export default Routes;
/*import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './crearCuenta';
import Index from './Principal';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={Login} hideNavBar={true} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Crear cuenta' }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;*/