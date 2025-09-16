import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { palette, spacing, typography } from "../theme/theme";

export default function ButtonPrimary({ title, onPress, accessibilityLabel }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel || title}
      accessible
      accessibilityHint={title}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: typography.body,
    fontWeight: "700",
  },
});
