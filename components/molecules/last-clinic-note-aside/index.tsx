import React from "react";
import { View } from "react-native";
//
import Divider from "@/components/atoms/divider";
import CardWrapper from "@/components/atoms/cards/card-wrapper";
import {
  AIManifestNote,
  AITitleBar,
  AIPagination,
  AIOrderedList,
  AITranscripts,
} from "@/components/atoms/all-inputs";
import { FONT, COLOR } from "@/constants/THEME";
//
import { lastClinicNoteAsideStyles as s } from "./styles";

interface IProps {}

const LastClinicNoteAside: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ LastClinicNoteAside");
  // renders
  return (
    <CardWrapper fill={COLOR.aside}>
      <View style={s.container}>
        <AITitleBar title="Last clinic note" />
        <View style={s.content}>
          <AIPagination />
          <AIManifestNote />
          <CardWrapper>
            <AIOrderedList
              list={[
                "Not breathing or gasping",
                "Difficult breathing",
                "Cold hands and feet",
              ]}
            />
            <Divider y={16} />
            <AITranscripts
              messages={[
                {
                  time: "00:00",
                  message: "Good morning, how are you feeling?",
                },
                {
                  time: "00:20",
                  message:
                    "Thank you! I'm feeling a mix of emotions—excited, exhausted, and a little overwhelmed. But overall, I'm doing okay.",
                },
                {
                  time: "00:25",
                  message:
                    "That's completely normal. Adjusting to life with a newborn can be challenging. I'm here to support you and answer any questions you might have. How is your baby doing so far?",
                },
              ]}
            />
          </CardWrapper>
        </View>
      </View>
    </CardWrapper>
  );
};

export default React.memo(LastClinicNoteAside);
