import { Stack } from "expo-router";

export default function StackAuthLayout() {
  console.log("🚀 ~ StackAuthLayout");
  // RENDER
  return <Stack screenOptions={{ headerShown: false }} />;
}
