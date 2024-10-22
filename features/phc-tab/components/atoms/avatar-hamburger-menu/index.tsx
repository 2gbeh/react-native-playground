import React from "react";
import { StyleSheet, Pressable } from "react-native";
//
import Avatar from "../avatar";

interface IProps {
  src?: string;
}

const AvatarHamburgerMenu: React.FC<IProps> = ({ src }) => {
  console.log("🚀 ~ AvatarHamburgerMenu");
  // renders
  return (
    <Pressable style={s._}>
      <Avatar src={src} size={26} radius={26} />
    </Pressable>
  );
};

export default React.memo(AvatarHamburgerMenu);

const s = StyleSheet.create({
  _: {},
  container: {},
});
