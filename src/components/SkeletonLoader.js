import React from "react";
import { View, StyleSheet } from "react-native";
import { spacing } from "../theme/theme";

export default function SkeletonLoader() {
  return <View style={styles.skel} />;
}

const styles = StyleSheet.create({
  skel: {
    height: 220,
    backgroundColor: "#E0E0E0",
    margin: spacing.sm,
    borderRadius: 12,
    flex: 1,
  },
});
