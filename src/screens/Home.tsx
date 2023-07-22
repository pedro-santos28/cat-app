import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetcher } from '../api/api';
import tw from 'twrnc';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LIMIT } from '@env';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons/';
import Loading from '../components/General/Loading';
import { RootStackParamList } from './StackNavigator';
import CatInfo from '../components/Home/CatInfo';
import useSWR from 'swr';

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  const { data: catsData, error } = useSWR(
    `/images/search?limit=${LIMIT}`,
    fetcher,
  );

  if (error) {
    console.log(error);
  }

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
      <FlatList
        data={catsData}
        renderItem={({ item }) => (
          <>
            {/* <Text>alo</Text> */}
            {item.breeds && item?.breeds?.length > 0 && (
              <View
                style={tw`bg-white rounded-lg shadow-md p-4 mb-4 w-full border-2 m-2`}
              >
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
          </>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Loading />}
      />
    </SafeAreaView>
  );
}
