import { PromiseHelper } from "@/utils/helpers/common/promise.helper";
import { useState } from "react";

export function useDashboardMenuBar() {
  const [showCreateAppointmentModal, setShowCreateAppointmentModal] =
    useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleCreateAppointmentModal = () =>
    setShowCreateAppointmentModal((prev) => !prev);

  async function handleSubmit() {
    setIsSubmitting(true);
    await PromiseHelper.mockApiCall();
    // TODO(etugbeh): integrate api
    console.log("🚀 ~ useDashboardMenuBar ~ handleSubmit:");
    setIsSubmitting(false);
    setShowCreateAppointmentModal(false)
  }

  return {
    showCreateAppointmentModal,
    toggleCreateAppointmentModal,
    handleSubmit,
    isSubmitting,
  };
}
