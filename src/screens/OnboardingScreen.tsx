import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Button} from '../components/Button';

type OnboardingScreenProps = {
  onComplete: () => void;
};

export const OnboardingScreen = ({onComplete}: OnboardingScreenProps) => {
  return (
    <View className="flex-1 bg-[#E9FFE4] justify-between items-center p-4">
      <View className="flex-1 justify-center items-center">
        <View className="bg-[#FFF0A5] w-48 h-48 rounded-full justify-center items-center">
          <Image
            source={require('../assets/images/cat1.png')}
            className="mt-52"
            resizeMode="contain"
          />
        </View>

        <Text className="text-5xl font-bold text-[#3E3E3E] mt-48">Meoowwallet</Text>
        <Text className="text-lg text-[#3E3E3E] text-center">
          the purrfect solana wallet
        </Text>
      </View>

      <Button onPress={onComplete} title="Get Started" />
    </View>
  );
};
