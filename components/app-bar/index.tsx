import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
//
import FlexBox from "../flex-box";
import Avatar from "../avatar";
import { OptionsMenuIcon, SearchIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/THEME";
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { typographyStyles } from "@/styles/typography.styles";
import mockCurrentUserData from "@/store/auth/data/currentUser.json";

interface IProps {}

const AppBar: React.FC<IProps> = ({}) => {
  const me = mockCurrentUserData;
  const theme = useAppSelector(selectTheme);
  const iconProps = { color: COLOR[theme].onSurfaceVariant };
  console.log("🚀 ~ AppBar");
  // RENDER
  return (
    <FlexBox sx={sx(theme).container}>
      <FlexBox sx={sx(theme).left}>
        <Avatar src={me?.photoURL} size={56} />
        <View>
          <Text style={sx(theme).title}>{me?.displayName}</Text>
          <Text style={sx(theme).subtitle}>{me?.email}</Text>
        </View>
      </FlexBox>
      <FlexBox sx={sx(theme).right} end>
        <Pressable>
          <SearchIcon {...iconProps} />
        </Pressable>
        <Pressable>
          <OptionsMenuIcon {...iconProps} />
        </Pressable>
      </FlexBox>
    </FlexBox>
  );
};

export default React.memo(AppBar);

export const sx = (theme: ThemeType) =>
  StyleSheet.create({
    _: {},
    container: {
      marginTop: 16,
      height: 64,
    },
    left: {
      columnGap: 16,
    },
    right: {
      columnGap: 12,
    },
    title: {
      color: COLOR[theme][theme === "light" ? "onSurfaceVariant" : "onSurface"],
      ...typographyStyles.bodyLarge,
    },
    subtitle: {
      color: COLOR[theme].onSurfaceVariant,
      ...typographyStyles.bodyMedium,
    },
  });
