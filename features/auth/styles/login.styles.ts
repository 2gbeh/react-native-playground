import { ViewStyle } from "react-native";
import { ThemeType } from "@/store/theme/theme.slice";
import { COLOR } from "@/constants/THEME";

export const loginStyles = (theme: ThemeType) => ({
  _: {},
  container: {
    backgroundColor: COLOR.dark.surface,
    flex: 1,
  } satisfies ViewStyle,
  content: {
    backgroundColor: COLOR[theme].surfaceContainer,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingVertical: 24,
    paddingHorizontal: 16,
    flex: 2,
    rowGap: 24,
  } satisfies ViewStyle,
});
