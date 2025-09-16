import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMangaById, toggleFavorite } from "../features/MangasSlice";
import { palette, spacing, typography } from "../theme/theme";
import ButtonPrimary from "../components/ButtonPrimary";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function DetalhesScreen({ route }) {
  const { id } = route.params;
  const dispatch = useDispatch();
  const { selected, favorites } = useSelector(s => s.mangas);
  const { user } = useSelector(s => s.user);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    dispatch(fetchMangaById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (selected) setIsFav(favorites.includes(selected.id));
  }, [favorites, selected]);

  if (!selected) {
    return (
      <SafeAreaView style={styles.loading}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={selected.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title} allowFontScaling>{selected.title}</Text>
      <Text style={styles.description} allowFontScaling>{selected.description}</Text>

      {selected.isInStock ? (
        <ButtonPrimary title="Comprar" onPress={() => {}} accessibilityLabel="Comprar" />
      ) : (
        <Text style={styles.outOfStock}>Esgotado</Text>
      )}

      {user && (
        <TouchableOpacity
          onPress={() => {
            dispatch(toggleFavorite(selected.id));
            setIsFav(v => !v);
          }}
          style={styles.favBtn}
          accessible
          accessibilityLabel="Favorito"
          accessibilityHint="Alternar favorito"
        >
          <Ionicons name={isFav ? "heart" : "heart-outline"} size={28} color={isFav ? palette.primary : palette.text} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: spacing.lg, backgroundColor: "#fff" },
  image: { width: 220, height: 330, borderRadius: 12, marginBottom: spacing.md },
  title: { fontSize: typography.h1, fontWeight: "800", color: palette.text, marginBottom: spacing.xs },
  description: { fontSize: typography.body, color: palette.textMuted, textAlign: "center", marginBottom: spacing.md },
  outOfStock: { fontSize: typography.body, color: palette.danger, marginVertical: spacing.sm, fontWeight: "700" },
  favBtn: { marginTop: spacing.md },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { fontSize: typography.body },
});
