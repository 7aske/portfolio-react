import * as React from "react";


export const themes: ThemeContextTheme[] = ["darcula", "atom-one-dark", "railscasts", "solarized-dark", "monokai"];
export const languages: ThemeContextLanguage[] = ["c", "rust", "python", "go", "bash"];
export const extensions: ThemeContextExtension[] = ["c", "rs", "py", "go", "sh"];
export const modes: ThemeContextMode[] = ["light", "dark"];
export const defaultTheme: Theme = {mode: "dark", theme: "railscasts", language: "c"};
export const ThemeContext = React.createContext(defaultTheme);
