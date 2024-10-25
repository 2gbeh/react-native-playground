import { ScrollView, View } from "react-native";
//
import ComplaintsAccordion from "@/components/molecules/complaints-accordion";
import HistoryAccordion from "@/components/molecules/history-accordion";
import ExaminationAccordion from "@/components/molecules/examination-accordion";
import VitalSignsAccordion from "@/components/molecules/vital-signs-accordion";
import ClinicalJudgementAccordion from "@/components/molecules/clinical-judgement-accordion";
import LastClinicNoteAside from "@/components/molecules/last-clinic-note-aside";
import AlertDialog from "@/components/atoms/alert-dialog";
import Spinner from "@/components/atoms/spinner";
import { CTAButton, AccentButton } from "@/components/atoms/buttons";
//
import {
  generalOutpatientStyles as s,
  useGeneralOutpatient,
} from "@/features/all-inputs";

export default function GeneralOutpatientScreen() {
  const {
    saving,
    showAlert,
    toggleAlert,
    handleSave,
    handleAfterSave,
    handleReview,
  } = useGeneralOutpatient();
  console.log("🚀 ~ GeneralOutpatientScreen");
  // renders
  return (
    <>
      <ScrollView>
        <View style={s.container}>
          <View style={s.left}>
            <ComplaintsAccordion />
            <HistoryAccordion />
            <ExaminationAccordion />
            <VitalSignsAccordion />
            <ClinicalJudgementAccordion />
          </View>
          <View style={s.right}>
            <LastClinicNoteAside />
          </View>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={s.footer}>
        <AccentButton>Next Appointment</AccentButton>
        <AccentButton selector>Admin | Discharge</AccentButton>
        <CTAButton variant="outline" action={handleSave} minWidth={145}>
          {saving ? <Spinner primary /> : "Save and close"}
        </CTAButton>
        <CTAButton action={handleReview}>Review and save</CTAButton>
      </View>

      {/* MODALS */}
      <AlertDialog
        open={showAlert}
        onClose={toggleAlert}
        onConfirm={handleAfterSave}
      >
        Clinic note submitted
      </AlertDialog>
    </>
  );
}
