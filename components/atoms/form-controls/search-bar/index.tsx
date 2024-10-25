import React from "react";
import { StyleSheet, View, Text, DimensionValue } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";
import { SearchIcon } from "@/constants/ICON";

interface IProps {
  placeholder?: string;
  width?: DimensionValue;
}

const SearchBar: React.FC<IProps> = ({
  placeholder = "Search",
  width = 240,
}) => {
  console.log("🚀 ~ SearchBar");
  // renders
  return (
    <View style={[s.container, { width }]}>
      <SearchIcon color={COLOR.neutral_100} />
      <Text style={s.placeholder}>{placeholder}</Text>
    </View>
  );
};

export default React.memo(SearchBar);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.neutral_100,
    borderWidth: 1,
    borderRadius: 10,
    // paddingVertical: 10,
    paddingHorizontal: 20,
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
