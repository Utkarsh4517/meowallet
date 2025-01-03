/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './global.css';
import 'react-native-get-random-values'
import 'react-native-url-polyfill/auto';
import React, {useState} from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OnboardingScreen} from './src/screens/OnboardingScreen';
import {HomeScreen} from './src/screens/HomeScreen';
import {WalletScreen} from './src/screens/WalletScreen';
import {SwapScreen} from './src/screens/SwapScreen';
import {SettingsScreen} from './src/screens/SettingsScreen';
import SelectWallet from './src/screens/SelectWallet';
import {ImportWallet} from './src/screens/ImportWallet';
import {CreateWallet} from './src/screens/CreateWallet';

const Tab = createBottomTabNavigator();
const OnboardingStack = createNativeStackNavigator();

enableScreens();



function App(): React.JSX.Element {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  function OnboardingNavigator() {
    return (
      <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
        <OnboardingStack.Screen name="Welcome" component={OnboardingScreen} />
        <OnboardingStack.Screen name="SelectWallet" component={SelectWallet} />
        <OnboardingStack.Screen name="ImportWallet" component={ImportWallet} />
        <OnboardingStack.Screen 
          name="CreateWallet" 
          children={() => (
            <CreateWallet 
              onComplete={() => setHasCompletedOnboarding(true)} 
            />
          )}
        />
      </OnboardingStack.Navigator>
    );
  }

  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: '#6b7280',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#e5e7eb',
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            tabBarLabel: 'Wallet',
          }}
        />
        <Tab.Screen
          name="Swap"
          component={SwapScreen}
          options={{
            tabBarLabel: 'Swap',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!hasCompletedOnboarding ? <OnboardingNavigator /> : <TabNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
