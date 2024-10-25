import { ScrollView, View } from "react-native";
//
import Complaints from "@/components/molecules/complaints";
import History from "@/components/molecules/history";
import Examination from "@/components/molecules/examination";
import VitalSigns from "@/components/molecules/vital-signs";
import ClinicalJudgement from "@/components/molecules/clinical-judgement";
import LastClinicNote from "@/components/molecules/last-clinic-note";
import { CTAButton, AccentButton } from "@/components/atoms/buttons";
//
import {
  generalOutpatientStyles as s,
  useGeneralOutpatient,
} from "@/features/all-inputs/general-outpatient";
import AlertDialog from "@/components/atoms/alert-dialog";
import Spinner from "@/components/atoms/spinner";

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
            <Complaints />
            <History />
            <Examination />
            <VitalSigns />
            <ClinicalJudgement />
          </View>
          <View style={s.right}>
            <LastClinicNote />
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
