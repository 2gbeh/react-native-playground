import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
//
import BackButton from "@/components/atoms/back-button";
import CenterHomeFilter from "@/components/atoms/center-home-filter";
import BedSelector from "@/components/atoms/bed-selector";
import AvatarNameBio from "@/components/atoms/avatar-name-bio";

interface IProps {}

const AllInputsMenuBar: React.FC<IProps> = ({}) => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log("🚀 ~ AllInputsMenuBar");
  // renders
  return (
    <View style={s.container}>
      <View style={s.left_content}>
        <BackButton>All inputs</BackButton>
        <CenterHomeFilter
          tabIndex={tabIndex}
          onChange={(i) => setTabIndex(i)}
        />
        <BedSelector />
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

export default React.memo(AllInputsMenuBar);

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
