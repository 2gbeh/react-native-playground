import React from "react";
import { Pressable, Text, View } from "react-native";
//
import AIText from "../ai-text";
//
import { aiPaginationStyles as s } from "./styles";
import { ChevronLeftIcon, ChevronRightIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/THEME";

interface IProps {}

const AIPagination: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ AIPagination");
  // renders
  return (
    <View style={s.container}>
      <Pressable style={s.button}>
        <ChevronLeftIcon color={COLOR.primary_dark} />
        <Text style={s.button_text}>Prev</Text>
      </Pressable>
      <View style={s.center}>
        <Text style={s.label}>Pages</Text>
        <View style={s.values}>
          <View style={s.input}>
            <Text style={s.value}>1</Text>
          </View>
          <Text style={s.value}>/ 99</Text>
        </View>
      </View>
      <Pressable style={s.button}>
        <Text style={s.button_text}>Next</Text>
        <ChevronRightIcon color={COLOR.primary_dark} />
      </Pressable>
    </View>
  );
};

export default React.memo(AIPagination);
