import { Image, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

type CatInfoProps = {
  cat: models.ICat;
};

export default function CatInfo({ cat }: CatInfoProps) {
  return (
    <View style={tw`mx-4 flex flex-col items-center w-full`}>
      <Text>Teste</Text>
      {/* {cat?.breeds?.map((breed) => (
        <View key={breed.id}>
          <Text>{breed.name ? breed.name : breed.alt_names}</Text>
          <View style={tw`max-w-[400px] max-h-[400px]`}>
            <Image
              style={tw`w-[400px] h-full`}
              source={{
                uri: cat.url,
              }}
            />
          </View>
        </View>
      ))} */}
    </View>
  );
}
