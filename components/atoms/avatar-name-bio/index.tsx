import React from "react";
import { View, Text } from "react-native";
//
import Avatar from "../avatar";
import { avatarNameBioStyles as s } from "./styles";

interface IProps {
  src?: null | string;
  name: string;
  id?: number | string;
  sex: string;
  age: string;
}

const AvatarNameBio: React.FC<IProps> = ({ src, name, id = "", age, sex }) => {
  console.log("🚀 ~ AvatarNameBio");
  // renders
  return (
    <View style={s.container}>
      <View style={s.left}>
        <Avatar src={src} size={36} />
        <Text style={s.text}>{name}</Text>
      </View>
      <View style={s.right}>
        <Text style={s.text}>{id}</Text>
        <Text style={s.text}>{age}</Text>
        <Text style={s.text}>{sex}</Text>
      </View>
    </View>
  );
};

export default React.memo(AvatarNameBio);
