import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
//
import Avatar from "../avatar";

interface IProps {
  src?: string;
}

const AvatarHamburgerMenu: React.FC<IProps> = ({ src }) => {
  console.log("🚀 ~ AvatarHamburgerMenu");
  // renders
  return (
    <Pressable onPress={() => router.push("/(auth)/login")}>
      <Avatar src={src} size={26} radius={26} />
    </Pressable>
  );
};

export default React.memo(AvatarHamburgerMenu);

const s = StyleSheet.create({
  _: {},
  container: {},
});
