import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
function HomeScreen({ navigation }) {
    
    return (
      <View style={{ flex: 1,backgroundColor: '#413E46'}}>
          <View style={styles.Header}>
                <Text style={styles.texto}>Inicio</Text>
            </View>
      </View>
    );
  }
  
  export default HomeScreen;
  const styles = StyleSheet.create({
    Header: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E6B24B', 
      height: 50
    },
    texto:{
      fontSize: 20,
      fontWeight: 'bold',
      color :'white'
  }
  });