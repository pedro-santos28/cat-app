import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { api } from "./config/api";
import { SafeAreaView } from "react-native-safe-area-context";
import CatInfo from "./components/Home/CatInfo";

export default function App() {
  const [catsData, setCatsData] = useState<models.ICat[] | null>(null);

  const apiKey =
    "live_ileSEe37uizqNmN2bDNkYwP8kbE1pOxleCfVLvg3ALaTycsxwU0bMzMeL8c9eGec";
  const limit = 20;

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const resp = await api.get(
          `/images/search?limit=${limit}&api_key=${apiKey}`
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
            {item?.breeds?.map((breed) => (
              <CatInfo cat={item} />
            ))}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
