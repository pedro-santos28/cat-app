import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetcher } from '../api/api';
import tw from 'twrnc';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LIMIT } from '@env';
import Loading from '../components/General/Loading';
import { RootStackParamList } from './StackNavigator';
import CatInfo from '../components/Home/CatInfo';
import useSWR from 'swr';

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation: { navigate } }: Props) {
  const [catsData, setCatsData] = useState<models.ICat[] | undefined>(
    undefined,
  );
  const { data, error } = useSWR<models.ICat[]>(
    `/images/search?limit=${LIMIT}`,
    fetcher,
  );

  useEffect(() => {
    const normalizeData = () => {
      const filteredData = data?.filter((item) => item?.breeds?.length! > 0);
      setCatsData(filteredData);
    };

    if (data) {
      normalizeData();
    }
    if (error) {
      console.log(error);
    }
  }, [data]);

  return (
    <SafeAreaView style={tw`flex justify-start`}>
      <FlatList
        data={catsData}
        renderItem={({ item }) => <CatInfo cat={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Loading />}
      />
    </SafeAreaView>
  );
}
