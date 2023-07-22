import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';

type SingleBreedDetailProps = {
  label: string;
  value: string | number;
};

export default function SingleBreedDetail({
  label,
  value,
}: SingleBreedDetailProps) {
  return (
    <View style={tw`border-b border-gray-300 py-2 flex-1 items-start`}>
      <View style={tw`text-lg w-full flex `}>
        <Text style={tw`text-xl`}>{label}</Text>
        <Text style={tw`text-gray-500 text-base`}>{value}</Text>
      </View>
    </View>
  );
}
