"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (newLocale: 'en' | 'pl') => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className={`inline-flex justify-center items-center w-full rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
            isDark
              ? 'bg-fluent-darkBg3 text-fluent-darkText1 hover:bg-fluent-darkBg2'
              : 'bg-fluent-lightBg3 text-fluent-lightText1 hover:bg-fluent-lightBg2'
          }`}
          id="language-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {locale === 'en' ? '🇬🇧 EN' : '🇵🇱 PL'}
          <svg
            className={`-mr-1 ml-2 h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg ${
            isDark ? 'bg-fluent-darkBg2 ring-1 ring-fluent-gray160' : 'bg-fluent-lightBg2 ring-1 ring-fluent-gray40'
          } focus:outline-none z-50`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${
                isDark
                  ? 'text-fluent-darkText1 hover:bg-fluent-darkBg3'
                  : 'text-fluent-lightText1 hover:bg-fluent-lightBg3'
              } ${locale === 'en' ? 'bg-primary-500/20' : ''}`}
              role="menuitem"
            >
              🇬🇧 {t('language.en')}
            </button>
            <button
              onClick={() => handleLanguageChange('pl')}
              className={`block w-full text-left px-4 py-2 text-sm ${
                isDark
                  ? 'text-fluent-darkText1 hover:bg-fluent-darkBg3'
                  : 'text-fluent-lightText1 hover:bg-fluent-lightBg3'
              } ${locale === 'pl' ? 'bg-primary-500/20' : ''}`}
              role="menuitem"
            >
              🇵🇱 {t('language.pl')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 