import React from "react";
import { StyleSheet, Text, View } from "react-native";
//
import FlexBox from "../../flex-box";
import Avatar from "../../avatar";
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { TransactionType } from "@/store/transactions/transaction.interface";
import { TransactionPipe } from "@/store/transactions/transaction.pipe";
import { COLOR } from "@/constants/THEME";
import { typographyStyles } from "@/styles/typography.styles";

interface IProps {
  data: TransactionType;
}

const ListItem: React.FC<IProps> = ({ data }) => {
  const theme = useAppSelector(selectTheme);
  const transformed = TransactionPipe.transform(data);
  console.log("🚀 ~ ListItem");
  // RENDER
  return (
    <FlexBox sx={sx(theme).container}>
      <FlexBox sx={sx(theme).left}>
        <Avatar src={transformed.avatar} />
        <View>
          <Text style={sx(theme).title}>{transformed.displayName}</Text>
          <Text style={sx(theme).subtitle}>{transformed.narrationShort}</Text>
        </View>
      </FlexBox>
      <FlexBox column end>
        <Text style={sx(theme)[transformed.isDebit ? "titleError" : "titleSuccess"]}>
          {transformed.amount}
        </Text>
        <Text style={sx(theme).subtitle}>{transformed.dateShort}</Text>
      </FlexBox>
    </FlexBox>
  );
};

export default React.memo(ListItem);

export const sx = (theme: ThemeType) =>
  StyleSheet.create({
    _: {},
    container: {
      height: 72,
      borderBottomWidth: 1,
      borderBottomColor: COLOR[theme].outlineVariant,
    },
    left: {
      columnGap: 16,
    },
    title: {
      color: COLOR[theme][theme === "light" ? "onSurfaceVariant" : "onSurface"],
      ...typographyStyles.bodyLarge,
    },
    titleSuccess: {
      color: COLOR[theme].success,
      ...typographyStyles.bodyLarge,
    },
    titleError: {
      color: COLOR[theme].error,
      ...typographyStyles.bodyLarge,
    },
    subtitle: {
      color: COLOR[theme].onSurfaceVariant,
      ...typographyStyles.bodyMedium,
    },
  });
