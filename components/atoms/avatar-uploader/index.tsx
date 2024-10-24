import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
//
import Avatar from "../avatar";
import { CameraIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";
// 
import { avatarUploaderStyles as s } from "./styles";

interface IProps {
  defaultValue?: null | string;
}

const AvatarUploader: React.FC<IProps> = ({ defaultValue }) => {
  console.log("🚀 ~ AvatarUploader");
  // renders
  return (
    <View style={s.container}>
      <Avatar src={defaultValue} size={100} />
      <View style={s.form}>
        <Pressable style={s.button}>
          <Text style={s.button_text}>Upload patient photo</Text>
          <CameraIcon color={COLOR.white} />
        </Pressable>
        <Text style={s.notice}>
          Patient pictures should be updated by Reception personnel
        </Text>
      </View>
    </View>
  );
};

export default React.memo(AvatarUploader);