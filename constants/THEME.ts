export type TFont = "black" | "bold" | "medium" | "regular" | "light" | "thin";

export enum FONT {
  GilroyBlack = "GilroyBlack",
  GilroyBold = "GilroyBold",
  GilroyMedium = "GilroyMedium",
  GilroyRegular = "GilroyRegular",
  GilroyLight = "GilroyLight",
  GilroyThin = "GilroyThin",
}

export const FONTS = {
  GilroyBlack: require("../assets/fonts/Gilroy-Black.ttf"),
  GilroyBold: require("../assets/fonts/Gilroy-Bold.ttf"),
  GilroyMedium: require("../assets/fonts/Gilroy-Medium.ttf"),
  GilroyRegular: require("../assets/fonts/Gilroy-Regular.ttf"),
  GilroyLight: require("../assets/fonts/Gilroy-Light.ttf"),
  GilroyThin: require("../assets/fonts/Gilroy-Thin.ttf"),
};

// https://hexcolorpedia.com/color/?q=db1a5a
export const COLOR = {
  none: "transparent",
  white: "#fff",
  black: "#000",
  offwhite: "#fafafa",
  offblack: "#222",
  //
  primary: "#0B0C7D",
  primary_dark: "#051438",
  background: "#EDF0F8",
  surface: "#DFE2E9",
  border: "#DFE2E9",
  text_muted: "#A6AFC2",
  text_faded: "#677597",
  icon_radius: "#ECECFD",
  indicator: "#020219",
  tab_text: "#7A90C2",
  disabled: "#E6E8EB",
  error: "#e11",
  success: "#3FB772",
  warning: "#D47400",
  //
  neutral_50: "#EFF1F4",
  primary_25: "#D0D1FB",
  primary_100: "#8585BE",
  text_200: "#58627A",
  // https://rgbacolorpicker.com/rgba-to-hex
  opacity: {
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
  },
};
