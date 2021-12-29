import React from 'react';
import {LoginPage} from './pages/LoginPage';
import {MenuPage} from './pages/MenuPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {ListObras} from "./pages/obras/ListObras";
import {ViewObra} from "./pages/obras/ViewObra";

const Stack = createStackNavigator();

export const Navigation = (props) => {
  const {user} = useSelector((state) => state);

  return (
    <>
      <NavigationContainer>
        {user && (
          <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen name="Menu" component={MenuPage} />
              <Stack.Screen name="Ver Obras" component={ListObras} />
              <Stack.Screen name="Detalle Obra" component={ViewObra} />
          </Stack.Navigator>
        )}
        {!user && (
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{title: 'Ingreso'}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};
