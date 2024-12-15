import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
//
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { COLOR } from "@/constants/THEME";
import { containerStyles } from "@/styles/container.styles";
import { typographyStyles } from "@/styles/typography.styles";
import { TransactionType } from "@/store/transactions/transaction.interface";
import { TransactionHelper } from "@/store/transactions/transaction.helper";
import FlexBox from "../flex-box";
import { SYMBOL } from "@/constants/SYMBOL";

interface IProps {
  data: TransactionType[];
}

const Hero: React.FC<IProps> = ({ data }) => {
  const theme = useAppSelector(selectTheme);
  const totals = TransactionHelper.computeTotals(data);
  console.log("🚀 ~ Hero", totals);
  // RENDER
  return (
    <View style={sx(theme).container}>
      <View style={sx(theme).top}>
        <Text style={sx(theme).label}>Balance</Text>
        <Text style={sx(theme).heading}>
          {SYMBOL.naira} {totals.creditAsStr}
        </Text>
      </View>
      <FlexBox>
        <FlexBox column start>
          <Text style={sx(theme).label}>Credit</Text>
          <Text style={sx(theme).valueSuccess}>{totals.debitAsStr}</Text>
        </FlexBox>
        <FlexBox column start>
          <Text style={sx(theme).label}>Debit</Text>
          <Text style={sx(theme).valueError}>{totals.netAsStr}</Text>
        </FlexBox>
      </FlexBox>
    </View>
  );
};

export default React.memo(Hero);

export const sx = (theme: ThemeType) =>
  StyleSheet.create({
    _: {},
    container: {
      backgroundColor: COLOR[theme].surfaceContainer,
      borderRadius: 28,
      padding: 24,
      height: 160,
      justifyContent: "space-between",
    },
    top: {},
    heading: {
      color: COLOR[theme].info,
      ...typographyStyles.headlineMedium,
    },
    label: {
      color: COLOR[theme].onSurfaceVariant,
      ...typographyStyles.bodyMedium,
    },
    valueSuccess: {
      color: COLOR[theme].success,
      ...typographyStyles.bodyLarge,
    },
    valueError: {
      color: COLOR[theme].error,
      ...typographyStyles.bodyLarge,
    },
  });
