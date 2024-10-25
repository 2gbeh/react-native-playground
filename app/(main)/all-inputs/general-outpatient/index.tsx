import {
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  Pressable,
} from "react-native";
//
import { AIText } from "@/components/atoms/all-inputs";
import CardWrapper from "@/components/atoms/cards/card-wrapper";
import Complaints from "@/components/molecules/complaints";
import History from "@/components/molecules/history";
import Examination from "@/components/molecules/examination";
import VitalSigns from "@/components/molecules/vital-signs";
import ClinicalJudgement from "@/components/molecules/clinical-judgement";
import { COLOR, FONT } from "@/constants/THEME";

export default function GeneralOutpatientScreen() {
  console.log("🚀 ~ GeneralOutpatientScreen");
  // renders
  return (
    <ScrollView>
      <View style={s.container}>
        <View style={s.left_content}>
          <Complaints />
          <History />
          <Examination />
          <VitalSigns />
          <ClinicalJudgement />
        </View>
        <View style={s.right_content}>
          <CardWrapper fill={COLOR.aside}>
            <AIText h1>Last clinic note</AIText>
          </CardWrapper>
        </View>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 24,
    flex: 1,
  },
  left_content: {
    flex: 2,
    rowGap: 32,
  },
  right_content: {
    flex: 1,
  },
});
