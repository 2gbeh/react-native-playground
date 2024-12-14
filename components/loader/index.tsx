import React, { PropsWithChildren } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
//

interface IProps extends PropsWithChildren {
  loading?: boolean;
}

const Loader: React.FC<IProps> = ({ children, loading }) => {
  console.log("🚀 ~ Loader");
  // RENDER
  return loading ? (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: "rgba(0,0,0,0.4)",
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <ActivityIndicator color="white" size="small" />
    </View>
  ) : (
    children
  );
};

export default React.memo(Loader);
