import { useState } from "react";
import { router } from "expo-router";
//
import { PromiseHelper } from "@/utils/helpers/common/promise.helper";

export function useReviewGeneralOutpatient() {
  const [submitting, setSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  //
  const toggleAlert = () => setShowAlert((prev) => !prev);
  const handleAfterSubmit = () => {
    setShowAlert(false);
    router.push("/(main)");
  };
  //
  async function handleSubmit() {
    if (!submitting) {
      setSubmitting(true);
      // TODO(etugbeh): integrate api
      await PromiseHelper.mockApiCall();
      setSubmitting(false);
      setShowAlert(true);
    }
  }

  return {
    submitting,
    showAlert,
    toggleAlert,
    handleSubmit,
    handleAfterSubmit,
  };
}
