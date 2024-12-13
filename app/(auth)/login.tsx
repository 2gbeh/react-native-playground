import { Redirect } from "expo-router";

export default function LoginRedirectScreen() {
  console.log("🚀 ~ LoginRedirectScreen");
  // RENDER
  return <Redirect href="/" />;
}
