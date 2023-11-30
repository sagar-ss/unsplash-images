import { createContext, useContext, useState,useEffect } from "react";
import App from "./App";

const AppContext = createContext()

export const AppProvider = ({children})=>{
    
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)