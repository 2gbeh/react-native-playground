import { Redirect, Stack } from "expo-router";
//
import Loader from "@/components/atoms/loader";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function AuthLayout() {
  const { verifying, user } = useAuthGuard();
  console.log("🚀 ~ AuthLayout");
  // RENDER
  return (
    <Loader loading={verifying}>
      {user ? (
        <Redirect href="/home" />
      ) : (
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              // backgroundColor: "red",
              paddingHorizontal: 24,
              justifyContent: "center",
            },
          }}
        />
      )}
    </Loader>
  );
}
