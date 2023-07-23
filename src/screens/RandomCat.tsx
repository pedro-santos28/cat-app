import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { fetcher } from '../api/api';
import tw from 'twrnc';
import Loading from '../components/General/Loading';
import useSWR, { mutate } from 'swr';
import axios from 'axios';

const customInstance = axios.create();
const CustomFetcher = (url: string) =>
  customInstance.get(url).then((res) => res.data);

type catRandomFact = {
  fact: string;
  length: number;
};

export default function RandomCat() {
  const {
    data: randomCat,
    error,
    isLoading,
  } = useSWR(`/images/search`, fetcher);

  const { data: catRandomFact } = useSWR<catRandomFact>(
    `https://catfact.ninja/fact?max_length=140`,
    CustomFetcher,
  );

  if (error) {
    console.log(error);
  }

  const refetchData = () => {
    mutate(`/images/search`);
    mutate('https://catfact.ninja/fact?max_length=140');
  };

  return (
    <View style={tw`flex-1 justify-start items-center bg-blue-100`}>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={tw`p-4 rounded-lg justify-center items-center`}>
          <View style={tw`mb-6`}>
            <Text style={tw`text-2xl text-center p-2 font-bold `}>
              Random Cat Fact
            </Text>

            <View style={tw`bg-blue-900 rounded`}>
              <Text
                style={tw`border-2 border-blue-900 rounded-lg p-4 m-4 text-lg font-semibold text-white`}
              >
                {catRandomFact?.fact}
              </Text>
            </View>
          </View>

          <Image
            style={tw`w-64 h-64 p-4 rounded-lg border-2 border-white`}
            source={{ uri: randomCat[0].url }}
            resizeMode="contain"
          />

          <TouchableOpacity
            style={tw`mt-4 px-6 py-3 bg-blue-900 rounded-md`}
            onPress={refetchData}
          >
            <Text style={tw`text-center text-white font-bold text-base`}>
              Try my luck 🐈‍⬛
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
