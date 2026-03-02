"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

import uzCrylMessages from "../messages/uz-cryl.json";
import ruMessages from "../messages/ru.json";
import uzMessages from "../messages/uz.json";

export type Locale = "uz-cryl" | "ru" | "uz";

export interface LocaleOption {
    code: Locale;
    label: string;
    shortLabel: string;
}

export const LOCALE_OPTIONS: LocaleOption[] = [
    { code: "uz-cryl", label: "Ўзбекча", shortLabel: "Ўзб" },
    { code: "ru", label: "Русский", shortLabel: "Рус" },
    { code: "uz", label: "O'zbekcha", shortLabel: "Uzb" },
];

type Messages = Record<string, Record<string, string | Record<string, string>>>;

const messagesMap: Record<Locale, Messages> = {
    "uz-cryl": uzCrylMessages as unknown as Messages,
    ru: ruMessages as unknown as Messages,
    uz: uzMessages as unknown as Messages,
};

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (section: string, key: string) => string;
    tNested: (section: string, group: string, key: string) => string;
    messages: Messages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("uz-cryl");

    const messages = messagesMap[locale];

    const t = useCallback(
        (section: string, key: string): string => {
            const sectionData = messages[section];
            if (!sectionData) return key;
            const value = sectionData[key];
            if (typeof value === "string") return value;
            return key;
        },
        [messages]
    );

    const tNested = useCallback(
        (section: string, group: string, key: string): string => {
            const sectionData = messages[section];
            if (!sectionData) return key;
            const groupData = sectionData[group];
            if (typeof groupData === "object" && groupData !== null) {
                return (groupData as Record<string, string>)[key] || key;
            }
            return key;
        },
        [messages]
    );

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t, tNested, messages }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
