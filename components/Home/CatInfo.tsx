import { StyleSheet, Text, View } from "react-native";
import React from "react";

type CatInfoProps = {
  cat: models.ICat;
};

export default function CatInfo({ cat }: CatInfoProps) {
  return (
    <View>
      <Text>{cat.url}</Text>
    </View>
  );
}
