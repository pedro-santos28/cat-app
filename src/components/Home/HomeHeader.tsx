import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function HomeHeader() {
  return (
    <View style={tw`flex-row items-center justify-between p-4`}>
      <View style={tw`flex-1`}>
        <Text style={tw`text-white text-xl`}>CAT APP - Página inicial</Text>
      </View>
    </View>
  );
}
