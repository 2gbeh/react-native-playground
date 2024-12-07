import React from "react";
import { Text, View } from "react-native";
//
import { COLOR } from "./utils/constants";
import { colorPaletteStyles } from "./utils/styles";

interface ColorPaletteProps {}

export const ColorPalette: React.FC<ColorPaletteProps> = React.memo(({}) => {
  console.log("🚀 ~ ColorPalette");
  // renders
  return (
    <View style={colorPaletteStyles.container}>
      {Object.entries(COLOR).map(([key, value]) => (
        <View
          style={[
            colorPaletteStyles.box,
            {
              backgroundColor: value,
            },
          ]}
        >
          <Text>
            {key} ({value})
          </Text>
        </View>
      ))}
    </View>
  );
});
