import React, { PropsWithChildren } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import { COLOR } from "@/constants/THEME";
import { CancelIcon } from "@/constants/ICON";
//
import { modalWrapperStyles as s } from "./styles";

interface IProps extends PropsWithChildren {
  heading?: string;
  open?: boolean;
  onClose?: () => void;
  forceClose?: boolean;
}

const ModalWrapper: React.FC<IProps> = ({
  children,
  heading,
  open,
  onClose = () => undefined,
  forceClose = true,
}) => {
  console.log("🚀 ~ ModalWrapper");
  // renders
  return (
    <Modal
      visible={open}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        style={s.overlay}
        onPress={() => (forceClose ? undefined : onClose())}
      >
        <View style={s.container}>
          {!!heading && (
            <View style={s.header}>
              <Text style={s.heading}>{heading}</Text>
              <Pressable style={s.cancel} onPress={onClose}>
                <CancelIcon color={COLOR.primary_dark} />
              </Pressable>
            </View>
          )}
          <View style={s.content}>{children}</View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default React.memo(ModalWrapper);
