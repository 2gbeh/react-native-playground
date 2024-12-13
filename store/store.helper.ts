import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export class StoreHelper {
  static isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return typeof error === "object" && error != null && "status" in error;
  }

  static isErrorWithMessage(error: unknown): error is { message: string } {
    return (
      typeof error === "object" &&
      error != null &&
      "message" in error &&
      typeof (error as any).message === "string"
    );
  }

  static fileUploadQuery(url: string, value: string, name = 'image') {
    const body = new FormData();
    body.append(name, value);
    return {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      url,
      body,
    };
  }
}
