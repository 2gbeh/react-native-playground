import React from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  Pressable,
  Platform,
} from "react-native";
import CTAButton from "@/components/atoms/cta-button";
import { SuccessIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/THEME";
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
    <Modal visible={open} transparent={true} animationType="none">
      <Pressable style={s.container} onPress={onClose}>
        <View style={s.content}>
          <Text style={s.heading}>{heading}</Text>
          <View style={s.body}>
            <SuccessIcon />
            <CTAButton action={onConfirm}>Close</CTAButton>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default React.memo(AlertDialog);