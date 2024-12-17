import { StyleSheet, ViewStyle } from "react-native";
import { ThemeType } from "@/store/theme/theme.slice";
import { COLOR } from "@/constants/THEME";
import { containerStyles } from "./container.styles";
import { typographyStyles } from "./typography.styles";

// sx(theme).container
export const formStyles = (theme: ThemeType) =>
  StyleSheet.create({
    form: {
      rowGap: 16,
    },
    formControl: {
      rowGap: 8,
    },
    label: {
      color: "#ddd",
    },
    input: {
      backgroundColor: "#fff",
      paddingHorizontal: 12,
      height: 40,
    },
    passwordWrapper: {
      position: "relative",
    },
    passwordIcon: {
      position: "absolute",
      top: 10,
      right: 10,
    },
    error: {
      color: "red",
    },
  });

// sx(theme).container().default
export const filledTextFieldStyles = (theme: ThemeType) => ({
  container: (disabled?: boolean) => {
    let sharedStyles: ViewStyle = {
      backgroundColor:
        COLOR[theme][disabled ? "onSurface" : "surfaceContainerHighest"],
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      height: 54,
      maxHeight: 56,
      columnGap: 16,
    };
    //
    return StyleSheet.create({
      default: {
        ...sharedStyles,
        ...containerStyles.rowCenter,
        paddingHorizontal: 16,
      },
      leftIcon: {
        ...sharedStyles,
        ...containerStyles.rowCenter,
        paddingLeft: 12,
        paddingRight: 16,
      },
      rightIcon: {
        ...sharedStyles,
        ...containerStyles.rowCenterBetween,
        paddingLeft: 16,
        paddingRight: 12,
      },
      leftRightIcon: {
        ...sharedStyles,
        ...containerStyles.rowCenterBetween,
        paddingHorizontal: 12,
      },
    });
  },
  wrapper: StyleSheet.create({
    default: {
      ...containerStyles.rowCenter,
      flex: 1,
      columnGap: 12,
    },
  }),
  activeIndicator: (disabled?: boolean, focused?: boolean, invalid?: boolean) =>
    StyleSheet.create({
      default: {
        backgroundColor:
          COLOR[theme][
            disabled
              ? "onSurface"
              : invalid
              ? "error"
              : focused
              ? "primary"
              : "onSurfaceVariant"
          ],
        height: focused ? 2 : 1,
      },
    }),
  label: (disabled?: boolean, isDirty?: boolean, invalid?: boolean) =>
    StyleSheet.create({
      default: {
        color:
          COLOR[theme][
            disabled
              ? "onSurface"
              : isDirty
              ? "primary"
              : invalid
              ? "error"
              : "onSurfaceVariant"
          ],
        ...typographyStyles[isDirty ? "bodySmall" : "bodyLarge"],
      },
    }),
  input: StyleSheet.create({
    default: {
      ...typographyStyles.bodyLarge,
      color: COLOR[theme].onSurface,
      flex: 1,
    },
  }),
  value: StyleSheet.create({
    default: {
      ...typographyStyles.bodyLarge,
      color: COLOR[theme].onSurface,
    },
    secondary: {
      ...typographyStyles.bodyLarge,
      color: COLOR[theme].onSurfaceVariant,
    },
  }),
  errorWrapper: StyleSheet.create({
    default: {
      marginTop: 4,
      marginHorizontal: 16,
    },
  }),
  error: (disabled?: boolean) =>
    StyleSheet.create({
      default: {
        ...typographyStyles.bodySmall,
        color: COLOR[theme][disabled ? "onSurface" : "error"],
      },
    }),
  // errorWrapper: StyleSheet.create({
  //   default: {
  //     ...containerStyles.rowCenterBetween,
  //     marginTop: 4,
  //     paddingHorizontal: 16,
  //   },
  // }),
  // error: (disabled?: boolean, invalid?: boolean) =>
  //   StyleSheet.create({
  //     default: {
  //       ...typographyStyles.bodySmall,
  //       color:
  //         COLOR[theme][
  //           disabled ? "onSurface" : invalid ? "error" : "onSurfaceVariant"
  //         ],
  //     },
  //   }),
});
