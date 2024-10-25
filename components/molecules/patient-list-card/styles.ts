import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const patientListCardStyles = {
  _: {},
  container: (isBusy = false) =>
    StyleSheet.create({
      transform: {
        backgroundColor: isBusy ? COLOR.neutral_100 : COLOR.white,
        borderColor: COLOR.neutral_100,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        rowGap: 16,
      },
    }),
  static: StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    left: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 16,
    },
    right: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 24,
    },
    grid: {
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 16,
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "flex-start",
      rowGap: 16,
    },
    grid_item: {
      rowGap: 8,
      width: "25%",
    },
    label: {
      color: COLOR.text_muted,
      fontFamily: FONT.GilroyMedium,
      fontSize: 14,
      fontWeight: "500",
    },
    value: {
      color: COLOR.primary_dark,
      fontFamily: FONT.GilroyMedium,
      fontSize: 14,
      fontWeight: "500",
    },
  }),
};
