type ThemeContextTheme = "darcula" | "atom-one-dark" | "railscasts" | "solarized-dark" | "monokai";
type ThemeContextLanguage = "c" | "rust" | "python";
type ThemeContextExtension = "c" | "rs" | "py";
type ThemeContextMode = "dark" | "light";
type Theme = {
	theme?: ThemeContextTheme;
	language?: ThemeContextLanguage;
	mode?: ThemeContextMode;
	[key: string]: string;
}
