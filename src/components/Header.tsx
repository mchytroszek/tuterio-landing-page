"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? isDark 
          ? 'bg-fluent-darkBg1 shadow-md py-2' 
          : 'bg-fluent-lightBg1 shadow-md py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isDark ? 'text-fluent-darkText1' : 'text-fluent-lightText1'}`}>
              tuterio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className={`${isDark ? 'text-fluent-darkText2' : 'text-fluent-lightText2'} hover:text-primary-400 transition-colors`}>
              Features
            </Link>
            <Link href="#fitness" className={`${isDark ? 'text-fluent-darkText2' : 'text-fluent-lightText2'} hover:text-primary-400 transition-colors`}>
              Fitness
            </Link>
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full focus:outline-none transition-colors ${
                isDark 
                  ? 'bg-fluent-darkBg3 text-fluent-darkText1 hover:bg-fluent-darkBg2' 
                  : 'bg-fluent-lightBg3 text-fluent-lightText1 hover:bg-fluent-lightBg2'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <Link href="#signup" className="btn-primary">
              Get Early Access
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full focus:outline-none transition-colors ${
                isDark 
                  ? 'bg-fluent-darkBg3 text-fluent-darkText1 hover:bg-fluent-darkBg2' 
                  : 'bg-fluent-lightBg3 text-fluent-lightText1 hover:bg-fluent-lightBg2'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button 
              className={`${isDark ? 'text-fluent-darkText1' : 'text-fluent-lightText1'} focus:outline-none`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <nav className="flex flex-col space-y-4 pb-4">
              <Link 
                href="#features" 
                className={`${isDark ? 'text-fluent-darkText2' : 'text-fluent-lightText2'} hover:text-primary-400 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#fitness" 
                className={`${isDark ? 'text-fluent-darkText2' : 'text-fluent-lightText2'} hover:text-primary-400 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fitness
              </Link>
              <Link 
                href="#signup" 
                className="btn-primary inline-block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Early Access
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header; 