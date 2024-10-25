import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
//
import CardWrapper from "@/components/atoms/cards/card-wrapper";
import SearchBar from "@/components/atoms/form-controls/search-bar";
import CTAButton from "@/components/atoms/buttons/cta-button";
import {
  AIAccordion,
  AIText,
  AIBubblePicker,
} from "@/components/atoms/all-inputs";

interface IProps {}

const Complaints: React.FC<IProps> = ({}) => {
  const [openAccordion, setOpenAccordion] = useState(true);
  console.log("🚀 ~ Complaints");
  // renders
  return (
    <View style={s.container}>
      <AIText h1>Complaints</AIText>
      <CardWrapper>
        <AIAccordion
          heading="Record symptoms"
          open={openAccordion}
          onToggle={() => setOpenAccordion((prev) => !prev)}
        >
          <AIText>
            Search for complaints in Standing Orders or select a common
            complaint
          </AIText>
          <SearchBar
            placeholder="i.e. migraine, severe headcahe etc"
            width="100%"
          />
          <AIBubblePicker
            list={[
              "Not breathing or gasping",
              "Yellow hands and feet",
              "Smelly umbilical cord",
              "Bleeding umbilical cord",
              "Difficulty breathing",
              "Cold hands and feet",
              "Wet umbilicus",
              "Retained umbilical stump",
            ]}
          />
          <View style={s.footer}>
            <CTAButton disabled>Save</CTAButton>
          </View>
        </AIAccordion>
      </CardWrapper>
    </View>
  );
};

export default React.memo(Complaints);

const s = StyleSheet.create({
  _: {},
  container: {
    rowGap: 16,
  },
  footer: {
    alignSelf: "flex-end",
  },
});
