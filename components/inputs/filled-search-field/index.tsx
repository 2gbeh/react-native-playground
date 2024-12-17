import React from "react";
import { Text, TextInput, View, Pressable } from "react-native";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
//
import { useAppSelector } from "@/store/store.config";
import { selectTheme } from "@/store/theme/theme.slice";
import {
  CancelCircleOutlineIcon,
  ExclamationCircleIcon,
  SearchIcon,
} from "@/constants/ICON";
import { COLOR } from "@/constants/THEME";
import { filledTextFieldStyles as sx } from "@/styles/form.styles";

interface IProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  control: Control<T, any>;
  errors: FieldErrors<T>;
}

export const FilledSearchField = <T extends FieldValues>({
  label,
  name,
  control,
  errors,
}: IProps<T>): JSX.Element => {
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ FilledSearchField");
  // RENDER
  return (
    <View>
      {/* LABEL */}
      {/* {!!label && <Text style={sx(theme).label}>{label}</Text>} */}
      {/* INPUT */}
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value, disabled },
          fieldState: { invalid, isDirty, isTouched, isValidating },
        }) => {
          let iconProps = (trailingIcon?: boolean) => ({
            color:
              COLOR[theme][
                trailingIcon && invalid
                  ? "error"
                  : disabled
                  ? "onSurface"
                  : "onSurfaceVariant"
              ],
          });
          //
          return (
            <>
              <View style={sx(theme).container(disabled).leftRightIcon}>
                <View style={sx(theme).wrapper.default}>
                  <SearchIcon {...iconProps()} />
                  <View>
                    {isDirty && (
                      <Text
                        style={
                          sx(theme).label(disabled, isDirty, invalid).default
                        }
                      >
                        {label}
                      </Text>
                    )}
                    <TextInput
                      inputMode="search"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholder={label}
                      autoCapitalize="none"
                      placeholderTextColor={COLOR[theme].onSurfaceVariant}
                      cursorColor={COLOR[theme][invalid ? "error" : "primary"]}
                      style={sx(theme).input.default}
                    />
                  </View>
                </View>
                <Pressable
                  onPress={() => onChange(value === "" ? "Emanuel" : "")}
                >
                  <CancelCircleOutlineIcon {...iconProps(true)} />
                </Pressable>
              </View>
              {/* INDICATOR */}
              <View
                style={
                  sx(theme).activeIndicator(disabled, isDirty, invalid).default
                }
              />
              {/* ERROR */}
              {invalid && (
                <View style={sx(theme).errorWrapper.default}>
                  <Text style={sx(theme).error(disabled).default}>
                    {errors[name]?.message as string}
                  </Text>
                </View>
              )}
            </>
          );
        }}
      />
    </View>
  );
};
