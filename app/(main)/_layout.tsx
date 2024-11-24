import { Tabs } from "expo-router";

export default function MainLayout() {
  console.log("🚀 ~ MainLayout");
  // renders
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="bills" options={{ title: "Bills" }} />
    </Tabs>
  );
}
