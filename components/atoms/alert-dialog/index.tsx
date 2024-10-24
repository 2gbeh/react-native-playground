import React from "react";
import { View, Text, Pressable } from "react-native";
import ModalWrapper from "../modal-wrapper";
import CTAButton from "@/components/atoms/cta-button";
import { SuccessIcon } from "@/constants/ICON";
//
import { alertDialogStyles as s } from "./styles";

interface IProps {
  heading?: string;
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

const AlertDialog = ({
  heading = "Confirmation",
  open = false,
  onClose = () => {},
  onConfirm = () => {},
}: IProps) => {
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <View style={s.container}>
        <Text style={s.heading}>{heading}</Text>
        <View style={s.body}>
          <SuccessIcon />
          <CTAButton action={onConfirm}>Close</CTAButton>
        </View>
      </View>
    </ModalWrapper>
  );
};

export default React.memo(AlertDialog);
