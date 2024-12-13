import React from "react";
import { Text, TextInput, View } from "react-native";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
//
import { formStyles as s } from "@/styles/form.styles";

interface IProps<T extends FieldValues> {
  label?: string;
  placeholder?: string;
  name: Path<T>;
  control: Control<T, any>;
  errors: FieldErrors<T>;
}

export const CtrlTextInput = <T extends FieldValues>({
  label,
  placeholder = "",
  name,
  control,
  errors,
}: IProps<T>): JSX.Element => {
  console.log("🚀 ~ CtrlTextInput");
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
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            placeholderTextColor="#555"
            style={s.input}
          />
        )}
      />
      {/* ERROR */}
      {!!errors[name] && (
        <Text style={s.error}>{errors[name] as React.ReactNode}</Text>
      )}
    </View>
  );
};
