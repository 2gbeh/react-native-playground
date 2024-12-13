import { MOCK } from "@/constants/MOCK";
import { AuthService } from "@/store/auth/auth.service";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export function useLogin() {
  // GLOBAL STATES
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    defaultValues,
  });
  // LOCAL STATES
  // SYNC METHODS
  // ASYNC METHODS
  const onSubmit: SubmitHandler<LoginSchema> = async (formData) => {
    await AuthService.signIn(formData);
    console.log("🚀 ~ onSubmit ~ formData:", formData);
  };
  // SIDE-EFFECTS

  return { control, errors, handleSubmit, onSubmit };
}

export interface LoginSchema {
  email: string;
  password: string;
}

const defaultValues = MOCK.auth.formData
  ? {
      email: "dehphantom@yahoo.com",
      password: "RxyPeDhrD74SMNS",
    }
  : {
      email: "",
      password: "",
    };
