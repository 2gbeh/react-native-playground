import React from "react";
import {
  DimensionValue,
  Image,
  ImageResizeMode,
  ImageSourcePropType,
} from "react-native";

interface IProps {
  src: ImageSourcePropType;
  size: DimensionValue | [DimensionValue, DimensionValue];
  borderRadius?: number;
  resizeMode?: ImageResizeMode;
}

const Figure: React.FC<IProps> = ({
  src,
  size,
  borderRadius = 0,
  resizeMode = "contain",
}) => {
  const [width, height] = Array.isArray(size) ? size : [size, size];
  console.log("🚀 ~ Figure");
  // RENDER
  return (
    <Image
      source={src}
      fadeDuration={100}
      resizeMode={resizeMode}
      style={{ width, height, borderRadius }}
    />
  );
};

export default React.memo(Figure);
