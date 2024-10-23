import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { router } from "expo-router";
//
import CTAButton from "../../atoms/cta-button";
import SearchBar from "../../atoms/search-bar";
//
import { dashboardMenuBarStyles as s } from "./styles";
import { useDashboardMenuBar } from "./states";
import ModalWrapper from "@/components/atoms/modal-wrapper";

const DashboardMenuBar = () => {
  const { showCreateAppointmentModal, toggleCreateAppointmentModal } =
    useDashboardMenuBar();
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
      <ModalWrapper
        heading="Add new appointment"
        open={showCreateAppointmentModal}
        onClose={toggleCreateAppointmentModal}
        forceClose
      >
        
      </ModalWrapper>
    </>
  );
};

export default React.memo(DashboardMenuBar);
