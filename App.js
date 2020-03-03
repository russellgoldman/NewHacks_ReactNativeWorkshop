import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DogBreedsScreen from './src/screens/DogBreedsScreen';

const Stack = createStackNavigator();
export default class App extends Component {
  state = {
    isLoadingComplete: false
  };
  

  async _loadResourcesAsync() {
    await Promise.all([
      Asset.loadAsync([
        require('./assets/images/Logo.png'),
      ]),
      Font.loadAsync({
        'GrandHotel-Regular': require('./assets/fonts/GrandHotel-Regular.ttf'),
        'Futura-Medium': require('./assets/fonts/Futura-Medium.ttf'),
        'FugazOne-Regular': require('./assets/fonts/FugazOne-Regular.ttf'),
      }),
    ]);
  }
  
  handleLoadingError(error) {
    console.warn(error);
  }

  handleFinishLoading() {
    this.setState({ isLoadingComplete: true })
  }

  render() {
    const { isLoadingComplete } = this.state;

    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={() => this.setState({ isLoadingComplete: true })}
          onError={console.warn}
        />
      ); 
    }

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DogBreedsScreen" component={DogBreedsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}