import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Link } from "expo-router";
//
type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterScreen() {
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    console.log("🚀 ~ onSubmit ~ formData:", formData);
  };
  // const onSubmit = async (formData) => {
  //   console.log(formData);
  // };
  console.log("🚀 ~ RegisterScreen");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.heading}>Create account</Text>
      <View style={s.form}>
        <View style={s.form_control}>
          <Text style={s.label}>Name</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={s.input}
                placeholderTextColor="#555"
              />
            )}
            name="name"
          />
          {errors.name && <Text style={s.error}>This is required.</Text>}
        </View>
        <View style={s.form_control}>
          <Text style={s.label}>Email</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={s.input}
                placeholderTextColor="#555"
              />
            )}
            name="email"
          />
          {errors.email && <Text style={s.error}>This is required.</Text>}
        </View>
        <View style={s.form_control}>
          <Text style={s.label}>Password</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={s.input}
                placeholderTextColor="#555"
              />
            )}
            name="password"
          />
          {errors.email && <Text style={s.error}>This is required.</Text>}
        </View>
        <View />
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
        <View style={s.link_wrapper}>
          <Link style={s.link} href="/">
            Already have an account?
          </Link>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    // backgroundColor: "red",
  },
  heading: {
    color: "#fff",
    marginBottom: 24,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  form: {
    rowGap: 16,
  },
  form_control: {
    rowGap: 8,
  },
  label: {
    color: "#ddd",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    height: 40,
  },
  error: {
    color: "red",
  },
  link_wrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
});
