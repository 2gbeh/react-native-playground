import { UserCredential, User } from "firebase/auth";

export type UserCredentialEntity = UserCredential | null;

export type UserEntity = User | null;

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
