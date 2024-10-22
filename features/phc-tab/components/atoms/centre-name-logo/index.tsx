import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
//
import Avatar from "../avatar";
import { FONT } from "@/constants/THEME";
import { COLOR } from "@/features/phc-tab/constants/THEME";
import { StringHelper } from "@/utils/helpers/common/string.helper";

const watermark = require("@/features/phc-tab/assets/images/watermark.png");

interface IProps {
  src?: string;
  name?: string;
}

const CentreNameLogo: React.FC<IProps> = ({ src, name }) => {
  const shortName = StringHelper.truncate(name, 20);
  console.log("🚀 ~ CentreNameLogo");
  // renders
  return (
    <View style={s.container}>
      <View style={s.figure}>
        <Avatar src={src} size={32} radius={8} />
        <Text style={s.figcaption}>{shortName}</Text>
      </View>
      <Image source={watermark} alt="" style={s.watermark} />
    </View>
  );
};

export default React.memo(CentreNameLogo);

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  figure: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  figcaption: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyBold,
    fontSize: 18,
    fontWeight: "700",
  },
  watermark: {
    width: 78,
  },
});
