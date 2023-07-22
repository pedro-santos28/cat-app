import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../config/api';
import CatInfo from '../components/Home/CatInfo';
import tw from 'twrnc';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { API_KEY, LIMIT } from '@env';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons/';

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation, route }: Props) {
  const [catsData, setCatsData] = useState<models.ICat[] | null>(null);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const resp = await api.get(
          `/images/search?limit=${LIMIT}&api_key=${API_KEY}`,
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
      <View style={tw`flex flex-row items-center justify-evenly`}>
        <Text style={tw`text-center font-bold text-4xl text-blue-500`}>
          CAT API
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RandomCat')}>
          <FontAwesomeIcon icon={faCat} size={30} />
        </TouchableOpacity>
      </View>

      {!catsData ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={catsData}
          renderItem={({ item }) => (
            <View key={item.id}>
              {/* <Text>alo</Text> */}
              {item.breeds && item?.breeds?.length > 0 && (
                <View style={tw`bg-white rounded-lg shadow-md p-4 mb-4 w-full`}>
                  <CatInfo cat={item} />
                  <View>
                    <TouchableOpacity
                      style={tw`p-4 bg-blue-500 rounded-md m-4`}
                      onPress={() =>
                        navigation.navigate('BreedDetails', { cat: item })
                      }
                    >
                      <Text
                        style={tw`text-center text-white font-bold text-base`}
                      >
                        Detalhes da raça
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={tw`p-4 bg-blue-500 rounded-md m-4`}
                      onPress={() =>
                        navigation.navigate('AdditionalDetails', {
                          breeds: item.breeds,
                        })
                      }
                    >
                      <Text
                        style={tw`text-center text-white font-bold text-base`}
                      >
                        Detalhes adicionais
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
