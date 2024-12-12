import {
  Image,
  StyleSheet,
  Platform,
  Pressable,
  View,
  FlatList,
  Text,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { AccountService } from "@/store/services/accounts/account.service";
import { useEffect, useState } from "react";
import { AccountEntity } from "@/store/services/accounts/account.interface";

export default function HomeScreen() {
  const [data, setData] = useState<AccountEntity[]>([]);
  useEffect(() => {
    (async () => {
      const res = await AccountService.getAll();
      if (res && Array.isArray(res)) setData(res);
    })();
  }, []);
  return (
    <View>
      {/* <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
