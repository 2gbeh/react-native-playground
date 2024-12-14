import React, { PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";

interface IProps extends PropsWithChildren {
  sx?: ViewStyle;
  column?: boolean;
  start?: boolean;
  end?: boolean;
}

const FlexBox: React.FC<IProps> = ({ children, sx, column, start, end }) => {
  console.log("🚀 ~ FlexBox");
  // RENDER
  return (
    <View
      style={{
        flexDirection: column ? "column" : "row",
        alignItems: start ? "flex-start" : end ? "flex-end" : "center",
        justifyContent: "space-between",
        ...sx,
      }}
    >
      {children}
    </View>
  );
};

export default React.memo(FlexBox);
