import React from "react";
import { View, Text } from "react-native";
//
import CentreNameLogo from "../../atoms/centre-name-logo";
import AppClock from "../../atoms/app-clock";
import AvatarHamburgerMenu from "../../atoms/avatar-hamburger-menu";
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
      <View style={s.left_content}>
        <CentreNameLogo
          src="/assets/images/icon.png"
          name="Edo Specialist Hospital"
        />
      </View>

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
