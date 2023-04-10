import { useCallback, useEffect, useState } from "react";
import frTranslations from "../translations/fr.json";
import enTranslations from "../translations/en.json";

const languages = {
  FR: "fr",
  EN: "en",
} as const;

const STORAGE_KEY = "lang";

interface TranslationFunction {
  (key: string): string;
}

export type Language = typeof languages[keyof typeof languages];

export const useTranslation = () => {
  const [translations, setTranslations] = useState<Record<string, string>>();
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(STORAGE_KEY) as Language) || languages.FR
  );

  const setLang = useCallback((lang: Language): void => {
    localStorage.setItem(STORAGE_KEY, lang);
    setLanguage(lang);
  }, []);

  useEffect(() => {
    const loadedLanguage =
      language === languages.FR ? frTranslations : enTranslations;
    setTranslations(loadedLanguage);
  }, [language]);

  const translate: TranslationFunction = useCallback(
    (key: string) => {
      return translations ? translations[key] : key;
    },
    [translations]
  );

  return { translate, setLang };
};
