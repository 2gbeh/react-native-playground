import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PromiseHelper } from "@/utils/helpers/common/promise.helper";
import { snackbar } from "@/lib/snackbar";
//
import {
  createPostDefaultValues,
  CreatePostSchema,
  createPostSchema,
} from "../../core/post.schema";

export function useFormSheet(onClose: Function) {
  const [defaultValues, setDefaultValues] = useState(createPostDefaultValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  //
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues,
  });
  //
  const onSubmit: SubmitHandler<CreatePostSchema> = async (formData) => {
    setIsSubmitting(true);
    await PromiseHelper.mockApiCall();
    console.log("🚀 ~ handleSubmit ~ formData:", formData);
    setIsSubmitting(false);
    // reset();
    // onClose();
    snackbar.toast("Task added successfully");
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    isSubmitting,
  };
}
