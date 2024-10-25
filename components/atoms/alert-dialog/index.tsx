import React, { PropsWithChildren } from "react";
import { View, Text } from "react-native";
//
import ModalWrapper from "../modal-wrapper";
import CTAButton from "../buttons/cta-button";
import { CheckCircleOutlineIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/THEME";
//
import { alertDialogStyles as s } from "./styles";

interface IProps extends PropsWithChildren {
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

const AlertDialog = ({
  children,
  open = false,
  onClose = () => {},
  onConfirm = () => {},
}: IProps) => {
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <View style={s.container}>
        <Text style={s.heading}>{children || "ConfirmationS"}</Text>
        <View style={s.success_card}>
          <CheckCircleOutlineIcon color={COLOR.success} strokeWidth={10} />
        </View>
        <CTAButton action={onConfirm}>Close</CTAButton>
      </View>
    </ModalWrapper>
  );
};

export default React.memo(AlertDialog);
