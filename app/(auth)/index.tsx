import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { COLOR } from "@/constants/THEME";

import {
  AppBar,
  SearchBar,
  Ribbon,
  ListItem,
  FAB,
  FormSheet,
  usePosts,
} from "@/features/post";

export default function PostsScreen() {
  const { data, showFormSheet, setShowFormSheet } = usePosts();
  console.log("🚀 ~ PostsScreen");
  // renders
  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        {/* APP BAR */}
        <AppBar />

        {/* SEARCH BAR */}
        <SearchBar handleSearch={(value) => console.log(value)} />

        {/* RIBBON */}
        <Ribbon total={data.length} />
      </View>

      {/* MAIN */}
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={s.main}
      />

      {/* FAB */}
      <FAB action={() => setShowFormSheet(true)} />

      {/* BOTTOM SHEET */}
      <FormSheet open={showFormSheet} onClose={() => setShowFormSheet(false)} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.background,
    flex: 1,
  },
  header: {
    rowGap: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  main: {
    paddingBottom: 24,
  },
});
