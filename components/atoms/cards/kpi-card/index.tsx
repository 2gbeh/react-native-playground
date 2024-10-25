import React from "react";
import { View, Text } from "react-native";
// 
import { kpiCardStyles as s } from "./styles";

interface IProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

const KPICard: React.FC<IProps> = ({ label, value, icon }) => {
  console.log("🚀 ~ KPICard");
  // renders
  return (
    <View style={s.container}>
      <View style={s.top}>
        <Text style={s.label}>{label}</Text>
        <View style={s.icon}>{icon}</View>
      </View>
      <Text style={s.value}>{value}</Text>
    </View>
  );
};

export default React.memo(KPICard);