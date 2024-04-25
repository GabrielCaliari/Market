import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes';
import CartProvider from './src/contexts/CartContext';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}

export default App;
