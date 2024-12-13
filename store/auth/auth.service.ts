import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  updateProfile,
  deleteUser,
} from "firebase/auth";
import { auth } from "@/lib/firebase/firebase.config";
import { CreateUserDTO, SignInDTO, UpdateUserDTO } from "./auth.interface";
import { transformResponse } from "@/utils/transformResponse";

export class AuthService {
  static me = () => auth.currentUser;

  static async _createUser({ email, password }: CreateUserDTO) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("🚀 ~ AuthService ~ createUser ~ res:", res);
    } catch (err) {
      console.log("🚀 ~ AuthService ~ createUser ~ err:", err);
    }
  }

  static async signIn({ email, password }: SignInDTO) {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return transformResponse(res, true);
    } catch (err) {
      return transformResponse(err);
    }
  }

  static async signOut() {
    try {
      await signOut(auth);
      return transformResponse(1, true);
    } catch (err) {
      return transformResponse(err);
    }
  }

  static async _verifyEmail(email: string) {
    try {
      auth.useDeviceLanguage();
      const res = await sendEmailVerification(this.me()!);
      console.log("🚀 ~ AuthService ~ verifyEmail ~ res:", res);
    } catch (err) {
      console.log("🚀 ~ AuthService ~ verifyEmail ~ err:", err);
    }
  }

  static async _resetPassword(email: string) {
    try {
      auth.useDeviceLanguage();
      const res = await sendPasswordResetEmail(auth, email);
      console.log("🚀 ~ AuthService ~ resetPassword ~ res:", res);
    } catch (err) {
      console.log("🚀 ~ AuthService ~ resetPassword ~ err:", err);
    }
  }

  static async updateProfile(
    payload: string | UpdateUserDTO,
    type: "profile" | "email" | "password" = "profile"
  ) {
    try {
      let res: unknown;
      switch (type) {
        case "email":
          res = await updateEmail(this.me()!, payload as string);
          break;
        case "password":
          res = await updatePassword(this.me()!, payload as string);
          break;
        default:
          res = await updateProfile(this.me()!, payload as UpdateUserDTO);
      }
      return transformResponse(1, true);
    } catch (err) {
      return transformResponse(err);
    }
  }

  static async _deleteProfile() {
    try {
      const res = await deleteUser(this.me()!);
      console.log("🚀 ~ AuthService ~ deleteProfile ~ res:", res);
    } catch (err) {
      console.log("🚀 ~ AuthService ~ deleteProfile ~ err:", err);
    }
  }
}
