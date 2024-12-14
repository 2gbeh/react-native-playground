import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { EyeOffIcon, EyeOnIcon } from "@/constants/ICON";
//
import { formStyles as s } from "@/styles/form.styles";

interface IProps<T extends FieldValues> {
  label?: string;
  placeholder?: string;
  name: Path<T>;
  control: Control<T, any>;
  errors: FieldErrors<T>;
}

export const CtrlPasswordInput = <T extends FieldValues>({
  label,
  placeholder = "",
  name,
  control,
  errors,
}: IProps<T>): JSX.Element => {
  const iconProps = { color: "#888", size: 24 };
  const [masked, setMasked] = useState(true);
  const toggleMasked = () => setMasked((prev) => !prev);
  console.log("🚀 ~ CtrlPasswordInput");
  // RENDER
  return (
    <View style={s.form_control}>
      {/* LABEL */}
      {!!label && <Text style={s.label}>{label}</Text>}
      {/* INPUT */}
      <Controller
        control={control}
        name={name}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={s.password_wrapper}>
            <TextInput
              inputMode="email" // show special-chars keyword
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor="#888"
              style={s.input}
              secureTextEntry={masked}
            />
            <Pressable style={s.password_icon} onPress={toggleMasked}>
              {masked ? (
                <EyeOnIcon {...iconProps} />
              ) : (
                <EyeOffIcon {...iconProps} />
              )}
            </Pressable>
          </View>
        )}
      />
      {/* ERROR */}
      {!!errors[name] && (
        <Text style={s.error}>{errors[name] as React.ReactNode}</Text>
      )}
    </View>
  );
};
