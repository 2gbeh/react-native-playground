import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
//
import FlexBox from "../flex-box";
import Avatar from "../avatar";
import { AuthService } from "@/store/auth/auth.service";
import { COLOR } from "@/constants/THEME";
import { OptionsMenuIcon, SearchIcon } from "@/constants/ICON";
import { useAppSelector } from "@/store/store.config";
import { selectTheme } from "@/store/theme/theme.slice";
import { typographyStyles } from "@/styles/typography.styles";

interface IProps {}

const AppBar: React.FC<IProps> = ({}) => {
  const theme = useAppSelector(selectTheme);
  const me = AuthService.me();
  const iconProps = { color: COLOR[theme].icon };
  console.log("🚀 ~ AppBar");
  // RENDERS
  return (
    <FlexBox sx={s.container}>
      <FlexBox sx={s.left}>
        <Avatar src={me?.photoURL} />
        <View>
          <Text style={s.subtitle}>{theme}</Text>
          <Text style={s.title}>{me?.email?.split('@')[0]}</Text>
        </View>
      </FlexBox>
      <FlexBox sx={s.right} start>
        <Pressable style={s.icon}>
          <SearchIcon {...iconProps} />
        </Pressable>
        <Pressable style={s.icon}>
          <OptionsMenuIcon {...iconProps} />
        </Pressable>
      </FlexBox>
    </FlexBox>
  );
};

export default React.memo(AppBar);

export const s = StyleSheet.create({
  _: {},
  container: {
    paddingHorizontal: 16,
    height: 64,
  },
  left: {
    columnGap: 16,
  },
  right: {
    columnGap: 12,
  },
  title: {
    ...typographyStyles.title_md,
  },
  subtitle: {
    ...typographyStyles.title_sm,
  },
  icon: {},
});
