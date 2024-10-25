import { StyleSheet, View, Pressable, ScrollView, Text } from "react-native";
//
import CardWrapper from "@/components/atoms/cards/card-wrapper";
import { CTAButton, EditButton } from "@/components/atoms/buttons";
import Divider from "@/components/atoms/divider";
import Spinner from "@/components/atoms/spinner";
import AlertDialog from "@/components/atoms/alert-dialog";
import {
  AIBubbles,
  AIText,
  AIUnorderedList,
} from "@/components/atoms/all-inputs";
import HistoryPreview from "@/components/molecules/history-preview";
import { COLOR } from "@/constants/THEME";
//
import {
  reviewGeneralOutpatientStyles as s,
  useReviewGeneralOutpatient,
} from "@/features/all-inputs";

export default function ReviewGOPScreen() {
  const {
    submitting,
    showAlert,
    toggleAlert,
    handleSubmit,
    handleAfterSubmit,
  } = useReviewGeneralOutpatient();
  console.log("🚀 ~ ReviewGOPScreen");
  // renders
  return (
    <>
      <ScrollView>
        <View style={s.container}>
          {/* LEFT */}
          <View style={s.left}>
            <CardWrapper>
              <View style={s.left_card_wrapper}>
                {/* HEADER */}
                <View style={s.left_header}>
                  <AIText h1>Clinic note</AIText>
                  <EditButton />
                </View>

                {/* COMPLAINTS */}
                <View style={s.left_section}>
                  <AIText h2>Complaints</AIText>
                  <AIBubbles
                    list={[
                      "Not breathing or gasping",
                      "Difficult breathing",
                      "Cold hands and feet",
                    ]}
                    isStatic
                  />
                </View>
                <Divider />

                {/* HISTORY */}
                <HistoryPreview />
                <Divider />

                {/* EXAM */}
                <View style={s.left_section}>
                  <AIText h2>Examination</AIText>
                  <AIBubbles list={["Pale or bluish colour", "Gasping"]} />
                </View>
                <Divider />

                {/* JUDGEMENT */}
                <View style={s.left_section}>
                  <AIText h2>Clinical judgement</AIText>
                  <AIBubbles
                    list={["Severe condition", "Moderate condition"]}
                  />
                </View>
              </View>
            </CardWrapper>
          </View>

          {/* RIGHT */}
          <View style={s.right}>
            <CardWrapper fill={COLOR.aside}>
              {/* HEADER */}
              <AIText h1>Clinic note sections</AIText>
              <Divider y={[19, 12]} />

              {/* CONTENT */}
              <CardWrapper>
                <View style={s.right_card_wrapper}>
                  <Text style={s.summary}>
                    Review each section carefully to ensure it aligns with your
                    preferences before submitting.
                  </Text>
                  <AIUnorderedList
                    list={[
                      "Complaints",
                      "History",
                      "Examination",
                      "Vital signs",
                      "Clinical judgement",
                      "Actions",
                      "Requested investigations",
                    ]}
                  />
                </View>
              </CardWrapper>

              {/* ACTION */}
              <View style={s.right_footer}>
                <CTAButton action={handleSubmit}>
                  {submitting ? <Spinner /> : "Submit"}
                </CTAButton>
              </View>
            </CardWrapper>
          </View>
        </View>
      </ScrollView>

      {/* MODALS */}
      <AlertDialog
        open={showAlert}
        onClose={toggleAlert}
        onConfirm={handleAfterSubmit}
      >
        Clinic note submitted
      </AlertDialog>
    </>
  );
}
