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
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { formStyles as sx } from "@/styles/form.styles";

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
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ CtrlTextInput");
  // RENDER
  return (
    <View style={sx(theme).formControl}>
      {/* LABEL */}
      {!!label && <Text style={sx(theme).label}>{label}</Text>}
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
            placeholderTextColor="#888"
            style={sx(theme).input}
          />
        )}
      />
      {/* ERROR */}
      {!!errors[name] && (
        <Text style={sx(theme).error}>{errors[name] as React.ReactNode}</Text>
      )}
    </View>
  );
};