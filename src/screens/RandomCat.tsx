import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { fetcher } from '../api/api';
import tw from 'twrnc';
import Loading from '../components/General/Loading';
import useSWR, { mutate } from 'swr';

export default function RandomCat() {
  const {
    data: randomCat,
    error,
    isLoading,
  } = useSWR(`/images/search`, fetcher);

  if (error) {
    console.log(error);
  }

  const refetchData = () => {
    mutate(`/images/search`);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={tw`p-8 bg-white rounded-xl shadow-lg`}>
          <Image
            style={tw`w-64 h-64 p-4 rounded-xl border-4 border-blue-500`}
            source={{ uri: randomCat[0].url }}
            resizeMode="contain"
          />

          <TouchableOpacity
            style={tw`mt-4 px-6 py-3 bg-blue-500 rounded-md`}
            onPress={refetchData}
          >
            <Text style={tw`text-center text-white font-bold text-base`}>
              Obter outra imagem
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
