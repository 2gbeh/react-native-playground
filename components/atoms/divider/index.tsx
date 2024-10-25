import React from "react";
import { View } from "react-native";
//
import { COLOR } from "@/constants/THEME";

interface IProps {
  y?: number | [number, number];
}

const Divider: React.FC<IProps> = ({ y = 0 }) => {
  const [marginTop, marginBottom] = typeof y === "number" ? [y, y] : y;
  console.log("🚀 ~ Divider");
  // renders
  return (
    <View
      style={{
        borderBottomColor: COLOR.surface,
        borderBottomWidth: 1,
        marginTop,
        marginBottom,
      }}
    ></View>
  );
};

export default React.memo(Divider);
