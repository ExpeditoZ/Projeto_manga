import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { palette, spacing, typography } from "../theme/theme";

export default function BadgeStatus({ inStock }) {
  return (
    <View style={[styles.badge, { backgroundColor: inStock ? palette.success : palette.danger }]}>
      <Text style={styles.text}>{inStock ? "Em estoque" : "Esgotado"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  text: {
    color: "#fff",
    fontSize: typography.small,
    fontWeight: "700",
  },
});
