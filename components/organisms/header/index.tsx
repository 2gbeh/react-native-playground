import React from "react";
import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
//
import CentreNameLogo from "@/components/atoms/centre-name-logo";
import AppClock from "@/components/atoms/app-clock";
import AvatarHamburgerMenu from "@/components/atoms/avatar-hamburger-menu";
import { BellIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/THEME";
//
import { headerStyles as s } from "./styles";

const Header = () => {
  console.log("🚀 ~ Header");
  // renders
  return (
    <View style={s.container}>
      {/* LOGO */}
      <Pressable style={s.left_content} onPress={() => router.push("/")}>
        <CentreNameLogo
          src="/assets/images/icon.png"
          name="Edo Specialist Hospital"
        />
      </Pressable>

      {/* CLOCK */}
      <View style={s.center_content}>
        <AppClock />
      </View>

      {/* AVATAR */}
      <View style={s.right_content}>
        <Text style={s.greeting}>Hi, CHO Adebayo</Text>
        <BellIcon color={COLOR.primary} />
        <Text style={s.textSize}>Aa</Text>
        <AvatarHamburgerMenu src="/assets/images/avatar.png" />
      </View>
    </View>
  );
};

export default React.memo(Header);
