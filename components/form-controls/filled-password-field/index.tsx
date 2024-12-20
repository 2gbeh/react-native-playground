import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
//
interface IProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  control: Control<T, any>;
}

export const FilledPasswordField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
}: IProps<T>): JSX.Element => {
  const [showPassword, setShowPassword] = useState(true);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  console.log("🚀 ~ FilledPasswordField");
  // RENDER
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, value },
          fieldState: { error, invalid },
        }) => (
          <View style={{}}>
            <TextInput
              inputMode="email"
              label={label}
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
              secureTextEntry={showPassword}
              autoCapitalize="none"
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye" : "eye-off"}
                  onPress={toggleShowPassword}
                />
              }
            />
            <HelperText type="error" visible={invalid}>
              {error?.message}
            </HelperText>
          </View>
        )}
      />
    </View>
  );
};
