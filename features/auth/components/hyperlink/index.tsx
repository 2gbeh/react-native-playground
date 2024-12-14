import React from "react";
import { StyleSheet, View } from "react-native";
import { Href, Link } from "expo-router";

interface IProps {
  label: string;
  path: Href;
}

const Hyperlink: React.FC<IProps> = ({ path, label }) => {
  console.log("🚀 ~ Hyperlink");
  // RENDER
  return (
    <View style={s.container}>
      <Link style={s.link} href={path}>
        {label}
      </Link>
    </View>
  );
};

export default React.memo(Hyperlink);

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  link: {
    color: "blue",
    alignSelf: "flex-start",
  },
});
