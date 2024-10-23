import React, { PropsWithChildren } from "react";
import { View, Text } from "react-native";
// 
import { noContentCardStyles as s } from "./styles";

interface IProps extends PropsWithChildren {
  icon: React.ReactNode;
  title: string;
  summary: string;
}

const NoContentCard: React.FC<IProps> = ({
  children,
  icon,
  title,
  summary,
}) => {
  console.log("🚀 ~ NoContentCard");
  // renders
  return (
    <View style={s.container}>
      <View style={s.circle}>
        <View style={s.inner_circle}>{icon}</View>
      </View>
      <View style={s.article}>
        <Text style={s.h1}>{title}</Text>
        <Text style={s.p}>{summary}</Text>
      </View>
      <View style={s._}>{children}</View>
    </View>
  );
};

export default React.memo(NoContentCard);