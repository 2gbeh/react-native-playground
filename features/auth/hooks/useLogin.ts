import { useState } from "react";
import { mockApiCall } from "@/utils/mockApiCall";

export function useLogin() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  //
  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const handleChange = (name: keyof typeof formData, value?: string) =>
    setFormData((prev) => ({ ...prev, [name]: value }));
  //
  async function handleSubmit() {
    setSubmitting(true);
    await mockApiCall();
    setSubmitting(false);
  }

  return {
    formData,
    showPassword,
    toggleShowPassword,
    handleChange,
    handleSubmit,
    submitting,
  };
}
