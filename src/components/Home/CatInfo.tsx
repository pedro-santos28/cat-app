import { Image, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../screens/StackNavigator';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type CatInfoProps = {
  cat: models.ICat;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

export default function CatInfo({ cat }: CatInfoProps) {
  const { navigate } = useNavigation<Props['navigation']>();

  const navigateToBreedDetails = () => {
    navigate('BreedDetails', { cat });
  };

  const navigateToAdditionalDetails = () => {
    navigate('AdditionalDetails', { breeds: cat.breeds });
  };

  return (
    <View style={tw`bg-white rounded-lg shadow-md p-2 m-2`}>
      {cat?.breeds?.map((breed) => (
        <View key={breed.id} style={tw`mb-2`}>
          <Text style={tw`text-2xl font-bold text-blue-500 mb-2`}>
            {breed.name ? breed.name : breed.alt_names}
          </Text>
          <View style={tw`flex-row items-center mb-2`}>
            <Image
              style={tw`w-24 h-24 rounded-full mr-4`}
              source={{
                uri: cat.url,
              }}
            />
            <Text style={tw`flex-1`}>{breed.description}</Text>
          </View>
        </View>
      ))}

      <View style={tw`flex-row justify-between`}>
        <TouchableOpacity
          style={tw`flex-row items-center bg-blue-500 rounded-md p-2`}
          onPress={navigateToBreedDetails}
        >
          <FontAwesomeIcon icon={faChevronRight} size={16} color="white" />
          <Text style={tw`text-white font-bold ml-2`}>Detalhes da raça</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center bg-blue-500 rounded-md p-2`}
          onPress={navigateToAdditionalDetails}
        >
          <FontAwesomeIcon icon={faChevronRight} size={16} color="white" />
          <Text style={tw`text-white font-bold ml-2`}>Detalhes adicionais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
