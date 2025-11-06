import React, { createContext, useEffect, useState } from "react";
import { Theme, ThemeContextType } from "./themeConstants";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light"); // Значение по умолчанию для SSR
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    // Этот эффект срабатывает только на клиенте после монтирования
    const savedTheme = localStorage.getItem("theme") as Theme;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    setIsThemeReady(true);
  }, []);

  useEffect(() => {
    if (!isThemeReady) return; // Не делать ничего до инициализации

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, isThemeReady]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isThemeReady }}>
      {children}
    </ThemeContext.Provider>
  );
};
