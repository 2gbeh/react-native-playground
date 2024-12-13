import React from "react";
import { DimensionValue, ImageSourcePropType } from "react-native";
import Figure from "../figure";
import { useDeviceManager } from "@/hooks/useDeviceManager";

const defaultAvatar = require("@/assets/images/avatar.png");

interface IProps {
  src?: string | null;
  size?: DimensionValue;
  borderRadius?: number;
}

const Avatar: React.FC<IProps> = ({ src, size = 48, borderRadius = 100 }) => {
  const { hasInternet } = useDeviceManager();
  console.log("🚀 ~ Avatar");
  // RENDER
  return (
    <Figure
      src={!hasInternet ? defaultAvatar : src ?? defaultAvatar}
      size={size}
      borderRadius={borderRadius}
      resizeMode="cover"
    />
  );
};

export default React.memo(Avatar);
