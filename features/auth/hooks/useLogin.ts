import { useForm, SubmitHandler } from "react-hook-form";
import { MOCK } from "@/constants/MOCK";
import { AuthService } from "@/store/auth/auth.service";
import { useState } from "react";

export function useLogin() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    defaultValues,
  });
  const [submitting, setSubmitting] = useState(false);
  //
  const onSubmit: SubmitHandler<LoginSchema> = async (formData) => {
    setSubmitting(true);
    await AuthService.signIn(formData);
    setSubmitting(false);
  };

  return { control, errors, handleSubmit, onSubmit, submitting };
}

export interface LoginSchema {
  name: string;
  email: string;
  password: string;
}

const defaultValues = !MOCK.auth.formData
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
