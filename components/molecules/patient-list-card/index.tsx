import React from "react";
import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
//
import NameBio from "../../atoms/name-bio";
import InvestigationsSelectorSheet from "../investigations-selector-sheet";
import MedicationSelectorSheet from "../medication-selector-sheet";
import BedNumberBadge from "../../atoms/bed/bed-number-badge";
import { COLOR } from "@/constants/THEME";
import { BusyIcon, EllipsisVIcon } from "@/constants/ICON";
import { IAppointment } from "@/api/getAllAppointments";
//
import { patientListCardStyles as s } from "./styles";
import { patientListCardutils as u } from "./utils";

interface IProps {
  data: IAppointment;
  isBusy?: boolean;
}

const PatientListCard: React.FC<IProps> = ({ data, isBusy }) => {
  const isGeneralOutpatient = data.clinic.id == 1;
  const isAntenatal = data.clinic.id == 2;
  const isLabor = data.clinic.id == 3;
  console.log("🚀 ~ PatientListCard");
  // renders
  return (
    <View style={s.container(isBusy).transform}>
      <View style={s.static.header}>
        {/* HEADING */}
        <View style={s.static.left_content}>
          {isBusy && <BusyIcon color={COLOR.indicator} />}
          <NameBio name={data.name} age={data.age} sex={data.sex} />
          {!isBusy && <BedNumberBadge bedNumber={data.treatment?.bed} />}
        </View>

        {/* MENU */}
        <View style={s.static.right_content}>
          {isGeneralOutpatient ? (
            <InvestigationsSelectorSheet />
          ) : isAntenatal ? (
            <MedicationSelectorSheet />
          ) : null}
          <Pressable>
            <EllipsisVIcon />
          </Pressable>
        </View>
      </View>

      {/* LIST */}
      <Pressable
        onPress={() =>
          router.push(
            isAntenatal
              ? "/all-inputs/antenatal"
              : isLabor
              ? "/all-inputs/labor"
              : "/all-inputs/general-outpatient"
          )
        }
        style={s.static.grid}
      >
        <View style={s.static.grid_item}>
          <Text style={s.static.label}>Patient ID</Text>
          <Text style={s.static.value}>{data.id}</Text>
        </View>
        <View style={s.static.grid_item}>
          <Text style={s.static.label}>Appointment type/Clinic</Text>
          <Text style={s.static.value}>{data.clinic.name}</Text>
        </View>
        <View style={s.static.grid_item}>
          <Text style={s.static.label}>NOK name</Text>
          <Text style={s.static.value}>{data.relations[0].name}</Text>
        </View>
        <View style={s.static.grid_item}>
          <Text style={s.static.label}>Last treatment staff | Role</Text>
          <Text style={s.static.value}>{data.treatment.staff.name}</Text>
        </View>
        <View style={s.static.grid_item}>
          <Text style={s.static.label}>Patient phone number</Text>
          <Text style={s.static.value}>{data.phone}</Text>
        </View>
        <View style={s.static.grid_item}>
          <Text style={s.static.label}>Date & time of appointment</Text>
          <Text style={s.static.value}>
            {u.formatDateTime(
              data.appointment.date + " " + data.appointment.time
            )}
          </Text>
        </View>
        <View style={s.static.grid_item}>
          <Text style={s.static.label}>NOK number</Text>
          <Text style={s.static.value}>{data.relations[0].phone}</Text>
        </View>
        <View style={s.static.grid_item}>
          <Text style={s.static.label}>Last seen</Text>
          <Text style={s.static.value}>
            {u.formatDateTime(data.treatment.updated_at)}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default React.memo(PatientListCard);
