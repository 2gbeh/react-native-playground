import React, { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";

interface IProps extends PropsWithChildren {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
}

const AIText: React.FC<IProps> = ({ children, h1, h2, h3 }) => {
  console.log("🚀 ~ AIText");
  // renders
  return <Text style={s({ h1, h2, h3 }).transform}>{children}</Text>;
};

export default React.memo(AIText);

const s = (props: IProps) =>
  StyleSheet.create({
    transform: props.h1
      ? {
          color: COLOR.primary_dark,
          fontFamily: FONT.GilroyBold,
          fontSize: 18,
          fontWeight: "700",
        }
      : props.h2
      ? {
          color: COLOR.primary_dark,
          fontFamily: FONT.GilroyBold,
          fontSize: 16,
          fontWeight: "700",
        }
      : props.h3
      ? {
          color: COLOR.primary_dark,
          fontFamily: FONT.GilroyMedium,
          fontSize: 16,
          fontWeight: "600",
        }
      : {
          color: COLOR.text_muted,
          fontFamily: FONT.GilroyMedium,
          fontSize: 14,
          fontWeight: "600",
        },
  });
