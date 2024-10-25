import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
//
import BackButton from "@/components/atoms/buttons/back-button";
import CentreHomeFilter from "@/components/atoms/filters/centre-home-filter";
import BedSelectorTrigger from "@/components/atoms/bed/bed-selector-trigger";
import AvatarNameBio from "@/components/atoms/avatar-name-bio";

interface IProps {}

const AllInputsFilterBar: React.FC<IProps> = ({}) => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log("🚀 ~ AllInputsFilterBar");
  // renders
  return (
    <View style={s.container}>
      <View style={s.left_content}>
        <BackButton>All inputs</BackButton>
        <CentreHomeFilter
          tabIndex={tabIndex}
          onChange={(i) => setTabIndex(i)}
        />
        <BedSelectorTrigger />
      </View>
      <AvatarNameBio
        name="Blessing Zaria"
        id="MS/1010308"
        age="12 days"
        sex="Female"
      />
    </View>
  );
};

export default React.memo(AllInputsFilterBar);

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left_content: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 32,
  },
});
