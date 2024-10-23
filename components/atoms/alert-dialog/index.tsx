import React from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  Pressable,
  Platform,
} from "react-native";
import ConfirmationSuccessSvg from "@/assets/svgs/confirmation-success.svg";
import CTAButton from "@/components/atoms/cta-button";
import { alertDialogStyles as s } from "./styles";

interface IProps {
  heading?: string;
  buttonText?: string;
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

const AlertDialog = ({
  heading = "Confirmation",
  buttonText = "Close",
  open = false,
  onClose = () => {},
  onConfirm = () => {},
}: IProps) => {
  return (
    <Modal visible={open} transparent={true} animationType="none">
      <Pressable style={s.container} onPress={onClose}>
        <View style={s.content}>
          <Text style={s.heading}>{heading}</Text>
          <View style={s.body}>
            <ConfirmationSuccessSvg />
            <CTAButton action={onConfirm}>{buttonText}</CTAButton>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default React.memo(AlertDialog);