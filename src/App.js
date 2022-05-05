import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import Characters from './pages/Characters';
import Detail from './pages/Detail/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Characters" component={Characters} options={{ headerTintColor: 'red', headerTitleAlign: 'center', title: 'Breaking Bad Characters' }} />
        <Stack.Screen name="DetailPage" component={Detail} options={({ route }) => ({ title: route.params.title, headerTintColor: 'red', headerTitleAlign: 'center' })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
