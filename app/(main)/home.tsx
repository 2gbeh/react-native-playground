import { StyleSheet, View, Text } from "react-native";
import Tent from "@/components/atoms/tent";
import Avatar from "@/components/atoms/avatar";
import { AuthService } from "@/store/auth/auth.service";

export default function HomeScreen() {
  const me = AuthService.me();
  console.log("🚀 ~ HomeScreen", me);
  // RENDER
  return (
    <Tent>
      <View style={{ rowGap: 16, alignItems: "center" }}>
        <Avatar src={me?.photoURL} />
        <Text>{me?.email}</Text>
      </View>
    </Tent>
  );
}
