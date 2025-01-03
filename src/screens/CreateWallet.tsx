import React, { useRef } from 'react';
import { View, Text, Alert, Image, StyleSheet, Animated } from 'react-native';
import { Button } from '../components/Button';
import * as web3 from '@solana/web3.js';
// import { Keypair } from '@solana/web3.js';
import { useNavigation } from '@react-navigation/native';
// import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

// Add this type for the onComplete prop
type CreateWalletProps = {
  onComplete?: () => void;
};

export const CreateWallet = ({ onComplete }: CreateWalletProps) => {
  const navigation = useNavigation();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const positionAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const animateAndNavigate = async () => {
    try {
      const newWallet = web3.Keypair.generate();
      
      // Bounce and scale animation
      Animated.sequence([
        // First bounce up
        Animated.parallel([
          Animated.timing(positionAnim, {
            toValue: -50,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 0.8,
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
        // Bounce down and scale up
        Animated.parallel([
          Animated.timing(positionAnim, {
            toValue: 400,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1.2,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        // Call onComplete to mark onboarding as complete
        onComplete?.();
      });

    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to create wallet');
    }
  };

  return (
    <View className="flex-1 bg-[#E9FFE4] p-4">
      <View className="absolute top-0 right-0">
        <View className="w-24 h-24 bg-[#FFF0A5] rounded-bl-full opacity-50" />
      </View>
      
      <View className="flex-1 justify-center items-center">
        <Animated.View 
          style={{
            transform: [
              { scale: scaleAnim },
              { translateY: positionAnim }
            ],
            opacity: opacityAnim,
          }}
          className="items-center"
        >
          <View className="bg-[#FFF0A5] w-48 h-48 rounded-full mb-8 justify-center items-center shadow-lg">
            <Image
              source={require('../assets/images/cat4.png')}
              className="w-56 h-56 mt-16"
              resizeMode="contain"
            />
          </View>
          
          <Text className="text-3xl font-bold text-[#3E3E3E] mb-2 text-center">
            Purr-fect New Wallet
          </Text>
          <Text className="text-base text-[#3E3E3E] text-center mb-8 px-6">
            Let's create your very own Solana wallet! 
            Your digital treats will be safe with us 🐱
          </Text>
        </Animated.View>

        <View className="w-full max-w-xs">
          <Button 
            onPress={animateAndNavigate} 
            title="Generate My Wallet" 
            variant="primary"
          />
        </View>
      </View>
      
      <View className="absolute bottom-0 left-0">
        <View className="w-32 h-32 bg-[#FFF0A5] rounded-tr-full opacity-50" />
      </View>
    </View>
  );
}; 