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
}

export const FilledSearchField = <T extends FieldValues>({
  label,
  name,
  control,
}: IProps<T>): JSX.Element => {
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ FilledSearchField");
  // RENDER
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value, disabled },
          fieldState: { error, invalid, isDirty },
        }) => {
          let iconProps = {
            color:
              COLOR[theme][
                invalid ? "error" : disabled ? "onSurface" : "onSurfaceVariant"
              ],
          };
          //
          return (
            <>
              <View style={sx(theme).container(disabled).leftRightIcon}>
                <View style={sx(theme).wrapper.default}>
                  <SearchIcon {...iconProps} />
                  <View>
                    {/* LABEL */}
                    {isDirty && (
                      <Text
                        style={
                          sx(theme).label(disabled, isDirty, invalid).default
                        }
                      >
                        {label}
                      </Text>
                    )}
                    {/* INPUT */}
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
                {invalid ? (
                  <ExclamationCircleIcon {...iconProps} />
                ) : isDirty ? (
                  <Pressable
                    onPress={() => onChange(value === "" ? "Emanuel" : "")}
                  >
                    <CancelCircleOutlineIcon {...iconProps} />
                  </Pressable>
                ) : (
                  null
                )}
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
                    {error?.message as string}
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
