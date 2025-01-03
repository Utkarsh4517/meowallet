import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  return (
    <View className="flex-1 bg-[#F5F5F7] items-center">
      <View className="flex-row justify-between w-[88%] mt-20">
        <Text className="text-sm text-[#AEAEAE]">Meowallet</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View className="bg-white h-60 mt-6 w-[90%] rounded-3xl p-6  items-center">
        <Text className="text-sm text-[#AEAEAE]">Total Balance</Text>
        <Text className="text-5xl font-bold text-[#1f1f1f] mt-4">$60.78</Text>
        <View className="flex-row gap-10 mt-6">
          <View>
            <TouchableOpacity className="bg-[#393939] rounded-full p-4">
              <Ionicons name="add-outline" size={20} color="white" />
            </TouchableOpacity>
            <Text className="text-sm text-[#AEAEAE] text-center mt-1">Deposit</Text>
          </View>
          <View>
            <TouchableOpacity className="bg-[#393939] rounded-full p-4">
              <Ionicons name="scan-outline" size={20} color="white" />
            </TouchableOpacity>
            <Text className="text-sm text-[#AEAEAE] text-center mt-1">Scan</Text>
          </View>
          <View>
            <TouchableOpacity className="bg-[#393939] rounded-full p-4">
              <Ionicons name="arrow-up-outline" size={20} color="white" />
            </TouchableOpacity>
            <Text className="text-sm text-[#AEAEAE] text-center mt-1">Send</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
