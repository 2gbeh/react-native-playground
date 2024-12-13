import { Redirect } from "expo-router";

export default function LoginRedirectScreen() {
  console.log("🚀 ~ LoginRedirectScreen");
  // renders
  return <Redirect href="/" />;
}
