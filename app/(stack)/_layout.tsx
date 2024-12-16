import { Stack } from "expo-router";
import Loader from "@/components/loader";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function StackLayout() {
  const { verifying } = useAuthGuard();
  console.log("🚀 ~ StackLayout");
  // RENDER
  return (
    <Loader loading={verifying}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            // backgroundColor: "red",
            paddingHorizontal: 24,
            justifyContent: "center",
          },
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(main)" />
      </Stack>
    </Loader>
  );
}
