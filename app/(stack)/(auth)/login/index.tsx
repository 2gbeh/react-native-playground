import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
//
import Hyperlink from "@/components/hyperlink";
import { useAppSelector } from "@/store/store.config";
import { selectTheme } from "@/store/theme/theme.slice";
//
import { loginStyles, useLogin } from "@/features/auth";

export default function LoginScreen() {
  const sx = loginStyles(useAppSelector(selectTheme));
  const {
    formData,
    showPassword,
    toggleShowPassword,
    handleChange,
    handleSubmit,
    submitting,
  } = useLogin();
  console.log("🚀 ~ LoginScreen");
  // RENDER
  return (
    <View style={sx.container}>
      <View style={sx.header}>
        <Text style={sx.h1}>Log in</Text>
      </View>
      <View style={sx.main}>
        <View>
          <Text style={sx.h2}>Welcome back!</Text>
          <Text style={sx.p}>Login with your Kredi Bank details</Text>
        </View>
        <TextInput
          inputMode="email"
          label="Username"
          value={formData.username}
          onChangeText={(text) => handleChange("username", text)}
          placeholder="Email or Phone number"
        />
        <TextInput
          // inputMode="email"
          label="Password"
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry={showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye" : "eye-off"}
              onPress={toggleShowPassword}
            />
          }
        />
        <Hyperlink href="/" right>
          Forgot Password?
        </Hyperlink>
        <Button mode="contained" onPress={handleSubmit} loading={submitting}>
          Log in
        </Button>
        <View style={sx.nav}>
          <Text style={sx.navLabel}>Have no account yet?</Text>
          <Hyperlink href="/">Create account</Hyperlink>
        </View>
      </View>
    </View>
  );
}
