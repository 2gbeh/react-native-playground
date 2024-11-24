export type TFont = "black" | "bold" | "medium" | "regular" | "light" | "thin";

export enum FONT {
  RobotoBlack = "RobotoBlack",
  RobotoBold = "RobotoBold",
  RobotoMedium = "RobotoMedium",
  RobotoRegular = "RobotoRegular",
  RobotoLight = "RobotoLight",
  RobotoThin = "RobotoThin",
}

export const FONTS = {
  RobotoBlack: require("../assets/fonts/Roboto-Black.ttf"),
  RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
  RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
  RobotoLight: require("../assets/fonts/Roboto-Light.ttf"),
  RobotoThin: require("../assets/fonts/Roboto-Thin.ttf"),
};

export const COLOR = {
  light: {
    text: "#11181C",
    background: "#fff",
    icon: "#687076",
    tabIconDefault: "#687076",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
  },
};
