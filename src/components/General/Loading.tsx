import { ActivityIndicator } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { getColorFromString } from '../../utils/getColorString';

export default function Loading() {
  const color = getColorFromString(tw`text-blue-500`.color);

  return <ActivityIndicator size={30} color={color} style={tw`mt-2`} />;
}
