import { useState } from "react";
import { router } from "expo-router";
//
import { PromiseHelper } from "@/utils/helpers/common/promise.helper";

export function useGeneralOutpatient() {
  const [saving, setSaving] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  //
  const toggleAlert = () => setShowAlert((prev) => !prev);
  const handleAfterSave = () => {
    setShowAlert(false);
    router.push("/(main)");
  };
  //
  async function handleSave() {
    if (!saving) {
      setSaving(true);
      // TODO(etugbeh): integrate api
      await PromiseHelper.mockApiCall();
      setSaving(false);
      setShowAlert(true);
    }
  }
  async function handleReview() {
    if (!saving) {
      router.push("/all-inputs/general-outpatient/preview");
    }
  }

  return {
    saving,
    showAlert,
    toggleAlert,
    handleSave,
    handleAfterSave,
    handleReview,
  };
}
