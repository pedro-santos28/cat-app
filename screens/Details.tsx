import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

export type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({ route, navigation }: Props) {
  const { cat } = route.params;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={tw`p-4`}>
        {cat.breeds?.map((breed, index) => (
          <View key={breed.id} style={tw`mb-6 pb-4`}>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-2xl font-bold mb-2 text-blue-600`}>
                Nome: {breed.name}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Nome(s) alternativo(s): {breed.alt_names}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Nível de afeição: {breed.affection_level}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Nível de adaptabilidade: {breed.adaptability}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Nível de domesticação: {breed.bidability}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Amistoso com outros gatos: {breed.cat_friendly}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Amistoso com crianças: {breed.child_friendly}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Amistoso com cães: {breed.dog_friendly}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Energia: {breed.energy_level}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Nível de problemas de saúde: {breed.health_issues}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Inteligência: {breed.intelligence}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Tempo de vida: {breed.life_span}
              </Text>
            </View>
            <Text style={tw`text-lg mb-2`}>
              Nível de necessidade social: {breed.social_needs}
            </Text>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Amistoso com estranhos: {breed.stranger_friendly}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>Raridade: {breed.rare}</Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Temperamento: {breed.temperament}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Peso imperial: {breed.weight.imperial}
              </Text>
            </View>
            <View style={tw`border-b border-gray-300 pb-2`}>
              <Text style={tw`text-lg mb-2`}>
                Peso métrico: {breed.weight.metric}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
