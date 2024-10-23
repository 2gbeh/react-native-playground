import React from "react";
import { View, Text, Pressable } from "react-native";
//
import NameAgeSex from "../../atoms/name-age-sex";
import InvestigationsSelectorSheet from "../investigations-selector-sheet";
import MedicationSelectorSheet from "../medication-selector-sheet";
import BedNumberBadge from "../../atoms/bed-number-badge";
import { COLOR } from "@/features/phc-tab/constants/THEME";
import { BusyIcon, EllipsisVIcon } from "@/features/phc-tab/constants/ICON";
import { IAppointment } from "@/features/phc-tab/data/getAllAppointments";
//
import { patientListCardStyles as s } from "./styles";
import { patientListCardutils as u } from "./utils";

interface IProps {
  data: IAppointment;
  isBusy?: boolean;
}

const PatientListCard: React.FC<IProps> = ({ data, isBusy }) => {
  console.log("🚀 ~ PatientListCard");
  // renders
  return (
    <View style={s.container(isBusy).transform}>
      <View style={s.static.header}>
        {/* HEADING */}
        <View style={s.static.left_content}>
          {isBusy && <BusyIcon color={COLOR.indicator} />}
          <NameAgeSex name={data.name} age={data.age} sex={data.sex} />
          {!isBusy && <BedNumberBadge bedNumber={data.treatment?.bed} />}
        </View>

        {/* MENU */}
        <View style={s.static.right_content}>
          {data.clinic.id == 1 ? (
            <InvestigationsSelectorSheet />
          ) : data.clinic.id == 2 ? (
            <MedicationSelectorSheet />
          ) : null}
          <Pressable style={{ cursor: "pointer" }}>
            <EllipsisVIcon />
          </Pressable>
        </View>
      </View>

      {/* LIST */}
      <View style={s.static.grid}>
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
      </View>
    </View>
  );
};

export default React.memo(PatientListCard);
