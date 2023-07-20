import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

type CatInfoProps = {
  cat: models.ICat;
};

export default function CatInfo({ cat }: CatInfoProps) {
  const { navigate } = useNavigation();

  return (
    <View style={tw`mx-4 flex flex-col items-center w-full`}>
      {cat.breeds ? (
        cat.breeds.map((breed) => (
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
            <TouchableOpacity
              style={tw`p-4 bg-green-500`}
              onPress={() => navigate('Details')}
            >
              <Text>Detalhes</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text>Sem breed</Text>
      )}
    </View>
  );
}
