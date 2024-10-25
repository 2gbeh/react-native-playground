import React from "react";
import { Text, View } from "react-native";
//
import AIText from "../ai-text";
// 
import { aiManifestNoteStyles as s } from "./styles";

interface IProps {}

const AIManifestNote: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ AIManifestNote");
  // renders
  return (
    <View style={s.container}>
      <AIText h3>General/Outpatient</AIText>
      <View style={s.grid}>
        <View style={s.grid_item}>
          <Text style={s.label}>Date</Text>
          <Text style={s.value}>12 Oct 2023</Text>
        </View>
        <View style={s.grid_item}>
          <Text style={s.label}>Time</Text>
          <Text style={s.value}>05:00 PM</Text>
        </View>
        <View style={s.grid_item}>
          <Text style={s.label}>Treating staff</Text>
          <Text style={s.value}>Aikpokpodion Endurance</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(AIManifestNote);
