import React from "react";
import { View, Text, Pressable } from "react-native";
import ModalWrapper from "../modal-wrapper";
import CTAButton from "@/components/atoms/cta-button";
import { CheckCircleOutlineIcon } from "@/constants/ICON";
//
import { alertDialogStyles as s } from "./styles";
import { COLOR } from "@/constants/THEME";

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
        <View style={s.success_card}>
          <CheckCircleOutlineIcon color={COLOR.success} strokeWidth={10} />
        </View>
        <CTAButton action={onConfirm}>Close</CTAButton>
      </View>
    </ModalWrapper>
  );
};

export default React.memo(AlertDialog);
