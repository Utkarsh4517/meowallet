import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

type OnboardingScreenProps = {
  onComplete: () => void;
};

export const OnboardingScreen = ({onComplete}: OnboardingScreenProps) => {
  return (
    <View className="flex-1 bg-white justify-center items-center p-4">
      <Text className="text-3xl font-bold text-gray-800 mb-8">
        Welcome to MeoWallet 😺
      </Text>
      <Text className="text-lg text-gray-600 text-center mb-12">
        Your purr-fect companion for managing crypto assets
      </Text>
      <TouchableOpacity
        onPress={onComplete}
        className="bg-blue-500 px-8 py-4 rounded-full">
        <Text className="text-white font-semibold text-lg">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}; 