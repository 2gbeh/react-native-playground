import { useState } from "react";
import { router } from "expo-router";
//
import { PromiseHelper } from "@/utils/helpers/common/promise.helper";
import { initialValues, mockInitialValues } from "./schema";

export function useAddPatientScreen() {
  const [autofill, setAutofill] = useState(false);
  const [submittingAction1, setSubmittingAction1] = useState(false);
  const [submittingAction2, setSubmittingAction2] = useState(false);
  const [creating, setCreating] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  //
  const defaultValues = autofill ? mockInitialValues : initialValues;
  // const canSubmit = autofill && !submittingAction1 && !submittingAction2;
  const canSubmit = autofill;
  //
  const toggleAutofill = () => setAutofill((prev) => !prev);
  const toggleModal = () => setShowModal((prev) => !prev);
  //
  function handleAfterSave() {
    setShowAlert1(false);
    router.back();
  }
  function handleAfterCreate() {
    setShowAlert2(false);
    router.back();
  }
  //
  async function handleSave() {
    if (!submittingAction1) {
      setSubmittingAction1(true);
      // TODO(etugbeh): integrate api
      await PromiseHelper.mockApiCall();
      setSubmittingAction1(false);
      setAutofill(false);
      setShowAlert1(true);
    }
  }
  async function handleContinue() {
    if (!submittingAction2) {
      setSubmittingAction2(true);
      // TODO(etugbeh): integrate api
      await PromiseHelper.mockApiCall();
      setSubmittingAction2(false);
      setAutofill(false);
      setShowModal(true);
    }
  }
  async function handleCreate() {
    if (!creating) {
      setCreating(true);
      // TODO(etugbeh): integrate api
      await PromiseHelper.mockApiCall();
      setCreating(false);
      setShowModal(false);
      setShowAlert2(true);
    }
  }

  return {
    toggleAutofill,
    defaultValues,
    canSubmit,
    handleSave,
    handleContinue,
    submittingAction1,
    submittingAction2,
    showAlert1,
    handleAfterSave,
    showModal,
    toggleModal,
    handleCreate,
    creating,
    showAlert2,
    handleAfterCreate,
  };
}
