import { PromiseHelper } from "@/utils/helpers/common/promise.helper";
import { useState } from "react";

export function useCreateAppointmentWidget() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);
  const toggleAlert = () => setShowAlert((prev) => !prev);

  async function handleSubmit() {
    setIsSubmitting(true);
    await PromiseHelper.mockApiCall();
    // TODO(etugbeh): integrate api
    console.log("🚀 ~ useDashboardMenuBar ~ handleSubmit:");
    setIsSubmitting(false);
    setShowModal(false);
    setShowAlert(true)
  }

  return {
    showModal,
    toggleModal,
    showAlert,
    toggleAlert,
    handleSubmit,
    isSubmitting,
  };
}
