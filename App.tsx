import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
