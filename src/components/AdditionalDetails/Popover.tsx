import React from 'react';
import { Linking } from 'react-native';
import { Button, Layout, Popover, Text } from '@ui-kitten/components';
import tw from 'twrnc';

type PopoverComponentProps = {
  title: string;
  content: string;
  url: string;
};

export const PopoverComponent = ({
  title,
  content,
  url,
}: PopoverComponentProps) => {
  const [visible, setVisible] = React.useState(false);

  const renderToggleButton = (): React.ReactElement => (
    <Button
      appearance="ghost"
      onPress={() => setVisible(true)}
      style={tw`px-4 py-2 border border-blue-500 rounded`}
    >
      <Text style={tw`text-blue-500 font-bold`}>{title}</Text>
    </Button>
  );

  return (
    <Popover
      backdropStyle={tw`bg-black opacity-50`}
      visible={visible}
      anchor={renderToggleButton}
      onBackdropPress={() => setVisible(false)}
    >
      <Layout style={tw`p-4 min-w-[240px]`}>
        <Text style={tw`text-xl font-bold text-blue-500 mb-4`}>{title}</Text>
        <Text style={tw`text-base mb-4`}>{content}</Text>
        {url ? (
          <Text
            style={tw`text-blue-500 underline`}
            onPress={() => Linking.openURL(url)}
          >
            {url}
          </Text>
        ) : (
          <Text>Url não encontrada 😿</Text>
        )}
      </Layout>
    </Popover>
  );
};
