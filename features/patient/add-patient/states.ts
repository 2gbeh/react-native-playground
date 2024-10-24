import { useState } from "react";
import { router } from "expo-router";
//
import { PromiseHelper } from "@/utils/helpers/common/promise.helper";
import { initialValues, mockInitialValues } from "./schema";

export function useAddPatientScreen() {
  const [autofill, setAutofill] = useState(false);
  const [submittingAction1, setSubmittingAction1] = useState(false);
  const [submittingAction2, setSubmittingAction2] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const defaultValues = autofill ? mockInitialValues : initialValues;
  const canSubmit = autofill && !submittingAction1 && !submittingAction2;

  const toggleAutofill = () => setAutofill((prev) => !prev);

  function handleAfterSave() {
    setShowAlert(false);
    router.back()
  }

  async function handleSave() {
    setSubmittingAction1(true);
    await PromiseHelper.mockApiCall();
    setSubmittingAction1(false);
    setAutofill(false);
    setShowAlert(true);
  }

  async function handleCreate() {
    setSubmittingAction2(true);
    await PromiseHelper.mockApiCall();
    setSubmittingAction2(false);
    // router.back();
  }

  return {
    autofill,
    toggleAutofill,
    defaultValues,
    canSubmit,
    handleSave,
    handleCreate,
    submittingAction1,
    submittingAction2,
    showAlert,
    handleAfterSave,
  };
}
