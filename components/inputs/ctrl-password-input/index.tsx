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

export const CtrlPasswordInput = <T extends FieldValues>({
  label,
  placeholder = "",
  name,
  control,
  errors,
}: IProps<T>): JSX.Element => {
  const iconProps = { color: "#888", size: 24 };
  const theme = useAppSelector(selectTheme);
  const [masked, setMasked] = useState(true);
  const toggleMasked = () => setMasked((prev) => !prev);
  console.log("🚀 ~ CtrlPasswordInput");
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
          <View style={sx(theme).passwordWrapper}>
            <TextInput
              inputMode="email" // show special-chars keyword
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor="#888"
              style={sx(theme).input}
              secureTextEntry={masked}
            />
            <Pressable style={sx(theme).passwordIcon} onPress={toggleMasked}>
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
        <Text style={sx(theme).error}>{errors[name] as React.ReactNode}</Text>
      )}
    </View>
  );
};
