import React, { PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";

interface IProps extends PropsWithChildren {
  sx?: ViewStyle;
  column?: boolean;
  start?: boolean;
}

const FlexBox: React.FC<IProps> = ({ children, sx, column, start }) => {
  console.log("🚀 ~ FlexBox");
  // RENDER
  return (
    <View
      style={{
        flexDirection: column ? "column" : "row",
        alignItems: start ? "flex-start" : "center",
        justifyContent: "space-between",
        ...sx,
      }}
    >
      {children}
    </View>
  );
};

export default React.memo(FlexBox);
