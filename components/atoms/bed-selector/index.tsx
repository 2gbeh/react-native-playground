import React from "react";
import { Pressable } from "react-native";
import { BedIcon, EditIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";

interface IProps {
  handleClick?: () => void;
}

const BedSelector: React.FC<IProps> = ({ handleClick = () => undefined }) => {
  console.log("🚀 ~ BedSelector");
  // renders
  return (
    <Pressable
      onPress={handleClick}
      style={{
        backgroundColor: COLOR.white,
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        maxHeight: 38,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
      }}
    >
      <BedIcon color={COLOR.text_200} />
      <EditIcon color={COLOR.primary} />
    </Pressable>
  );
};

export default React.memo(BedSelector);
