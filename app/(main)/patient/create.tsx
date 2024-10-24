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
import WhiteSpace from "@/components/atoms/white-space";
import AlertDialog from "@/components/atoms/alert-dialog";
import ModalWrapper from "@/components/atoms/modal-wrapper";
import CreateAppointmentForm from "@/components/molecules/create-appointment-form";
import Spinner from "@/components/atoms/spinner";
//
import { addPatientScreenStyles as s } from "@/features/patient/add-patient/styles";
import { useAddPatientScreen } from "@/features/patient/add-patient/states";
import Warning from "@/components/atoms/warning";

export default function AddPatientScreen() {
  const {
    toggleAutofill,
    defaultValues,
    canSubmit,
    handleSave,
    handleContinue,
    submittingAction1,
    submittingAction2,
    showAlert1,
    handleAfterSave,
    showModal,
    toggleModal,
    handleCreate,
    creating,
    showAlert2,
    handleAfterCreate,
  } = useAddPatientScreen();
  console.log("🚀 ~ AddPatientScreen");
  // renders
  return (
    <>
      {/* NAV */}
      <BackButton>Add patient</BackButton>

      {/* FORMS */}
      <ScrollView>
        <Pressable style={s.form_wrapper} onPress={toggleAutofill}>
          {/* UPLOAD AVATAR */}{" "}
          <View style={s.form_header}>
            <AvatarUploader defaultValue={defaultValues.avatar} />
            <View style={{ rowGap: 8 }}>
              <Warning
                show={canSubmit}
                message="Click to view patient info. Patient with details exists"
              />
              <View style={s.form_header_input}>
                <LabelPatientIdInput
                  label="Patient ID"
                  placeholder="HOPS0123456"
                />
              </View>
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
            <WhiteSpace length={3} />
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
            minWidth={145}
          >
            {submittingAction1 ? <Spinner primary /> : "Save and close"}
          </CTAButton>
          <CTAButton
            action={handleContinue}
            disabled={!canSubmit}
            minWidth={185}
          >
            {submittingAction2 ? <Spinner /> : "Create appointment"}
          </CTAButton>
        </View>
      </View>

      {/* MODALS */}
      <AlertDialog
        heading="Patient created"
        open={showAlert1}
        onClose={handleAfterSave}
        onConfirm={handleAfterSave}
      />

      <AlertDialog
        heading="Appointment created"
        open={showAlert2}
        onClose={handleAfterCreate}
        onConfirm={handleAfterCreate}
      />

      <ModalWrapper
        heading="Add new appointment"
        open={showModal}
        onClose={toggleModal}
        animation="slide"
      >
        <CreateAppointmentForm
          OnSave={toggleModal}
          onSubmit={handleCreate}
          submitting={creating}
        />
      </ModalWrapper>
    </>
  );
}
