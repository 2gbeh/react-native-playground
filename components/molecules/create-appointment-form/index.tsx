import React from "react";
import { View } from "react-native";
//
import SearchBar from "@/components/atoms/form-controls/search-bar";
import JustifiedLabelSelector from "@/components/atoms/form-controls/justified-label-selector";
import JustifiedLabelDatetime from "@/components/atoms/form-controls/justified-label-datetime";
import CTAButton from "@/components/atoms/buttons/cta-button";
import Spinner from "@/components/atoms/spinner";
//
import { createAppointmentFormStyles as s } from "./styles";

interface IProps {
  OnSave?: () => void;
  onSubmit?: () => void;
  submitting?: boolean;
}

const CreateAppointmentForm: React.FC<IProps> = ({
  OnSave = () => undefined,
  onSubmit = () => undefined,
  submitting,
}) => {
  console.log("🚀 ~ CreateAppointmentForm");
  // renders
  return (
    <View style={s.container}>
      <SearchBar width="100%" />
      <View style={s.inputs}>
        <JustifiedLabelSelector label="Clinic" value="Select clinic" />
        <JustifiedLabelSelector label="Ward" value="Select" />
        <JustifiedLabelSelector label="Bed" value="Select number" />
        <JustifiedLabelDatetime
          label="Time"
          date="05 Feb, 2021"
          time="10:00 AM"
        />
      </View>
      <View style={s.buttons}>
        <View style={s.button}>
          <CTAButton action={OnSave} variant="outline">
            Save & Close
          </CTAButton>
        </View>
        <View style={s.button}>
          <CTAButton action={onSubmit}>
            {submitting ? <Spinner /> : "Save and continue treatment"}
          </CTAButton>
        </View>
      </View>
    </View>
  );
};

export default React.memo(CreateAppointmentForm);
