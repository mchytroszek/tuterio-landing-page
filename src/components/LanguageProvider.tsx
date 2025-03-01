"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type Locale = 'en' | 'pl';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>('en');
  const [messages, setMessages] = useState<Record<string, any>>({});

  useEffect(() => {
    // Initialize locale from router or localStorage
    const initialLocale = (router.locale || localStorage.getItem('locale') || 'en') as Locale;
    setLocaleState(initialLocale);
    
    // Load messages for the current locale
    const loadMessages = async () => {
      try {
        const localeMessages = await import(`../messages/${initialLocale}/index.json`);
        setMessages(localeMessages);
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    };
    
    loadMessages();
  }, [router.locale]);

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('locale', newLocale);
    setLocaleState(newLocale);
    
    // Change the URL to reflect the new locale
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
    
    // Load messages for the new locale
    const loadMessages = async () => {
      try {
        const localeMessages = await import(`../messages/${newLocale}/index.json`);
        setMessages(localeMessages);
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    };
    
    loadMessages();
  };

  // Function to get a translated message by key
  const t = (key: string): string => {
    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    if (typeof value === 'string') {
      return value;
    }
    
    return key; // Return the key if translation not found
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider; 