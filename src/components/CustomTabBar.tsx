import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const getIconName = (routeName: string, isFocused: boolean): string => {
    switch (routeName) {
        case 'Home':
          return isFocused ? 'home' : 'home-outline';
        case 'Wallet':
          return isFocused ? 'wallet' : 'wallet-outline';
        case 'Swap':
          return isFocused ? 'swap-horizontal' : 'swap-horizontal-outline';
        case 'Settings':
          return isFocused ? 'person' : 'person-outline';
        default:
          return 'person';
      }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={[
                styles.tabItem,
                isFocused && styles.activeTabItem
              ]}>
              <Ionicons
                name={getIconName(route.name, isFocused)}
                size={24}
                color={isFocused ? '#1f1f1f' : '#fff'}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',
    borderRadius: 50,
    position: 'relative',
    width: width - 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 77,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    height: 60,
    width: 60,
  },
  activeTabItem: {
    backgroundColor: '#fff',
  },
});
