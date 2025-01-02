import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  title: string;
};

export const Button = ({onPress, title}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-[#3E3E3E] px-8 py-4 rounded-full w-full items-center mb-2">
      <Text className="text-white font-semibold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};