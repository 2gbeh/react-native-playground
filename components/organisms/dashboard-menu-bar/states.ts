import { useState } from "react";

export function useDashboardMenuBar() {
  const [showCreateAppointmentModal, setShowCreateAppointmentModal] =
    useState(false);

  const toggleCreateAppointmentModal = () =>
    setShowCreateAppointmentModal((prev) => !prev);

  return {
    showCreateAppointmentModal,
    setShowCreateAppointmentModal,
    toggleCreateAppointmentModal,
  };
}
