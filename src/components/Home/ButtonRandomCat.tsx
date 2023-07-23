import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { Props } from './CatInfo';
import tw from 'twrnc';

export default function ButtonRandomCat() {
  const { navigate } = useNavigation<Props['navigation']>();

  return (
    <View style={tw`bg-blue-500`}>
      <TouchableOpacity
        style={tw`border border-white rounded p-2 `}
        onPress={() => navigate('RandomCat')}
      >
        <FontAwesomeIcon icon={faCat} color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
}
