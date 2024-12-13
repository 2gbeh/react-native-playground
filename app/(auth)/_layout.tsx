import { View } from "react-native";
import { Stack } from "expo-router";
import { useAuthGuard } from "@/hooks/useAuthGuard";
//

export default function AuthLayout() {
  const { verifying, user } = useAuthGuard();
  console.log("🚀 ~ AuthLayout", verifying, user);
  // RENDER
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
