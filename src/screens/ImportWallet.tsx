import React, {useState} from 'react';
import {View, Text, TextInput, Alert, Image} from 'react-native';
import {Button} from '../components/Button';
import {Keypair} from '@solana/web3.js';
// import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import {useNavigation} from '@react-navigation/native';

export const ImportWallet = () => {
  const [privateKey, setPrivateKey] = useState('');
  const navigation = useNavigation();

  const importWallet = async () => {
    try {
      const secretKey = new Uint8Array(
        privateKey.split(',').map(num => parseInt(num)),
      );
      const keypair = Keypair.fromSecretKey(secretKey);

      // Store private key securely
      //   await RNSecureStorage.setItem(
      //     'walletPrivateKey',
      //     JSON.stringify(Array.from(keypair.secretKey)),
      //     {accessible: ACCESSIBLE.WHEN_UNLOCKED}
      //   );

      navigation.navigate('Home' as never);
    } catch (error) {
      Alert.alert('Error', 'Invalid private key format');
    }
  };

  return (
    <View className="flex-1 bg-[#E9FFE4] p-4">
      <View className="flex-1 items-center">
        <Text className="text-2xl font-bold text-[#3E3E3E] mb-2 mt-20">
          Import Your Wallet
        </Text>
        <Text className="text-base text-[#3E3E3E] mb-6">
          Enter your wallet's private key to import it
        </Text>
        <View className="flex-1"></View>
        <Image
          source={require('../assets/images/cat3.png')}
          className="w-72 h-72 mt-28 ml-6"
          resizeMode="contain"></Image>

        <TextInput
          className="bg-[#3E3E3E] p-4 rounded-xl mb-6 text-white w-full h-20 text-center text-base font-bold"
          placeholder="Enter your private key"
          placeholderTextColor="white"
          value={privateKey}
          onChangeText={setPrivateKey}
          multiline
          numberOfLines={4}
          textAlignVertical="center"
          style={{
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
        />

        <Button onPress={importWallet} title="Import Wallet" />
        <View className="h-4"></View>
      </View>
    </View>
  );
};
