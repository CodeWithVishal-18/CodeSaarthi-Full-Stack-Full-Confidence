import { createContext, useEffect, useState } from "react";
export let ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  let [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}