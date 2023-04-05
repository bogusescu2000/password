import { useCallback, useEffect, useState, useMemo } from "react";
import frTranslations from "../translations/fr.json";
import enTranslations from "../translations/en.json";

enum Language {
  FR = "fr",
  EN = "en",
}

interface TranslationFunction {
  (key: string): string;
}
interface Translations {
  [key: string]: string;
}

export const useTranslation = () => {
  const [translations, setTranslations] = useState<Translations>();
  const [language, setLanguage] = useState<string>(
    localStorage.getItem("lang") || Language.EN
  );

  const setLang = useCallback(
    (lang: string): void => {
      localStorage.setItem("lang", lang);
      setLanguage(lang);
    },
    [setLanguage]
  );

  useEffect(() => {
    const loadedLaguage =
      language === Language.FR ? frTranslations : enTranslations;
    setTranslations(loadedLaguage);
  }, [language]);

  const translate: TranslationFunction = useCallback(
    (key: string) => {
      return translations ? translations[key] : key;
    },
    [translations]
  );

  return { translate, setLang };
};
