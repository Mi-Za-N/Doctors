import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppRouter from '../../routers/AppRouter/index';

const App = () => {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
};

export default App;
