import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { Controller } from "react-hook-form";
import { Dropdown } from "react-native-element-dropdown";
import { COLOR, FONT } from "@/constants/THEME";
//
import BottomSheetWrapper from "../BottomSheetWrapper";
import { formSheetStyles as s } from "./styles";
import { useFormSheet } from "./useFormSheet";
import { userResource } from "@/features/user/core/user.resource";

interface IProps {
  open?: boolean;
  onClose?: () => void;
}
const FormSheet: React.FC<IProps> = ({ open, onClose = () => undefined }) => {
  const { control, errors, handleSubmit, onSubmit, isSubmitting } =
    useFormSheet(onClose);
  console.log("🚀 ~ FormSheet");
  // renders
  return (
    <BottomSheetWrapper open={open} onClose={onClose}>
      <View style={s.static.container}>
        {/* FORM */}
        <View style={s.static.input_wrapper}>
          <Controller
            name="assignee"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              // https://www.npmjs.static.com/package/react-native-element-dropdown
              <Dropdown
                placeholder="Assignee"
                // value={value}
                onChange={({ name }) => onChange(name)}
                onBlur={onBlur}
                data={userResource.getUsers.data}
                valueField="name"
                labelField="name"
                searchField="name"

                disable={false}
                search
                searchPlaceholder="Search"
                // renderInputSearch={}
                mode="modal"
                // renderItem={}
                style={s.static.input}
              />
            )}
          />
          {!!errors.assignee && (
            <Text style={s._}>{errors.assignee.message}</Text>
          )}
        </View>

        {/* INPUT TASK */}
        <View style={s.static.input_wrapper}>
          <Controller
            name="task"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Task"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={s.static.input}
                placeholderTextColor={COLOR.text_muted}
              />
            )}
          />
          {!!errors.task && <Text style={s._}>{errors.task.message}</Text>}
        </View>

        {/* BUTTON */}
        <View style={s.static.footer}>
          <Pressable style={s.button(false).transform} onPress={onClose}>
            <Text style={s.buttonText(false).transform}>Cancel</Text>
          </Pressable>
          <Pressable
            style={s.button().transform}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={s.buttonText().transform}>Save</Text>
          </Pressable>
        </View>
      </View>
    </BottomSheetWrapper>
  );
};

export default React.memo(FormSheet);
