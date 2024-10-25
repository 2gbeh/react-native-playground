import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
//
import CardWrapper from "@/components/atoms/cards/card-wrapper";
import { AIAccordion, AIText } from "@/components/atoms/all-inputs";

interface IProps {}

const ClinicalJudgementAccordion: React.FC<IProps> = ({}) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  console.log("🚀 ~ ClinicalJudgementAccordion");
  // renders
  return (
    <View style={s.container}>
      <AIText h1>Clinical judgement</AIText>
      <CardWrapper>
        <AIAccordion
          heading="Enter clinical assessment"
          open={openAccordion}
          onToggle={() => setOpenAccordion((prev) => !prev)}
        ></AIAccordion>
      </CardWrapper>
    </View>
  );
};

export default React.memo(ClinicalJudgementAccordion);

const s = StyleSheet.create({
  _: {},
  container: {
    rowGap: 16,
  },
  footer: {
    alignSelf: "flex-end",
  },
});
