import { useForm, SubmitHandler } from "react-hook-form";

export interface LoginSchema {
  email: string;
  password: string;
}

export function useLogin() {
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>();
  //
  const onSubmit: SubmitHandler<LoginSchema> = async (formData) => {
    console.log("🚀 ~ onSubmit ~ formData:", formData);
  };

  return { control, errors, handleSubmit, onSubmit };
}
