import React from "react";
import { StyleSheet, View } from "react-native";
//
import { AIParagraph, AIText } from "@/components/atoms/all-inputs";

interface IProps {}

const HistoryPreview = () => {
  console.log("🚀 ~ HistoryPreview");
  // renders
  return (
    <View style={s.container}>
      <AIText h2>History</AIText>
      <View style={s.content}>
        <AIParagraph>Good morning, how are you feeling?</AIParagraph>
        <AIParagraph>
          Thank you! I'm feeling a mix of emotions—excited, exhausted, and a
          little overwhelmed. But overall, I'm doing okay.
        </AIParagraph>
        <AIParagraph>
          That's completely normal. Adjusting to life with a newborn can be
          challenging. I'm here to support you and answer any questions you
          might have. How is your baby doing so far?
        </AIParagraph>
        <AIParagraph>
          She's doing well, I think. She seems to be eating and sleeping
          regularly. But I have a few concerns. Firstly, she seems to have a lot
          of hiccups. Is that normal?
        </AIParagraph>
        <AIParagraph>
          Hiccups are quite common in newborns, so there's usually nothing to
          worry about. It's just their diaphragm muscles practicing and getting
          stronger. They tend to outgrow it in a few months. Just make sure
          she's comfortable and burp her gently after feeds.
        </AIParagraph>
        <AIParagraph>
          That's a relief to hear. I've also noticed some dry skin patches on
          her face. Is that something I should be concerned about?
        </AIParagraph>
        <AIParagraph>
          Dry skin is common in newborns, especially on the face and scalp. It's
          usually harmless and often goes away on its own. You can keep her skin
          moisturized by applying a mild baby lotion or using a baby-friendly
          moisturizer. If the dryness persists or worsens, let me know, and we
          can explore further options.
        </AIParagraph>
        <AIParagraph>
          Okay, I'll try the baby lotion and keep an eye on it. Another thing is
          that her umbilical cord stump hasn't fallen off yet, and it looks a
          bit red. Should I be worried?
        </AIParagraph>
        <AIParagraph>
          It's normal for the umbilical cord stump to take about one to three
          weeks to fall off. Some redness around the stump is also common, but
          if it becomes swollen, starts oozing pus, or has a foul odor, it could
          be a sign of infection. Keep the area clean and dry, and avoid
          covering it with tight diapers. If you notice any concerning symptoms,
          please let me know.
        </AIParagraph>
        <AIParagraph>
          I'll make sure to monitor it closely. One last thing—my baby seems to
          sneeze a lot. Is that normal, or could she be catching a cold?
        </AIParagraph>
      </View>
    </View>
  );
};

export default React.memo(HistoryPreview);

const s = StyleSheet.create({
  _: {},
  container: {
    rowGap: 12,
  },
  content: {
    rowGap: 12,
  },
});
