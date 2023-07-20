import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: {
    cat: models.ICat;
  };
};

export type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home',
  'Details'
>;
