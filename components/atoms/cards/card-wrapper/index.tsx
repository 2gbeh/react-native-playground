import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { COLOR } from "@/constants/THEME";

interface IProps extends PropsWithChildren {
  pad?: number | [number, number];
  rad?: number;
  fill?: string;
}

const CardWrapper: React.FC<IProps> = ({
  children,
  pad = [16, 20],
  rad = 10,
  fill = COLOR.white,
}) => {
  const [paddingVertical, paddingHorizontal] =
    typeof pad === "number" ? [pad, pad] : pad;
  console.log("🚀 ~ CardWrapper");
  // renders
  return (
    <View
      style={{
        backgroundColor: fill,
        borderRadius: rad,
        paddingVertical,
        paddingHorizontal,
      }}
    >
      {children}
    </View>
  );
};

export default React.memo(CardWrapper);
