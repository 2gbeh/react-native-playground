import { User, UserCredential } from "firebase/auth";

export type CurrentUserEntity = User | null;

export type UserCredentialEntity = UserCredential | null;

export interface CreateUserDTO {
  email: string;
  password: string;
}

export interface SignInDTO {
  email: string;
  password: string;
}

export interface UpdateUserDTO {
  displayName?: string;
  photoURL?: string;
}
