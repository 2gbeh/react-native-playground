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
import LastClinicNote from "@/components/molecules/last-clinic-note";
import { CTAButton, AccentButton } from "@/components/atoms/buttons";
import { COLOR, FONT } from "@/constants/THEME";

export default function GeneralOutpatientScreen() {
  console.log("🚀 ~ GeneralOutpatientScreen");
  // renders
  return (
    <>
      <ScrollView>
        <View style={s.container}>
          <View style={s.left}>
            <Complaints />
            <History />
            <Examination />
            <VitalSigns />
            <ClinicalJudgement />
          </View>
          <View style={s.right}>
            <LastClinicNote />
          </View>
        </View>
      </ScrollView>
      <View style={s.footer}>
        <AccentButton>Next Appointment</AccentButton>
        <AccentButton selector>Admin | Discharge</AccentButton>
        <CTAButton variant="outline">Save and close</CTAButton>
        <CTAButton>Review and save</CTAButton>
      </View>
    </>
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
  left: {
    flex: 2,
    rowGap: 32,
  },
  right: {
    flex: 1,
  },
  footer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 32,
  },
});
