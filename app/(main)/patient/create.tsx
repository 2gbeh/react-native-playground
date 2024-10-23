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
import NokFormAccordion from "@/components/organisms/nok-form-accordion";
import { FONT, COLOR } from "@/constants/THEME";
import LabelGovtIdInput from "@/components/atoms/label-govt-id-input";

export default function CreateAppointmentScreen() {
  console.log("🚀 ~ CreateAppointmentScreen");
  // renders
  return (
    <View style={s.container}>
      <BackButton>Add patient</BackButton>

      {/* FORMS */}
      <ScrollView>
        <View style={s.form_group}>
          <View style={s.input_group}>
            <LabelSelectorInput label="Title" placeholder="Select title" />
            <LabelTextInput label="First name" placeholder="Enter first name" />
            <LabelTextInput
              label="Middle name"
              placeholder="Enter middle name"
            />
            <LabelTextInput label="Last name" placeholder="Enter last name" />
          </View>
          <View style={s.input_group}>
            <LabelTextInput
              label="Date of birth"
              placeholder="Enter date of birth"
            />
            <LabelSelectorInput label="Gender" placeholder="Select gender" />
            <LabelTextInput
              label="Phone number"
              placeholder="Enter phone number"
            />
          </View>
          <View style={s.input_group}>
            <LabelTextInput label="Address" placeholder="Enter address" />
            <LabelSelectorInput
              label="Nationality"
              placeholder="Select nationality"
            />
            <LabelSelectorInput
              label="State of origin"
              placeholder="Select state of origin"
            />
          </View>
          <View style={s.input_group}>
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
  form_group: {
    rowGap: 16,
  },
  input_group: {
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
