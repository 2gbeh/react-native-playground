import React, { PropsWithChildren } from "react";
import { View } from "react-native";

interface IProps extends PropsWithChildren {
  column?: boolean;
  start?: boolean;
}

const FlexBox: React.FC<IProps> = ({ children, column, start }) => {
  console.log("🚀 ~ FlexBox");
  // RENDER
  return (
    <View
      style={{
        display: "flex",
        // flex: 1,
        flexDirection: column ? "column" : "row",
        alignItems: start ? "flex-start" : "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </View>
  );
};

export default React.memo(FlexBox);
