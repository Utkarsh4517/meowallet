import React from 'react';
import {View, Image, Text} from 'react-native';
import {Button} from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const SelectWallet: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-[#E9FFE4] justify-between items-center p-4">
      <View className="flex-1 justify-center items-center">
        <View className="bg-[#FFF0A5] w-48 h-48 rounded-full justify-center items-center mb-8">
          <Image 
            source={require('../assets/images/cat2.png')} 
            className="w-72 h-72 mt-28 ml-6"
            resizeMode="contain"
          />
        </View>
        
        <Text className="text-2xl font-bold text-[#3E3E3E] mb-2 mt-20">
          Choose Your Path
        </Text>
        <Text className="text-base text-[#3E3E3E] text-center mb-8">
          Import your existing wallet or create a new one
        </Text>
      </View>

      <View className="w-full mb-4">
        <Button 
          onPress={() => navigation.navigate('ImportWallet' as never)}
          title="Import Existing Wallet"
          variant="secondary"
        />
        <View className="h-4" />
        <Button 
          onPress={() => navigation.navigate('CreateWallet' as never)}
          title="Create New Wallet"
        />
      </View>
    </View>
  );
};

export default SelectWallet;
