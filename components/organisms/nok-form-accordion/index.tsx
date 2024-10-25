import React, { useState } from "react";
import { View } from "react-native";
//
import Accordion from "@/components/atoms/accordion";
import LabelTextInput from "@/components/atoms/label-text-input";
import LabelSelectorInput from "@/components/atoms/form-controls/label-selector-input";
//
import { nokFormAccordionStyles as s } from "./styles";

type DefaultValue = {
  title?: string;
  firstName: string;
  lastName: string;
};

interface IProps {
  defaultValues?: DefaultValue;
}

const NokFormAccordion: React.FC<IProps> = ({ defaultValues }) => {
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
          <LabelTextInput
            label="First name"
            placeholder="Enter first name"
            defaultValue={defaultValues?.firstName}
            required
          />
          <LabelTextInput label="Middle name" placeholder="Enter middle name" />
          <LabelTextInput
            label="Last name"
            placeholder="Enter last name"
            defaultValue={defaultValues?.lastName}
            required
          />
          <LabelSelectorInput
            label="Title"
            placeholder="Select title"
            defaultValue={defaultValues?.title}
          />
        </View>
      </View>
    </Accordion>
  );
};

export default React.memo(NokFormAccordion);
