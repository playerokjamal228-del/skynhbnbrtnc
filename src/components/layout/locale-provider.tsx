"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  localeStorageKey,
  normalizeLocale,
  type Locale,
} from "@/lib/i18n";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const fromStorage = window.localStorage.getItem(localeStorageKey);
  if (fromStorage) return normalizeLocale(fromStorage);

  const cookieValue = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${localeStorageKey}=`))
    ?.split("=")[1];

  return normalizeLocale(cookieValue ?? document.documentElement.lang);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const initialLocale = readStoredLocale();
    document.documentElement.lang = initialLocale;

    if (initialLocale !== locale) {
      // We intentionally rehydrate from persisted browser state after mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(initialLocale);
    }
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(localeStorageKey, nextLocale);
    document.cookie = `${localeStorageKey}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = nextLocale;
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}
