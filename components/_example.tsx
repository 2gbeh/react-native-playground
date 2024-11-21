import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {}

const Example: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Example");
  // renders
  return (
    <View style={s.container}>
      <Text>Example</Text>
    </View>
  );
};

export default React.memo(Example);

const s = StyleSheet.create({
  _: {},
  container: {},
});
