import React from "react";
import { StyleSheet, View, Text } from "react-native";
//
import { FONT, COLOR} from "@/constants/THEME";
import { BulletIcon } from "@/constants/ICON";

interface IProps {
  name: string;
  age: string;
  sex: string;
}

const NameBio: React.FC<IProps> = ({ name, age, sex }) => {
  console.log("🚀 ~ NameBio");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.title}>{name}</Text>
      <BulletIcon color={COLOR.text_muted} />
      <Text style={s.subtitle}>
        {age}/{sex}
      </Text>
    </View>
  );
};

export default React.memo(NameBio);

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },
  title: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
  subtitle: {
    color: COLOR.text_faded,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
