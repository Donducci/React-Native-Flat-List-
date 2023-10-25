/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View,} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListView from './src/components/ListView';
import DetailView from './src/components/DetailView';

const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  return <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={ListView} options={{title:'List View'}} />
        <Stack.Screen name="DetailView" component={DetailView} options={{title:'Detail View'}}/>
        </Stack.Navigator>
  </NavigationContainer>;
}
export default App;
