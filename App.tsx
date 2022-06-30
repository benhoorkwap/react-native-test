/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import StockScreen from './screens/StockScreen';
import FamilyPlusScreen from './screens/FamilyPlusScreen.js';
import PortfolioScreen from './screens/PorfolioScreen';
 

// Redux
import store from './redux/store/store';
import {Provider} from 'react-redux';



const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FamilyPlus"
            component={FamilyPlusScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InvestInStock"
            component={StockScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Portfolio"
            component={PortfolioScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
