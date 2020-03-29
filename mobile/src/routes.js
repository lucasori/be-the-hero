// Importações
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Crinado app
 const AppStack = createStackNavigator();

// Importando pafinas
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

 //Exportar um componente
 export default function Routes(){
     return(
         // Adicionando rotas
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
     );
 } 