import React from "react";
import { ActivityIndicator } from "react-native";
import { COLOR } from "@/constants/THEME";

interface IProps {
  primary?: boolean;
  large?: boolean;
}

const Spinner: React.FC<IProps> = ({ primary, large }) => {
  return (
    <ActivityIndicator
      color={primary ? COLOR.primary : COLOR.white}
      size={large ? "large" : "small"}
    />
  );
};

export default React.memo(Spinner);
