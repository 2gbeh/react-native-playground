export interface ISlice {
  isLoading: boolean;
  status?: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
}

export interface IApiResponse<T> {
  result: null | T;
  targetUrl: null | string;
  success: boolean;
  error: null | {
    code: number;
    message: string;
    details: null;
    validationErrors: null;
  };
  unAuthorizedRequest: boolean;
  __abp: boolean;
}

export type UploadPhotoDto = {
  id: number | string;
  image: string;
};

export interface AvatarSchema {
  url?: string;
  file?: File;
  error?: string;
}
