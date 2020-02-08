type ThemeContextTheme = "darcula" | "atom-one-dark" | "railscasts" | "solarized-dark" | "monokai";
type ThemeContextLanguage = "c" | "rust" | "python" | "go" | "bash";
type ThemeContextExtension = "c" | "rs" | "py" | "go" | "sh";
type ThemeContextMode = "dark" | "light";
type Theme = {
	theme: ThemeContextTheme;
	language: ThemeContextLanguage;
	mode?: ThemeContextMode;
	changeTheme:Function<Theme>;
	[key: string]: string|Function<Theme>;
}
