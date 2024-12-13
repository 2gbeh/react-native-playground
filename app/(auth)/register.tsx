import { Text, View, Button, Alert } from "react-native";
//
import {
  CtrlTextInput,
  CtrlEmailInput,
  CtrlPasswordInput,
} from "@/components/atoms/form";
//
import {
  authStyles as s,
  RegisterSchema,
  Navigation,
  useRegister,
} from "@/features/auth";

export default function LoginScreen() {
  const { control, errors, handleSubmit, onSubmit } = useRegister();
  console.log("🚀 ~ LoginScreen");
  // RENDER
  return (
    <View style={s.container}>
      <Text style={s.heading}>Create account</Text>
      <View style={s.content}>
        <CtrlTextInput<RegisterSchema>
          name="name"
          placeholder="Enter name"
          control={control}
          errors={errors}
        />
        <CtrlEmailInput<RegisterSchema>
          name="email"
          placeholder="Enter email"
          control={control}
          errors={errors}
        />
        <CtrlPasswordInput<RegisterSchema>
          name="password"
          placeholder="Enter password"
          control={control}
          errors={errors}
        />
        <View />
        <Button title="Register" onPress={handleSubmit(onSubmit)} />
        <Navigation label="Already have an account?" path="/" />
      </View>
    </View>
  );
}
