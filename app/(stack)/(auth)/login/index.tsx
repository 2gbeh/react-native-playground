import { View, Text } from "react-native";
import { Button } from "react-native-paper";
//
import Hyperlink from "@/components/hyperlink";
import {
  FilledTextField,
  FilledPasswordField,
} from "@/components/form-controls";
import { useAppSelector } from "@/store/store.config";
import { selectTheme } from "@/store/theme/theme.slice";
//
import {
  loginStyles,
  LoginSchemaType,
  useLogin,
  Header,
  Legend,
  Footer,
} from "@/features/auth";

export default function LoginScreen() {
  const sx = loginStyles(useAppSelector(selectTheme));
  const { control, handleSubmit, onSubmit, submitting } = useLogin();
  console.log("🚀 ~ LoginScreen");
  // RENDER
  return (
    <View style={sx.container}>
      <Header heading="Log in" />
      <View style={sx.content}>
        <Legend
          title="Welcome back!"
          subtitle="Enter your log in details to continue"
        />
        <FilledTextField<LoginSchemaType>
          name="email"
          label="Username"
          placeholder="Email or telephone"
          control={control}
          as="email"
        />
        <FilledPasswordField<LoginSchemaType>
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
