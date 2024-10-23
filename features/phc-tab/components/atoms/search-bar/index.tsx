import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
//
import { FONT } from "@/constants/THEME";
import { COLOR } from "@/features/phc-tab/constants/THEME";
import { SearchIcon } from "@/features/phc-tab/constants/ICON";

interface IProps {
  placeholder?: string;
}

const SearchBar: React.FC<IProps> = ({ placeholder = "Search" }) => {
  console.log("🚀 ~ SearchBar");
  // renders
  return (
    <View style={s.container}>
      <SearchIcon color={COLOR.border} />
      <Text style={s.placeholder}>{placeholder}</Text>
    </View>
  );
};

export default React.memo(SearchBar);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 10,
    // paddingVertical: 10,
    paddingHorizontal: 20,
    width: 240,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  placeholder: {
    color: COLOR.text_muted,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
