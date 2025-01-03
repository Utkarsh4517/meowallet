import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary';
};

export const Button = ({onPress, title, variant = 'primary'}: ButtonProps) => {
  const bgColor = variant === 'primary' ? 'bg-[#3E3E3E]' : 'bg-[#FFF0A5]';
  const textColor = variant === 'primary' ? 'text-white' : 'text-[#3E3E3E]';

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${bgColor} px-8 py-4 rounded-full w-full items-center`}>
      <Text className={`${textColor} font-semibold text-lg`}>{title}</Text>
    </TouchableOpacity>
  );
};