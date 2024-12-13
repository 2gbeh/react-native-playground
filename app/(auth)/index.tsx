import { Text, View, Button, Alert } from "react-native";
//
import KeyboardWrapper from "@/components/atoms/keyboard-wrapper";
import { CtrlEmailInput, CtrlPasswordInput } from "@/components/atoms/form";
//
import {
  authStyles as s,
  LoginSchema,
  useLogin,
  Navigation,
} from "@/features/auth";

export default function LoginScreen() {
  const { control, errors, handleSubmit, onSubmit } = useLogin();
  console.log("🚀 ~ LoginScreen");
  // RENDER
  return (
    <View style={s.container}>
      <Text style={s.heading}>Welcome back</Text>
      <KeyboardWrapper>
        <View style={s.content}>
          <CtrlEmailInput<LoginSchema>
            name="email"
            placeholder="Enter name"
            control={control}
            errors={errors}
          />
          <CtrlPasswordInput<LoginSchema>
            name="password"
            placeholder="Enter password"
            control={control}
            errors={errors}
          />
          <View />
          <Button title="Login" onPress={handleSubmit(onSubmit)} />
          <Navigation label="Don't have an account?" path="/register" />
        </View>
      </KeyboardWrapper>
    </View>
  );
}
