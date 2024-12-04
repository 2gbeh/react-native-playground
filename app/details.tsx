import React from "react";
import { Platform } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Tent from "@/components/Tent";

export default function DetailsScreen() {
  const isPresented = router.canGoBack();
  console.log("🚀 ~ DetailsScreen ~ isPresented:", isPresented);
  return (
    <>
      <Tent>DetailsScreen</Tent>
      <StatusBar style={Platform.OS === "ios" ? "light" : "dark"} />
    </>
  );
}
