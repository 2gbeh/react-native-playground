import React, { useState } from "react";
import { View } from "react-native";
//
import CardWrapper from "@/components/atoms/cards/card-wrapper";
import CTAButton from "@/components/atoms/buttons/cta-button";
import {
  AIAccordion,
  AIText,
  AIBubblePicker,
  AIPredictiveText,
} from "@/components/atoms/all-inputs";
//
import { examinationAccordionStyles as s } from "./styles";

interface IProps {}

const ExaminationAccordion: React.FC<IProps> = ({}) => {
  const [openAccordion, setOpenAccordion] = useState(true);
  console.log("🚀 ~ ExaminationAccordion");
  // renders
  return (
    <View style={s.container}>
      <AIText h1>Examination</AIText>
      <CardWrapper>
        <AIAccordion
          heading="Record physical examination findings"
          open={openAccordion}
          onToggle={() => setOpenAccordion((prev) => !prev)}
        >
          <AIText>
            Select suggestions based on Standing Orders or type text
          </AIText>
          <AIPredictiveText />
          <AIBubblePicker
            list={[
              "General appearance",
              "Chest",
              "Temperature",
              "Heads",
              "Weight",
            ]}
          />
          <View style={s.footer}>
            <CTAButton variant="success" disabled>
              Save
            </CTAButton>
          </View>
        </AIAccordion>
      </CardWrapper>
    </View>
  );
};

export default React.memo(ExaminationAccordion);
