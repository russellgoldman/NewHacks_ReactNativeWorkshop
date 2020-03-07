import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import DogBreeds from './src/screens/DogBreeds';
import DogSelection from './src/screens/DogSelection';

// Used to disable yellow warnings in Simulator, feel free to remove
console.disableYellowBox = true;
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

// All Class Components must extend Component
export default class App extends Component {
  // Define local state
  state = {
    isLoadingComplete: false
  };
  
  // Async stands for an asychronous function, the time it takes to complete is unknown at runtime
  async _loadResourcesAsync() {
    // We must always await a Promise as we do not know when it will be fulfilled or denied
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

  // Definitions for main screens using React Navigation
  MainStackScreen() {
    return (
      <MainStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {/* All standard screens are defined here */}
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="DogBreeds" component={DogBreeds} />
      </MainStack.Navigator>
    )
  }

  render() {
    const { isLoadingComplete } = this.state;

    /* If the app is loading local project fonts and images, we show the
    AppLoading component until complete */
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={() => this.setState({ isLoadingComplete: true })}
          onError={console.warn}
        />
      ); 
    }

    // The RootStack nests all other StackNavigators 
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            // Hides the default navigation bar
            headerShown: false
          }}
          /* For this screen to be rendered as a modal, its mode must be set to `modal`
          and included in the RootStack */
          mode="modal"
        >
          {/* All non-modal screens must be defined in MainStack.Navigator,
          we link it here */}
          <RootStack.Screen name="Main" component={this.MainStackScreen} />
          {/* All modal screens are defined here */}
          <RootStack.Screen name="DogSelection" component={DogSelection} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}