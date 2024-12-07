import { StyleSheet, View, Image, Platform, Pressable } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function DetailsScreen() {
  return (
    <>
      <View
      // headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      // headerImage={
      //   <IconSymbol
      //     size={310}
      //     color="#808080"
      //     name="chevron.left.forwardslash.chevron.right"
      //     style={styles.headerImage}
      //   />
      // }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Details</ThemedText>
        </ThemedView>
        <ThemedText>
          Modals are a common user interface pattern in mobile apps. They are
          used to present content on top of the existing screen and is used for
          different purposes, such as displaying confirmation alerts or
          standalone forms.
        </ThemedText>
        <Pressable onPress={() => router.back()}>
          <ThemedText type="title">Return!</ThemedText>
        </Pressable>
      </View>
      {/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
