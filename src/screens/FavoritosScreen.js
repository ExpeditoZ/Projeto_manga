import React, { useMemo } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/MangasSlice";
import { spacing, typography, palette } from "../theme/theme";


export default function FavoritosScreen() {
  const dispatch = useDispatch();
  const { data, favorites } = useSelector(s => s.mangas);

  const favoriteItems = useMemo(() => data.filter(m => favorites.includes(m.id)), [data, favorites]);

  if (favoriteItems.length === 0) {
    return (
      <View style={styles.emptyWrap}>
        <Text style={styles.empty}>Nenhum mangá favoritado ainda.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <TouchableOpacity onPress={() => dispatch(removeFavorite(item.id))} style={styles.btn}>
              <Text style={styles.btnText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.list}
        initialNumToRender={8}
        windowSize={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: spacing.md },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: spacing.sm },
  title: { fontSize: typography.body, color: palette.text, flex: 1, marginRight: spacing.sm, fontWeight: "600" },
  btn: { backgroundColor: palette.danger, paddingHorizontal: spacing.md, paddingVertical: spacing.xs, borderRadius: 8 },
  btnText: { color: "#ffffffff", fontWeight: "700" },
  emptyWrap: { flex: 1, alignItems: "center", justifyContent: "center" },
  empty: { fontSize: typography.body },
});
