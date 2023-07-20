import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details({ route, navigation }: Props) {
  const { cat } = route.params;

  return (
    <View>
      <Text>
        {cat.breeds?.map((breed) => (
          <View>
            <p>{breed.name}</p>
            <p>{breed.alt_names}</p>
            <p>{breed.affection_level}</p>
            <p>{breed.adaptability}</p>
          </View>
        ))}
      </Text>
    </View>
  );
}
