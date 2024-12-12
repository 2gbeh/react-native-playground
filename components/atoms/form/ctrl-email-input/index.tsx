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

export const CtrlEmailInput = <T extends FieldValues>({
  label,
  placeholder = "",
  name,
  control,
  errors,
}: IProps<T>): JSX.Element => {
  console.log("🚀 ~ CtrlEmailInput");
  // renders
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
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={s.input}
            placeholderTextColor="#555"
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
