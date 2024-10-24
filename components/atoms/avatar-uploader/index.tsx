import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
//
import Avatar from "../avatar";
import { CameraIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";

interface IProps {}

const AvatarUploader: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ AvatarUploader");
  // renders
  return (
    <View style={s.container}>
      <Avatar size={100} />
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

const s = StyleSheet.create({
  _: {},
  container: {
    // backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 32,
  },
  form: {
    rowGap: 16,
  },
  button: {
    backgroundColor: COLOR.primary,
    color: COLOR.white,
    borderColor: COLOR.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: 235,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
  },
  button_text: {
    color: COLOR.white,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
  notice: {
    color: COLOR.tab_text,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
