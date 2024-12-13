import React from "react";
import { View, ActivityIndicator } from "react-native";
import { COLOR } from "@/constants/THEME";

interface IProps {
  primary?: boolean;
  large?: boolean;
  absolute?: boolean;
}

const Spinner: React.FC<IProps> = ({ primary, large, absolute }) => {
  console.log("🚀 ~ Spinner");
  // RENDER
  return absolute ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color={COLOR.brand} size="large" />
    </View>
  ) : (
    <ActivityIndicator
      color={primary ? COLOR.brand : COLOR.white}
      size={large ? "large" : "small"}
    />
  );
};

export default React.memo(Spinner);
