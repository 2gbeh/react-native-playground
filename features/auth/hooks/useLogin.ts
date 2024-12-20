import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthService } from "@/store/auth/auth.service";
import { mockApiCall } from "@/utils/mockApiCall";
import { MOCK } from "@/constants/MOCK";

export function useLogin() {
  const { control, handleSubmit } = useForm<LoginSchema>({
    defaultValues,
  });
  const [submitting, setSubmitting] = useState(false);
  //
  const onSubmit: SubmitHandler<LoginSchema> = async (formData) => {
    setSubmitting(true);
    await AuthService.signIn(formData);
    setSubmitting(false);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    submitting,
  };
}

export interface LoginSchema {
  name: string;
  email: string;
  password: string;
}

const defaultValues = MOCK.auth.formData
  ? {
      name: "Emanuel",
      email: "dehphantom@yahoo.com",
      password: "RxyPeDhrD74SMNS",
    }
  : {
      name: "",
      email: "",
      password: "",
    };
