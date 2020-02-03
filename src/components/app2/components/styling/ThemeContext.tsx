import * as React from "react";


export const themes: ThemeContextTheme[] = ["darcula", "atom-one-dark", "railscasts", "solarized-dark", "monokai"];
export const languages: ThemeContextLanguage[] = ["c", "rust", "python"];
export const extensions: ThemeContextExtension[] = ["c", "rs", "py"];
export const modes: ThemeContextMode[] = ["light", "dark"];
export const defaultTheme: Theme = {mode: "dark", theme: "darcula", language: "python"};
export const ThemeContext = React.createContext(defaultTheme);
