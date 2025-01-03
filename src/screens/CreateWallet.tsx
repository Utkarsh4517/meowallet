import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Button} from '../components/Button';
import {Keypair} from '@solana/web3.js';
import {useNavigation} from '@react-navigation/native';
// import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

export const CreateWallet = () => {
  const navigation = useNavigation();

  const createNewWallet = async () => {
    try {
      const newWallet = Keypair.generate();
      
      // Store private key securely
    //   await RNSecureStorage.setItem(
    //     'walletPrivateKey',
    //     JSON.stringify(Array.from(newWallet.secretKey)),
    //     {accessible: ACCESSIBLE.WHEN_UNLOCKED}
    //   );

      navigation.navigate('Home' as never);
    } catch (error) {
      Alert.alert('Error', 'Failed to create wallet');
    }
  };

  return (
    <View className="flex-1 bg-[#E9FFE4] p-4">
      <View className="flex-1 justify-center items-center">
        <View className="bg-[#FFF0A5] w-32 h-32 rounded-full mb-8" />
        
        <Text className="text-2xl font-bold text-[#3E3E3E] mb-2">
          Create New Wallet
        </Text>
        <Text className="text-base text-[#3E3E3E] text-center mb-8">
          Generate a new Solana wallet with a unique private key
        </Text>

        <Button onPress={createNewWallet} title="Generate Wallet" />
      </View>
    </View>
  );
}; 