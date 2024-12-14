import { StyleSheet, View, Text, Image } from "react-native";
import Tent from "@/components/tent";
import Avatar from "@/components/avatar";
import { AuthService } from "@/store/auth/auth.service";

export default function HomeScreen() {
  const me = AuthService.me();
  console.log("🚀 ~ HomeScreen", me);
  // RENDER
  return (
    <Tent>
      <View
        style={{
          rowGap: 16,
          alignItems: "center",
          width: 480,
        }}
      >
        <Avatar src={me?.photoURL} />
        <Text>{me?.email}</Text>
      </View>
    </Tent>
  );
}
