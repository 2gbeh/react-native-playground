import React from "react";
import { Image } from "expo-image";
//
import { COLOR } from "@/constants/THEME";

interface IProps {
  src?: null | string;
  size?: number;
  radius?: number;
  fallback?: string;
}

const defaultAvatar = require("@/assets/images/avatar.png");

const Avatar: React.FC<IProps> = ({
  src,
  size = 48,
  radius = 99,
  fallback,
}) => {
  console.log("🚀 ~ Avatar");
  // renders
  return (
    <Image
      source={src || (fallback ?? defaultAvatar)}
      placeholder={{ blurhash: process.env.EXPO_PUBLIC_BLURHASH! }}
      contentFit="fill"
      transition={100}
      priority="normal"
      style={{
        backgroundColor: COLOR.white,
        borderColor: COLOR.neutral_100,
        borderWidth: 1,
        borderRadius: radius,
        width: size,
        height: size,
      }}
    />
  );
};

export default React.memo(Avatar);
