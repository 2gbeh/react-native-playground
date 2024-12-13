import React, { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

interface IProps extends PropsWithChildren {}

const KeyboardWrapper: React.FC<IProps> = ({ children }) => {
  console.log("🚀 ~ KeyboardWrapper");
  // renders
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={60}
      style={{ flex: 1 }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default React.memo(KeyboardWrapper);
