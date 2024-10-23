import React from "react";
import { View, Text, Pressable } from "react-native";
//
import { COLOR } from "@/constants/THEME";
import { ChevronLeftIcon } from "@/constants/ICON";
import { ChevronRightIcon } from "lucide-react-native";
// 
import { paginationStyles as s } from "./styles";

const Pagination = () => {
  console.log("🚀 ~ Pagination");
  // renders
  return (
    <View style={s.container}>
      <View style={s.labels}>
        <Text style={s.label}>1 - 10</Text>
        <Text style={s.of}>of</Text>
        <Text style={s.label}>10</Text>
      </View>
      <View style={s.buttons}>
        <Pressable style={[s.button, s.prev]}>
          <ChevronLeftIcon color={COLOR.primary_dark} />
        </Pressable>
        <Pressable style={[s.button, s.next]}>
          <ChevronRightIcon color={COLOR.primary_dark} />
        </Pressable>
      </View>
    </View>
  );
};

export default React.memo(Pagination);
