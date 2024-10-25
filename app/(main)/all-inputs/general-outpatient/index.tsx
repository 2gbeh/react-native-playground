import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";

// import { AllInputsScreenStyles as s } from "@/features/all-inputs/styles";
// import CardWrapper from "@/components/atoms/cards/card-wrapper";
import Complaints from "@/components/molecules/complaints";
import CardWrapper from "@/components/atoms/cards/card-wrapper";
import { AIText } from "@/components/atoms/all-inputs";
import { COLOR, FONT } from "@/constants/THEME";

export default function GeneralOutpatientScreen() {
  console.log("🚀 ~ GeneralOutpatientScreen");
  // renders
  return (
    <View style={s.container}>
      <View style={s.left_content}>
        <Complaints />
      </View>
      <View style={s.right_content}>
        <CardWrapper fill={COLOR.aside}>
          <AIText h1>Last clinic note</AIText>
        </CardWrapper>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 24,
  },
  left_content: {
    flex: 2,
  },
  right_content: {
    flex: 1,
  },
});
