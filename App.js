import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import DogBreeds from './src/screens/DogBreeds';
import DogSelection from './src/screens/DogSelection';

console.disableYellowBox = true;  // disable yellow warnings
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
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

  MainStackScreen() {
    return (
      <MainStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="DogBreeds" component={DogBreeds} />
      </MainStack.Navigator>
    )
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
        <RootStack.Navigator
          screenOptions={{
            headerShown: false
          }}
          mode="modal"
        >
          <RootStack.Screen name="Main" component={this.MainStackScreen} />
          <RootStack.Screen name="DogSelection" component={DogSelection} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}