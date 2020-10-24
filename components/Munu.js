import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Pago from './Pago';
import Uno from './Inicio';
import Compra from './Compra';
import Baucher from './Comprobante';
import Deudas from './Deudores';
import Ingresos from './Graficos';
/*function HomeScreen({ navigation }) {
  /*return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );*/
  /*return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pagina de Inicio</Text>
    </View>
  );
}*/

function NotificationsScreen({ navigation }) {
  /*return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );*/
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Paggina secundaria</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Inicio" component={Uno} />
        
        <Drawer.Screen name="Pago" component={Pago} />
        <Drawer.Screen name="Compra" component={Compra}/>
          
        
        <Drawer.Screen name="Deudores" component={Deudas} />
        <Drawer.Screen name="Ingresos" component={Ingresos}/>
        <Drawer.Screen name="Baucher" component={Baucher}  
          options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null,
                
            }}/>

          
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
