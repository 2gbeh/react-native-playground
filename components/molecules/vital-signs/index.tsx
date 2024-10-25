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

const VitalSigns: React.FC<IProps> = ({}) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  console.log("🚀 ~ VitalSigns");
  // renders
  return (
    <View style={s.container}>
      <AIText h1>Vital signs</AIText>
      <CardWrapper>
        <AIAccordion
          heading="Record patient vital signs"
          open={openAccordion}
          onToggle={() => setOpenAccordion((prev) => !prev)}
        ></AIAccordion>
      </CardWrapper>
    </View>
  );
};

export default React.memo(VitalSigns);

const s = StyleSheet.create({
  _: {},
  container: {
    rowGap: 16,
  },
  footer: {
    alignSelf: "flex-end",
  },
});
