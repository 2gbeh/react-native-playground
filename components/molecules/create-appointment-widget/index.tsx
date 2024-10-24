import React from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
//
import SearchBar from "@/components/atoms/search-bar";
import JustifiedLabelSelector from "@/components/atoms/justified-label-selector";
import JustifiedLabelDatetime from "@/components/atoms/justified-label-datetime";
import CTAButton from "@/components/atoms/cta-button";
import Spinner from "@/components/atoms/spinner";
import ModalWrapper from "@/components/atoms/modal-wrapper";
import AlertDialog from "@/components/atoms/alert-dialog";
//
import { createAppointmentWidgetStyles as s } from "./styles";
import { useCreateAppointmentWidget } from "./states";

const CreateAppointmentWidget = () => {
  const {
    showModal,
    toggleModal,
    showAlert,
    toggleAlert,
    handleSubmit,
    isSubmitting,
  } = useCreateAppointmentWidget();
  console.log("🚀 ~ CreateAppointmentWidget");
  // renders
  return (
    <View>
      {/* BUTTON */}
      <CTAButton action={toggleModal}>Create appointment</CTAButton>

      {/* MODAL */}
      <AlertDialog
        heading="Appointment created"
        open={showAlert}
        onClose={toggleAlert}
        onConfirm={toggleAlert}
      />

      <ModalWrapper
        heading="Add new appointment"
        open={showModal}
        onClose={toggleModal}
        animation="slide"
      >
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
            <View style={{ flex: 1 }}>
              <CTAButton action={toggleModal} variant="outline">
                Save & Close
              </CTAButton>
            </View>
            <View style={{ flex: 1 }}>
              <CTAButton action={handleSubmit}>
                {isSubmitting ? <Spinner /> : "Save and continue treatment"}
              </CTAButton>
            </View>
          </View>
        </View>
      </ModalWrapper>
    </View>
  );
};

export default React.memo(CreateAppointmentWidget);
