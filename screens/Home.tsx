import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../config/api';
import CatInfo from '../components/Home/CatInfo';
import tw from 'twrnc';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation, route }: Props) {
  const [catsData, setCatsData] = useState<models.ICat[] | null>(null);

  const apiKey =
    'live_ileSEe37uizqNmN2bDNkYwP8kbE1pOxleCfVLvg3ALaTycsxwU0bMzMeL8c9eGec';
  const limit = 100;

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const resp = await api.get(
          `/images/search?limit=${limit}&api_key=${apiKey}`,
        );
        setCatsData(resp.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCatData();
  }, []);

  return (
    <SafeAreaView>
      <Text style={tw`text-center font-bold text-4xl text-blue-500`}>
        CAT API
      </Text>
      <FlatList
        data={catsData}
        renderItem={({ item }) => (
          <View key={item.id}>
            {item.breeds && item?.breeds?.length > 0 && (
              <View style={tw`bg-white rounded-lg shadow-md p-4 mb-4 w-full`}>
                <CatInfo cat={item} />
                <TouchableOpacity
                  style={tw`p-4 bg-blue-500 rounded-md m-4`}
                  onPress={() => navigation.navigate('Details', { cat: item })}
                >
                  <Text style={tw`text-center text-white font-bold text-lg`}>
                    Detalhes
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
