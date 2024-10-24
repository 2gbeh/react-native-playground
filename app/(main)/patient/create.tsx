import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
//
import BackButton from "@/components/atoms/back-button";
import LabelTextInput from "@/components/atoms/label-text-input";
import LabelSelectorInput from "@/components/atoms/label-selector-input";
import CTAButton from "@/components/atoms/cta-button";
import LabelGovtIdInput from "@/components/atoms/label-govt-id-input";
import NokFormAccordion from "@/components/organisms/nok-form-accordion";
import { FONT, COLOR } from "@/constants/THEME";
import LabelPatientIdInput from "@/components/atoms/label-patient-id-input";
import AvatarUploader from "@/components/atoms/avatar-uploader";
import LabelDateInput from "@/components/atoms/label-date-input";

export default function CreateAppointmentScreen() {
  console.log("🚀 ~ CreateAppointmentScreen");
  // renders
  return (
    <View style={s.container}>
      <BackButton>Add patient</BackButton>

      {/* FORMS */}
      <ScrollView>
        <View style={s.form_wrapper}>
          <View style={s.form_header}>
            <AvatarUploader />
            <View style={s.form_header_input}>
              <LabelPatientIdInput
                label="Patient ID"
                placeholder="HOPS0123456"
              />
            </View>
          </View>
          <View style={s.input_wrapper}>
            <LabelSelectorInput label="Title" placeholder="Select title" />
            <LabelTextInput
              label="First name"
              placeholder="Enter first name"
              required
            />
            <LabelTextInput
              label="Middle name"
              placeholder="Enter middle name"
              required
            />
            <LabelTextInput label="Last name" placeholder="Enter last name" />
          </View>
          <View style={s.input_wrapper}>
            <LabelDateInput
              label="Date of birth"
              placeholder="Enter date of birth"
              required
            />
            <LabelSelectorInput
              label="Gender"
              placeholder="Select gender"
              required
            />
            <LabelTextInput
              label="Phone number"
              placeholder="Enter phone number"
              required
            />
          </View>
          <View style={s.input_wrapper}>
            <LabelTextInput
              label="Address"
              placeholder="Enter address"
              required
            />
            <LabelSelectorInput
              label="Nationality"
              placeholder="Select nationality"
              required
            />
            <LabelSelectorInput
              label="State of origin"
              placeholder="Select state of origin"
              required
            />
          </View>
          <View style={s.input_wrapper}>
            <LabelGovtIdInput label="Government issued ID " />
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 1 }}></View>
          </View>

          {/* NEXT OF KIN */}
          <NokFormAccordion />
        </View>
      </ScrollView>

      {/* BUTTONS */}
      <View style={s.footer}>
        <View style={s.buttons}>
          <CTAButton variant="outline" disabled>
            Save and close
          </CTAButton>
          <CTAButton disabled>Create appointment</CTAButton>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.background,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flex: 1,
    rowGap: 24,
  },
  form_wrapper: {
    rowGap: 16,
  },
  form_header: {
    marginBottom: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  form_header_input: {
    flex: 1,
    alignItems: "flex-end",
  },
  input_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 18,
  },
  footer: {
    alignSelf: "flex-end",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 32,
  },
});
