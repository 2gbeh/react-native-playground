import React from "react";
import { InputModeOptions, View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
//
interface IProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  control: Control<T, any>;
  as?: InputModeOptions;
}

export const FilledTextField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  as = "text",
}: IProps<T>): JSX.Element => {
  console.log("🚀 ~ FilledTextField");
  // RENDER
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value },
        fieldState: { error, invalid },
      }) => (
        <View>
          <TextInput
            inputMode={as}
            label={label}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            autoCapitalize="none"
          />
          {invalid && (
            <HelperText type="error" visible={invalid}>
              {error?.message}
            </HelperText>
          )}
        </View>
      )}
    />
  );
};
