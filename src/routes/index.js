import Home from '../pages/Home';
import React from 'react';
import Cart from '../pages/Cart';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Initial"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: 'Meu carrinho',
        }}
      />
    </Stack.Navigator>
  );
}
