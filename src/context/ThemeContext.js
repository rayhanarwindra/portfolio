import { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, toggleDarkMode] = useToggleState(true);
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}