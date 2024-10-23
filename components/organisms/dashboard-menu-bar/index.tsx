import React from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
//
import SearchBar from "@/components/atoms/search-bar";
import ModalWrapper from "@/components/atoms/modal-wrapper";
import CreateAppointmentForm from "@/components/molecules/create-appointment-form";
import CTAButton from "@/components/atoms/cta-button";
//
import { dashboardMenuBarStyles as s } from "./styles";
import { useDashboardMenuBar } from "./states";

const DashboardMenuBar = () => {
  const {
    showCreateAppointmentModal,
    toggleCreateAppointmentModal,
    handleSubmit,
    isSubmitting,
  } = useDashboardMenuBar();
  console.log("🚀 ~ DashboardMenuBar");
  // renders
  return (
    <>
      <View style={s.container}>
        {/* HEADING */}
        <Text style={s.heading}>Hospital statistics</Text>

        {/* BUTTONS */}
        <View style={s.right_content}>
          <CTAButton action={toggleCreateAppointmentModal}>
            Create appointment
          </CTAButton>
          <CTAButton
            action={() => router.push("/patient/create")}
            variant="outline"
          >
            Add patient
          </CTAButton>

          {/* SEARCH */}
          <SearchBar placeholder="Find patient" />
        </View>
      </View>

      {/* MODAL */}
      <ModalWrapper
        heading="Add new appointment"
        open={showCreateAppointmentModal}
        onClose={toggleCreateAppointmentModal}
        forceClose
      >
        <CreateAppointmentForm
          onCancel={toggleCreateAppointmentModal}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </ModalWrapper>
    </>
  );
};

export default React.memo(DashboardMenuBar);
