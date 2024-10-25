import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";

interface IProps extends PropsWithChildren {}

const AIParagraph: React.FC<IProps> = ({ children }) => {
  console.log("🚀 ~ AIParagraph");
  // renders
  return (
    <Text
      style={{
        color: COLOR.text_200,
        fontFamily: FONT.GilroyMedium,
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 18,
      }}
    >
      {children}
    </Text>
  );
};

export default React.memo(AIParagraph);
