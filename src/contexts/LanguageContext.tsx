import react, { createContext, useState } from "react";
import { useTranslation } from "./../hooks/useTranslation";

interface LanguageContextType {
  translate: (key: string) => string;
  setLang: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  translate: (key: string) => key,
  setLang: (lang: string) => {},
});

export const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { translate, setLang }: LanguageContextType = useTranslation();

  return (
    <LanguageContext.Provider value={{ translate, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
