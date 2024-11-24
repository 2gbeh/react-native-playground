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
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? <HomeIcon /> : <HomeOutlineIcon />,
        }}
      />
      <Tabs.Screen
        name="bills/index"
        options={{
          title: "Bills",
          tabBarIcon: ({ color, focused }) =>
            focused ? <HandshakeIcon /> : <HandshakeOutlineIcon />,
        }}
      />
    </Tabs>
  );
}
