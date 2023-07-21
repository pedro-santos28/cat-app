import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { PopoverComponent } from "../components/AdditionalDetails/Popover";

export type Props = NativeStackScreenProps<
  RootStackParamList,
  "AdditionalDetails"
>;

export default function AdditionalDetails({ route, navigation }: Props) {
  const { breeds } = route.params;

  return (
    <SafeAreaView>
      <Text>
        Essa página é destinada a mostrar informações adicionais sobre os
        gatinhos 😻
      </Text>
      {breeds?.map((breed) => (
        <View key={breed.id}>
          <PopoverComponent
            title={"VetStreet"}
            content={
              "Vetstreet.com delivers advice from veterinarians, trainers and pet experts who are dedicated to giving you the most trusted, authoritative information for keeping pets healthy and happy. Our Find A Vet service connects you with leading veterinarians in your area. Launched in 2011, Vetstreet.com features veterinarian-reviewed medical advice and has quickly become one of the top animal health and lifestyle sites on the web."
            }
            url={breed.vetstreet_url}
          />
        </View>
      ))}
    </SafeAreaView>
  );
}
