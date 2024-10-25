import React, { useState } from "react";
import { View } from "react-native";
//
import CardWrapper from "@/components/atoms/cards/card-wrapper";
import CTAButton from "@/components/atoms/buttons/cta-button";
import {
  AIAccordion,
  AIText,
  AIAudioRecorder,
} from "@/components/atoms/all-inputs";
// 
import { historyAccordionStyles as s } from "./styles";

interface IProps {}

const HistoryAccordion: React.FC<IProps> = ({}) => {
  const [openAccordion, setOpenAccordion] = useState(true);
  console.log("🚀 ~ HistoryAccordion");
  // renders
  return (
    <View style={s.container}>
      <AIText h1>History</AIText>
      <CardWrapper>
        <AIAccordion
          heading="Record clinical history"
          open={openAccordion}
          onToggle={() => setOpenAccordion((prev) => !prev)}
        >
          <AIText>Record audio and review transcript, or type text</AIText>
          <AIAudioRecorder />
          <View style={s.footer}>
            <CTAButton disabled>Save</CTAButton>
          </View>
        </AIAccordion>
      </CardWrapper>
    </View>
  );
};

export default React.memo(HistoryAccordion);
