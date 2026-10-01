import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.jsx";
import data from "../data.js";

export const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useLocalStorage("lang", "en");

  return (
    <LangContext.Provider value={{ lang, setLang, data: data[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
