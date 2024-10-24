import { Stack, Slot } from "expo-router";
// 
import AllInputsMenuBar from "@/components/organisms/all-inputs-menu-bar";

export default function AllInputsLayout() {
  return (
    <>
      <AllInputsMenuBar />
      <Slot />
    </>
  );
}
