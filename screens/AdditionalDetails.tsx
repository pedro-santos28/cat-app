import { View, Text } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PopoverComponent } from '../components/AdditionalDetails/Popover';
import tw from 'twrnc';

export type Props = NativeStackScreenProps<
  RootStackParamList,
  'AdditionalDetails'
>;

export default function AdditionalDetails({ route, navigation }: Props) {
  const { breeds } = route.params;

  return (
    <SafeAreaView style={tw`flex gap-4 m-8`}>
      <Text style={tw`text-xl mb-6`}>
        Essa página é destinada a mostrar informações adicionais sobre os
        gatinhos 😻
      </Text>
      {breeds?.map((breed) => (
        <View key={breed.id} style={tw`flex gap-4 m-8`}>
          <PopoverComponent
            title={'Vet Street'}
            content={
              'Vetstreet.com delivers advice from veterinarians, trainers and pet experts who are dedicated to giving you the most trusted, authoritative information for keeping pets healthy and happy. Our Find A Vet service connects you with leading veterinarians in your area. Launched in 2011, Vetstreet.com features veterinarian-reviewed medical advice and has quickly become one of the top animal health and lifestyle sites on the web.'
            }
            url={breed.vetstreet_url}
          />

          <PopoverComponent
            title={'VCA Hospital'}
            content={
              'Founded in 1986, VCA is a family of hometown animal hospitals committed to making a positive impact for pets, people, and our communities. We care about the communities we serve and every pet within them, not just those we see in our hospitals. Every hospital carries a sense of pride for the legacy of excellence they’ve built and the stories of service that are deeply connected to their local communities. VCA joined the Mars family in 2017. Together, we are writing a powerful story about what’s next in veterinary care.'
            }
            url={breed.vcahospitals_url}
          />

          <PopoverComponent
            title={'Wikipedia'}
            content={
              'Wikipedia is an online encyclopedia written and maintained by a community of volunteers, known as Wikipedians, through open collaboration and using a wiki-based editing system called MediaWiki. Wikipedia is the largest and most-read reference work in history, and has consistently been one of the 10 most popular websites.'
            }
            url={breed.wikipedia_url}
          />
        </View>
      ))}
    </SafeAreaView>
  );
}
