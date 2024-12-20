import { View, Text } from "react-native";
import { Button } from "react-native-paper";
//
import Hyperlink from "@/components/hyperlink";
import { useAppSelector } from "@/store/store.config";
import { selectTheme } from "@/store/theme/theme.slice";
//
import {
  loginStyles,
  LoginSchema,
  useLogin,
  Header,
  Legend,
  Footer,
} from "@/features/auth";
import {
  FilledTextField,
  FilledPasswordField,
} from "@/components/form-controls";

export default function LoginScreen() {
  const sx = loginStyles(useAppSelector(selectTheme));
  const { control, handleSubmit, onSubmit, submitting } = useLogin();
  console.log("🚀 ~ LoginScreen");
  // RENDER
  return (
    <View style={sx.container}>
      <Header heading="Log in" />
      <View style={sx.main}>
        <Legend
          title="Welcome back!"
          subtitle="Enter your log in details to continue"
        />
        <FilledTextField<LoginSchema>
          name="email"
          label="Username"
          placeholder="Email or Phone number"
          control={control}
          as="email"
        />
        <FilledPasswordField<LoginSchema>
          name="password"
          label="Password"
          placeholder="Enter password"
          control={control}
        />
        <Hyperlink href="/" right>
          Forgot password?
        </Hyperlink>
        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          loading={submitting}
        >
          Log in
        </Button>
        <Footer title="Don't have an account?" subtitle="Create account" />
      </View>
    </View>
  );
}
