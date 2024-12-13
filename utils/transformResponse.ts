import { FirebaseError } from "firebase/app";

export const transformResponse = (response: unknown, responseOK = false) => {
  return responseOK
    ? { data: response }
    : { error: response instanceof FirebaseError ? response.code : response };
};
