import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Layout, Popover, Text } from "@ui-kitten/components";
import tw from "twrnc";

type PopoverComponentProps = {
  title: string;
  content: string;
  url: string;
};

export const PopoverComponent = ({
  title,
  content,
  url,
}: PopoverComponentProps): React.ReactElement => {
  const [visible, setVisible] = React.useState(false);

  const renderToggleButton = (): React.ReactElement => (
    <Button onPress={() => setVisible(true)}>{title}</Button>
  );

  return (
    <Popover
      backdropStyle={styles.backdrop}
      visible={visible}
      anchor={renderToggleButton}
      onBackdropPress={() => setVisible(false)}
    >
      <Layout style={tw`p-4 flex gap-4`}>
        <Text>{title}</Text>
        <Text>{content}</Text>
        <a href={url}>
          <Text>{url}</Text>
        </a>
      </Layout>
    </Popover>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
