import { Slot } from "expo-router";
import Loader from "@/components/loader";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function StackLayout() {
  const { verifying } = useAuthGuard();
  console.log("🚀 ~ StackLayout");
  // RENDER
  return (
    <Loader loading={verifying}>
      <Slot />
    </Loader>
  );
}
