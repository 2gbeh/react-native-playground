import React from "react";
import { View } from "react-native";
//
import  CTAButton from "@/components/atoms/buttons/cta-button";
import ModalWrapper from "@/components/atoms/modal-wrapper";
import CreateAppointmentForm from "@/components/molecules/create-appointment-form";
import AlertDialog from "@/components/atoms/alert-dialog";
//
import { useCreateAppointmentWidget } from "./states";

const CreateAppointmentWidget = () => {
  const {
    showModal,
    toggleModal,
    showAlert,
    toggleAlert,
    handleSubmit,
    submitting,
  } = useCreateAppointmentWidget();
  console.log("🚀 ~ CreateAppointmentWidget");
  // renders
  return (
    <View>
      {/* BUTTON */}
      <CTAButton action={toggleModal}>Create appointment</CTAButton>

      {/* MODALS */}
      <ModalWrapper
        heading="Add new appointment"
        open={showModal}
        onClose={toggleModal}
        animation="slide"
      >
        <CreateAppointmentForm
          OnSave={toggleModal}
          onSubmit={handleSubmit}
          submitting={submitting}
        />
      </ModalWrapper>

      <AlertDialog
        heading="Appointment created"
        open={showAlert}
        onClose={toggleAlert}
        onConfirm={toggleAlert}
      />
    </View>
  );
};

export default React.memo(CreateAppointmentWidget);
