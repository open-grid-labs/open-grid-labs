import {createContext, useContext, useEffect, useState, type ReactNode} from "react";

type Theme = "dark" | "light" | "system";

const ThemeContext = createContext<{ theme: Theme; setTheme: (theme: Theme) => void } | null>(null);

export function ThemeProvider({children, storageKey}: { children: ReactNode; storageKey: string }) {
	const [theme, setThemeState] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || "system");

	useEffect(() => {
		const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const resolved = theme === "system" ? (systemDark ? "dark" : "light") : theme;
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(resolved);
	}, [theme]);

	const setTheme = (next: Theme) => {
		localStorage.setItem(storageKey, next);
		setThemeState(next);
	};

	return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
}
