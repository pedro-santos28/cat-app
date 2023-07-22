import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { api } from '../config/api';
import { API_KEY } from '@env';
import tw from 'twrnc';

export default function RandomCat() {
  const [randomCat, setRandomCat] = useState<models.ICat | null>(null);

  const fetchCatData = async () => {
    try {
      const resp = await api.get(`/images/search?api_key=${API_KEY}`);
      setRandomCat(resp.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      {!randomCat ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={tw`w-full h-full`}>
          <Image
            style={tw`w-[350px] h-[350px] p-4 rounded-lg border-4 border-blue-500 rounded-xl`}
            source={{
              uri: randomCat.url,
            }}
            resizeMode="contain"
          />

          <TouchableOpacity
            style={tw`p-4 bg-blue-500 rounded-md m-4`}
            onPress={() => fetchCatData()}
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
