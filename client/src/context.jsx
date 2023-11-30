import { createContext, useContext, useState,useEffect } from "react";
import App from "./App";

const AppContext = createContext()

export const AppProvider = ({children})=>{
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const toggleDarkTheme = ()=>{
        setIsDarkTheme(prev=>!prev)
    }
    
    return (
        <AppContext.Provider value={{isDarkTheme,toggleDarkTheme}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)