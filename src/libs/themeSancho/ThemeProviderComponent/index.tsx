import React from "react";
import { generateColorsFromScales, ThemeProvider, defaultTheme } from "sancho";
import palx from "palx";

const scales = palx("#08e");
const colors = generateColorsFromScales(scales);

const theme = {
  ...defaultTheme,
  ...colors,
  fonts: {
    ...defaultTheme.fonts,
    sans: "Roboto, sans-serif",
    base: "Roboto, sans-serif"
  }
};

type ITheme = {
  children: React.ReactNode;
};

const ThemeProviderComponent: React.FC<ITheme> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeProviderComponent;
