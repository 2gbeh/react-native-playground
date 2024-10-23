import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
//
import Accordion from "@/components/atoms/accordion";
import LabelTextInput from "@/components/atoms/label-text-input";
import LabelSelectorInput from "@/components/atoms/label-selector-input";
import { FONT, COLOR } from "@/constants/THEME";

interface IProps {}

const NokFormAccordion: React.FC<IProps> = ({}) => {
  const [openAccordion, setOpenAccordion] = useState(true);
  console.log("🚀 ~ NokFormAccordion");
  // renders
  return (
    <Accordion
      label="Next of kin details"
      open={openAccordion}
      onToggle={() => setOpenAccordion((prev) => !prev)}
    >
      <View style={s.container}>
        <View style={s.content}>
          <LabelTextInput label="First name" placeholder="Enter first name" />
          <LabelTextInput label="Middle name" placeholder="Enter middle name" />
          <LabelTextInput label="Last name" placeholder="Enter last name" />
          <LabelSelectorInput label="Title" placeholder="Select title" />
        </View>
      </View>
    </Accordion>
  );
};

export default React.memo(NokFormAccordion);

const s = StyleSheet.create({
  _: {},
  container: {
    paddingVertical: 16,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 18,
  },
});
