import { PixelRatio } from "react-native";

const base = 16;
const scale = n => Math.round(PixelRatio.roundToNearestPixel(base * n));

export const palette = {
  primary: "#FF6F61",
  background: "#2C3E50",
  surface: "#FFFFFF",
  text: "#333333",
  textMuted: "#555555",
  danger: "#E53935",
  success: "#2ECC71",
};

export const typography = {
  h1: scale(1.5),
  h2: scale(1.25),
  body: scale(1),
  small: scale(0.875),
};

export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
};
