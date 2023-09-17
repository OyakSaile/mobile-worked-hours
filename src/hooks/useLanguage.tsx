import { createContext, useState, useContext } from "react";

export type Languages = "pt" | "en";
interface UseLanguageContext {
  language: Languages;
  setLanguage: React.Dispatch<React.SetStateAction<Languages>>;
}

const UseLanguageContext = createContext({} as UseLanguageContext);

export const UseLanguageProvider = ({ children }: any) => {
  const [language, setLanguage] = useState<Languages>("pt");

  return (
    <UseLanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </UseLanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(UseLanguageContext);
};
