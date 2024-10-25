import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
//
import CardWrapper from "@/components/atoms/cards/card-wrapper";
import CTAButton from "@/components/atoms/buttons/cta-button";
import {
  AIAccordion,
  AIText,
  AIBubblePicker,
  AIAudioRecorder,
} from "@/components/atoms/all-inputs";

interface IProps {}

const Examination: React.FC<IProps> = ({}) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  console.log("🚀 ~ Examination");
  // renders
  return (
    <View style={s.container}>
      <AIText h1>Examination</AIText>
      <CardWrapper>
        <AIAccordion
          heading="Record physical examination findings"
          open={openAccordion}
          onToggle={() => setOpenAccordion((prev) => !prev)}
        ></AIAccordion>
      </CardWrapper>
    </View>
  );
};

export default React.memo(Examination);

const s = StyleSheet.create({
  _: {},
  container: {
    rowGap: 16,
  },
  footer: {
    alignSelf: "flex-end",
  },
});
