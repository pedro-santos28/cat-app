import { Image, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';

type CatInfoProps = {
  cat: models.ICat;
};

export default function CatInfo({ cat }: CatInfoProps) {
  return (
    <View style={tw`flex flex-col justify-center w-full`}>
      {cat?.breeds?.map((breed) => (
        <View
          key={breed.id}
          style={tw`flex-1 gap-2 p-4 justify-center items-center`}
        >
          <Text style={tw`w-full p-2 border-2 text-center`}>
            {breed.name ? breed.name : breed.alt_names}
          </Text>
          <View style={tw`w-full flex-1 gap-2 justify-center items-center`}>
            <Image
              style={tw`w-[200px] h-[200px] p-4 rounded-lg`}
              source={{
                uri: cat.url,
              }}
            />
            <Text>{breed.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
