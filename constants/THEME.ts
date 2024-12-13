export type FontType = "black" | "bold" | "medium" | "regular" | "light" | "thin";

export enum FONT {
  GilroyBlack = "GilroyBlack",
  GilroyBold = "GilroyBold",
  GilroyMedium = "GilroyMedium",
  GilroyRegular = "GilroyRegular",
  GilroyLight = "GilroyLight",
  GilroyThin = "GilroyThin",
}

export const FONTS = {
  GilroyBlack: require("@/assets/fonts/Gilroy-Black.ttf"),
  GilroyBold: require("@/assets/fonts/Gilroy-Bold.ttf"),
  GilroyMedium: require("@/assets/fonts/Gilroy-Medium.ttf"),
  GilroyRegular: require("@/assets/fonts/Gilroy-Regular.ttf"),
  GilroyLight: require("@/assets/fonts/Gilroy-Light.ttf"),
  GilroyThin: require("@/assets/fonts/Gilroy-Thin.ttf"),
};

// https://hexcolorpedia.com/color/?q=0093dd
export const COLOR = {
  none: "transparent",
  white: "#fff",
  black: "#000",
  //
  brand: "#0093dd",
  complement: "#dd4a00",
  grayscale: "#6f6f6f",
  //
  light: {},
  dark: {},
};

// https://rgbacolorpicker.com/rgba-to-hex
export const OPACITY = {
  point5: "#0000000d",
  point10: "#0000001a",
  point15: "#00000026",
  point20: "#00000033",
  point25: "#00000040",
  point30: "#0000004d",
  point35: "#00000059",
  point40: "#00000066",
  point45: "#00000073",
  point50: "#00000080",
  point55: "#0000008c",
  point60: "#00000099",
  point65: "#000000a6",
  point70: "#000000b3",
  point75: "#000000bf",
  point80: "#000000cc",
  point85: "#000000d9",
  point90: "#000000e6",
  point95: "#000000f2",
};
