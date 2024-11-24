import { Tabs } from "expo-router";
//
import {
  HandshakeIcon,
  HandshakeOutlineIcon,
  HomeIcon,
  HomeOutlineIcon,
} from "@/constants/ICON";

export default function MainLayout() {
  console.log("🚀 ~ MainLayout");
  // renders
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <HomeIcon color={color} />
            ) : (
              <HomeOutlineIcon color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="bills/index"
        options={{
          title: "Bills",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <HandshakeIcon color={color} />
            ) : (
              <HandshakeOutlineIcon color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
