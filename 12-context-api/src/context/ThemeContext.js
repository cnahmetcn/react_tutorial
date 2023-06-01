import {createContext, useState, useEffect} from 'react'

const ThemeContext = createContext();

const defaultTheme = localStorage.getItem("theme") || "light";

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])

    const values = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )   
}

export default ThemeContext;