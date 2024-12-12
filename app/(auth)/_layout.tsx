import { View } from "react-native";
import { Stack } from "expo-router";
//

export default function AuthLayout() {
  console.log("🚀 ~ AuthLayout");
  // renders
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          // headerShadowVisible: false,
          // headerStyle: { backgroundColor: COLOR.primary },
          contentStyle: {
            // backgroundColor: "red",
            paddingHorizontal: 24,
            justifyContent: "center",
          },
        }}
      />
    </View>
  );
}
