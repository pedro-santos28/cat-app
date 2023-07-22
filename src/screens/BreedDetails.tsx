import React from 'react';
import { View, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { RootStackParamList } from './StackNavigator';
import SingleBreedDetail from '../components/BreedDetails/SingleBreedDetail';

export type Props = NativeStackScreenProps<RootStackParamList, 'BreedDetails'>;

export default function BreedDetails({ route }: Props) {
  const { cat } = route.params;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={tw`p-2`}>
        {cat.breeds?.map((breed) => (
          <View key={breed.id} style={tw`p-2`}>
            <SingleBreedDetail label={'Nome'} value={breed.name} />
            <SingleBreedDetail
              label={'Nome(s) alternativo(s)'}
              value={breed.alt_names}
            />
            <SingleBreedDetail
              label={'Nível de afeição'}
              value={breed.affection_level}
            />
            <SingleBreedDetail
              label={'Nível de adaptabilidade'}
              value={breed.adaptability}
            />
            <SingleBreedDetail
              label={'Nível de domesticação'}
              value={breed.bidability}
            />
            <SingleBreedDetail
              label={'Amistoso com outros gatos'}
              value={breed.cat_friendly}
            />
            <SingleBreedDetail
              label={'Amistoso com crianças'}
              value={breed.child_friendly}
            />
            <SingleBreedDetail
              label={'Amistoso com cães'}
              value={breed.dog_friendly}
            />
            <SingleBreedDetail label={'Energia'} value={breed.energy_level} />
            <SingleBreedDetail
              label={'Nível de problemas de saúde'}
              value={breed.health_issues}
            />
            <SingleBreedDetail
              label={'Inteligência'}
              value={breed.intelligence}
            />
            <SingleBreedDetail
              label={'Tempo de vida'}
              value={breed.life_span}
            />
            <SingleBreedDetail
              label={'Nível de necessidade social'}
              value={breed.social_needs}
            />
            <SingleBreedDetail
              label={'Amistoso com estranhos'}
              value={breed.stranger_friendly}
            />
            <SingleBreedDetail label={'Raridade'} value={breed.rare} />
            <SingleBreedDetail
              label={'Temperamento'}
              value={breed.temperament}
            />
            <SingleBreedDetail
              label={'Peso imperial'}
              value={breed.weight.imperial}
            />
            <SingleBreedDetail
              label={'Peso métrico'}
              value={breed.weight.metric}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
