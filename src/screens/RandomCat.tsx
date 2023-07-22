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
    <View style={tw`flex-1 justify-center items-center m-2`}>
      {isLoading ? (
        <Loading />
      ) : (
        <View>
          <Image
            style={tw`w-[350px] h-[350px] p-4 rounded-lg border-4 border-blue-500 rounded-xl`}
            source={{
              uri: randomCat[0].url,
            }}
            resizeMode="contain"
          />

          <TouchableOpacity
            style={tw`p-4 bg-blue-500 rounded-md m-4`}
            onPress={refetchData}
          >
            <Text style={tw`text-center text-white font-bold text-base`}>
              Gerar nova imagem
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
