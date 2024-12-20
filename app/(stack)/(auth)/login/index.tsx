import { Text, View, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
//
import KeyboardWrapper from "@/components/keyboard-wrapper";
import { CtrlEmailInput, CtrlPasswordInput } from "@/components/inputs";
import { FilledSearchField } from "@/components/inputs/filled-search-field";
//
import {
  authStyles as s,
  LoginSchema,
  useLogin,
  Hyperlink,
} from "@/features/auth";
import { useState } from "react";

export default function LoginScreen() {
  const { control, errors, handleSubmit, onSubmit } = useLogin();
  const [text, setText] = useState('')
  console.log("🚀 ~ LoginScreen");
  // RENDER
  return (
    <View style={s.container}>
      <Text style={s.heading}>Welcome back</Text>
      <KeyboardWrapper>
        <View style={s.content}>
          <TextInput
            label="Email"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          {/* <FilledSearchField<LoginSchema>
            label="Enter name"
            name="name"
            control={control}
          /> */}
          {/* <CtrlEmailInput<LoginSchema>
            name="email"
            placeholder="Enter email"
            control={control}
            errors={errors}
          />
          <CtrlPasswordInput<LoginSchema>
            name="password"
            placeholder="Enter password"
            control={control}
            errors={errors}
          /> */}
          <View />
          <Button mode="contained" onPress={handleSubmit(onSubmit)}>
            Login
          </Button>
          <Hyperlink label="Don't have an account?" path="/" />
        </View>
      </KeyboardWrapper>
    </View>
  );
}
