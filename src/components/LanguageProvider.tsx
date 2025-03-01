"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

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
  const [locale, setLocaleState] = useState<Locale>('en');
  const [messages, setMessages] = useState<Record<string, any>>({});
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Initialize locale from localStorage
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale');
      const initialLocale = (savedLocale || 'en') as Locale;
      setLocaleState(initialLocale);
      
      // Load messages for the current locale
      const loadMessages = async () => {
        try {
          const localeMessages = await import(`../messages/${initialLocale}/index.json`);
          setMessages(localeMessages.default || localeMessages);
        } catch (error) {
          console.error('Failed to load messages:', error);
        }
      };
      
      loadMessages();
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
    setLocaleState(newLocale);
    
    // Load messages for the new locale
    const loadMessages = async () => {
      try {
        const localeMessages = await import(`../messages/${newLocale}/index.json`);
        setMessages(localeMessages.default || localeMessages);
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