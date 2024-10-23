import React from "react";
import { View, Text, StyleSheet } from "react-native";
//
import SearchBar from "@/components/atoms/search-bar";
import LabelledInputSelector from "@/components/atoms/labelled-input-selector";
import LabelledDatetimeWidget from "@/components/atoms/labelled-datetime-widget";
import CTAButton from "@/components/atoms/cta-button";
import { FONT, COLOR } from "@/constants/THEME";
import Spinner from "@/components/atoms/spinner";

interface IProps {
  onCancel?: () => void;
  onSubmit?: () => void;
  isSubmitting?: boolean;
}

const CreateAppointmentForm: React.FC<IProps> = ({
  onCancel = () => undefined,
  onSubmit = () => undefined,
  isSubmitting,
}) => {
  console.log("🚀 ~ CreateAppointmentForm");
  // renders
  return (
    <View style={s.container}>
      <SearchBar width="100%" />
      <View style={s.inputs}>
        <LabelledInputSelector label="Clinic" value="Select clinic" />
        <LabelledInputSelector label="Ward" value="Select" />
        <LabelledInputSelector label="Bed" value="Select number" />
        <LabelledDatetimeWidget
          label="Time"
          date="05 Feb, 2021"
          time="10:00 AM"
        />
      </View>
      <View style={s.buttons}>
        <View style={{ flex: 1 }}>
          <CTAButton action={onCancel} variant="outline">
            Save & Close
          </CTAButton>
        </View>
        <View style={{ flex: 1 }}>
          <CTAButton action={onSubmit}>
            {isSubmitting ? <Spinner /> : "Save and continue treatment"}
          </CTAButton>
        </View>
      </View>
    </View>
  );
};

export default React.memo(CreateAppointmentForm);

const s = StyleSheet.create({
  _: {},
  container: {
    rowGap: 24,
  },
  inputs: {
    rowGap: 16,
  },
  buttons: {
    flexDirection: "row",
    paddingVertical: 16,
    columnGap: 32,
  },
});
