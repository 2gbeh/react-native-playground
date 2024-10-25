import { Stack, Slot } from "expo-router";
//
import AllInputsFilterBar from "@/components/organisms/all-inputs-filter-bar";

export default function AllInputsLayout() {
  return (
    <>
      <AllInputsFilterBar />
      <Slot />
    </>
  );
}
