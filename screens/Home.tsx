import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../config/api';
import CatInfo from '../components/Home/CatInfo';

export default function Home() {
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
      <Text>CAT API</Text>
      <FlatList
        data={catsData}
        renderItem={({ item }) => (
          <View key={item.id}>
            <CatInfo cat={item} />
          </View>
        )}
        showsVerticalScrollIndicator
      />
    </SafeAreaView>
  );
}
