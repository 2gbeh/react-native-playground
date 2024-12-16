import { Text, View, Button, Alert } from "react-native";
//
import KeyboardWrapper from "@/components/keyboard-wrapper";
import { CtrlEmailInput, CtrlPasswordInput } from "@/components/inputs";
//
import {
  authStyles as s,
  LoginSchema,
  useLogin,
  Hyperlink,
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
          <Hyperlink label="Don't have an account?" path="/" />
        </View>
      </KeyboardWrapper>
    </View>
  );
}
