import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, setLanguage } from "../features/userSlice";
import ButtonPrimary from "../components/ButtonPrimary";
import { typography, spacing, palette } from "../theme/theme";



export default function PerfilScreen() {
  const dispatch = useDispatch();
  const { user, language } = useSelector(s => s.user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user ? `Olá, ${user.name}` : "Faça login"}</Text>
      <ButtonPrimary
        title={user ? "Sair" : "Entrar"}
        onPress={() => user ? dispatch(logout()) : dispatch(login({ id: 1, name: "Jhonyy" }))}
      />
      <View style={styles.langRow}>
        <Text style={styles.langLabel}>Idioma: {language}</Text>
        <ButtonPrimary title="pt-BR" onPress={() => dispatch(setLanguage("pt-BR"))} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: spacing.lg },
  title: { fontSize: typography.h2, color: palette.text, marginBottom: spacing.md, fontWeight: "800" },
  langRow: { marginTop: spacing.lg, width: "80%", gap: spacing.sm },
  langLabel: { fontSize: typography.body, textAlign: "center" },
});
