import { View, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";
//
import BackButton from "@/components/atoms/back-button";
import LabelTextInput from "@/components/atoms/label-text-input";
import LabelSelectorInput from "@/components/atoms/label-selector-input";
import CTAButton from "@/components/atoms/cta-button";
import LabelGovtIdInput from "@/components/atoms/label-govt-id-input";
import NokFormAccordion from "@/components/organisms/nok-form-accordion";
import LabelPatientIdInput from "@/components/atoms/label-patient-id-input";
import AvatarUploader from "@/components/atoms/avatar-uploader";
import LabelDateInput from "@/components/atoms/label-date-input";
import AlertDialog from "@/components/atoms/alert-dialog";
import Spinner from "@/components/atoms/spinner";
//
import { addPatientScreenStyles as s } from "@/features/patient/add-patient/styles";
import { useAddPatientScreen } from "@/features/patient/add-patient/states";

export default function AddPatientScreen() {
  const {
    autofill,
    toggleAutofill,
    defaultValues,
    canSubmit,
    handleSave,
    handleCreate,
    submittingAction1,
    submittingAction2,
    showAlert,
    handleAfterSave,
  } = useAddPatientScreen();
  console.log("🚀 ~ AddPatientScreen");
  // renders
  return (
    <>
      <View style={s.container}>
        {/* NAV */}
        <BackButton>Add patient</BackButton>

        {/* FORMS */}
        <ScrollView>
          <Pressable style={s.form_wrapper} onPress={toggleAutofill}>
            <View style={s.form_header}>
              <AvatarUploader defaultValue={defaultValues.avatar} />
              <View style={s.form_header_input}>
                <LabelPatientIdInput
                  label="Patient ID"
                  placeholder="HOPS0123456"
                />
              </View>
            </View>
            <View style={s.input_wrapper}>
              <LabelSelectorInput
                label="Title"
                placeholder="Select title"
                defaultValue={defaultValues.title}
              />
              <LabelTextInput
                label="First name"
                placeholder="Enter first name"
                defaultValue={defaultValues.firstName}
                required
              />
              <LabelTextInput
                label="Middle name"
                placeholder="Enter middle name"
              />
              <LabelTextInput
                label="Last name"
                placeholder="Enter last name"
                defaultValue={defaultValues.lastName}
                required
              />
            </View>
            <View style={s.input_wrapper}>
              <LabelDateInput
                label="Date of birth"
                placeholder="Enter date of birth"
                defaultValue={defaultValues.dateOfBirth}
                required
              />
              <LabelSelectorInput
                label="Gender"
                placeholder="Select gender"
                defaultValue={defaultValues.gender}
                required
              />
              <LabelTextInput
                label="Phone number"
                placeholder="Enter phone number"
                defaultValue={defaultValues.phoneNumber}
                required
              />
            </View>
            <View style={s.input_wrapper}>
              <LabelTextInput
                label="Address"
                placeholder="Enter address"
                defaultValue={defaultValues.address}
                required
              />
              <LabelSelectorInput
                label="Nationality"
                placeholder="Select nationality"
                defaultValue={defaultValues.nationality}
                required
              />
              <LabelSelectorInput
                label="State of origin"
                placeholder="Select state of origin"
                defaultValue={defaultValues.stateOfOrigin}
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
            <NokFormAccordion defaultValues={defaultValues.nextOfKin} />
          </Pressable>
        </ScrollView>

        {/* BUTTONS */}
        <View style={s.footer}>
          <View style={s.buttons}>
            <CTAButton
              variant="outline"
              action={handleSave}
              disabled={!canSubmit}
            >
              {submittingAction1 ? "Please wait..." : "Save and close"}
            </CTAButton>
            <CTAButton action={handleCreate} disabled={!canSubmit}>
              {submittingAction2 ? "Please wait..." : "Create appointment"}
            </CTAButton>
          </View>
        </View>
      </View>

      {/* ALERT */}
      <AlertDialog
        heading="Patient created"
        open={showAlert}
        onClose={handleAfterSave}
        onConfirm={handleAfterSave}
      />
    </>
  );
}
