import React, { memo } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { palette, spacing, typography } from "../theme/theme";
import BadgeStatus from "./BadgeStatus";

function CardManga({ item, onPress, onFavoritePress, isFav }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} accessible accessibilityLabel={item.title} accessibilityHint="Abrir detalhes">
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1} allowFontScaling>{item.title}</Text>
        <BadgeStatus inStock={item.isInStock} />
        <TouchableOpacity style={styles.fav} onPress={onFavoritePress} accessibilityLabel="Favoritar" accessible accessibilityHint="Alternar favorito">
          <Text style={[styles.favText, { color: isFav ? palette.primary : palette.textMuted }]}>{isFav ? "♥" : "♡"}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default memo(CardManga);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    overflow: "hidden",
    margin: spacing.sm,
    width: 160,
    elevation: 2,
  },
  image: {
    width: 160,
    height: 180,
  },
  info: {
    padding: spacing.sm,
  },
  title: {
    fontSize: typography.body,
    fontWeight: "700",
    color: palette.text,
    marginBottom: spacing.xs,
  },
  fav: {
    position: "absolute",
    right: spacing.sm,
    top: spacing.sm,
  },
  favText: {
    fontSize: 18,
  },
});
