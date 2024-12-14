import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { format as formatDate } from "date-fns";
//
import FlexBox from "../../flex-box";
import Avatar from "../../avatar";
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { TransactionType } from "@/store/transactions/transaction.interface";
import { COLOR } from "@/constants/THEME";
import { typographyStyles } from "@/styles/typography.styles";

interface IProps {
  data: TransactionType;
}

const ListItem: React.FC<IProps> = ({ data }) => {
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ ListItem");
  // RENDER
  return (
    <FlexBox sx={sx(theme).container}>
      <FlexBox sx={sx(theme).left}>
        <Avatar src={require(`@/assets/uploads/${data.account.avatar}`)} />
        <View>
          <Text style={sx(theme).title}>
            {data.account?.display_name || data.account.name}
          </Text>
          <Text style={sx(theme).subtitle}>{data.narration}</Text>
        </View>
      </FlexBox>
      <FlexBox column end>
        <Text style={sx(theme)[data.type === "CR" ? "title" : "titleError"]}>
          {data.amount.toLocaleString()}
        </Text>
        <Text style={sx(theme).subtitle}>{formatDate(data.date, "MMM d")}</Text>
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
    titleError: {
      color: COLOR[theme].error,
      ...typographyStyles.bodyLarge,
    },
    subtitle: {
      color: COLOR[theme].onSurfaceVariant,
      ...typographyStyles.bodyMedium,
    },
  });
