import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthService } from "@/store/auth/auth.service";

export interface LoginSchema {
  email: string;
  password: string;
}

export function useLogin() {
  // GLOBAL STATES
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>();
  // LOCAL STATES
  // SYNC METHODS
  // ASYNC METHODS
  const onSubmit: SubmitHandler<LoginSchema> = async (formData) => {
    console.log("🚀 ~ onSubmit ~ formData:", formData);
  };
  // SIDE-EFFECTS

  return { control, errors, handleSubmit, onSubmit };
}
