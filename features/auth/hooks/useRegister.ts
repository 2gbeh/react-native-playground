import { useForm, SubmitHandler } from "react-hook-form";

export interface RegisterSchema {
  name: string;
  email: string;
  password: string;
}

export function useRegister() {
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>();
  //
  const onSubmit: SubmitHandler<RegisterSchema> = async (formData) => {
    console.log("🚀 ~ onSubmit ~ formData:", formData);
  };

  return { control, errors, handleSubmit, onSubmit };
}
