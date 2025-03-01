"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FiFileText, 
  FiSmartphone, 
  FiPieChart, 
  FiUsers, 
  FiCode, 
  FiBarChart2 
} from 'react-icons/fi';
import { MdFitnessCenter, MdSportsMartialArts, MdOutlineMenuBook } from 'react-icons/md';

import Header from '@/components/Header';
import EmailSignup from '@/components/EmailSignup';
import FeatureCard from '@/components/FeatureCard';
import { useTheme } from '@/components/ThemeProvider';
import { useLanguage } from '@/components/LanguageProvider';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return nothing on the server side
  }

  // Helper function to render text with primary spans
  const renderWithPrimary = (text: string) => {
    if (!text.includes('<primary>') || !text.includes('</primary>')) {
      return text;
    }
    
    const parts = text.split(/<primary>|<\/primary>/);
    return (
      <>
        {parts[0]}
        <span className="text-primary-500">{parts[1]}</span>
        {parts[2]}
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className={`section pt-20 md:pt-28 lg:pt-32 ${isDark ? 'bg-fluent-darkBg1' : 'bg-fluent-lightBg1'}`}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-6"
            >
              <h1 className={`heading-xl ${isDark ? 'text-fluent-darkText1' : 'text-fluent-lightText1'}`}>
                {renderWithPrimary(t('hero.title'))}
              </h1>
              <p className={`text-xl ${isDark ? 'text-fluent-darkText2' : 'text-fluent-lightText2'} md:pr-10`}>
                {t('hero.subtitle')}
              </p>
              <div className="pt-4">
                <a href="#signup" className="btn-primary mr-4">{t('navigation.getEarlyAccess')}</a>
                <a href="#features" className="btn-secondary">{t('navigation.features')}</a>
              </div>
              <div className={`pt-4 flex items-center text-sm ${isDark ? 'text-fluent-darkText2' : 'text-fluent-lightText2'}`}>
                <span className="mr-2 text-primary-500">✓</span> {t('hero.noCoding')}
                <span className={`mx-2 ${isDark ? 'text-fluent-gray130' : 'text-fluent-gray70'}`}>|</span>
                <span className="mr-2 text-primary-500">✓</span> {t('hero.embedAnywhere')}
                <span className={`mx-2 ${isDark ? 'text-fluent-gray130' : 'text-fluent-gray70'}`}>|</span>
                <span className="mr-2 text-primary-500">✓</span> {t('hero.trackProgress')}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-500 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`${isDark ? 'bg-fluent-darkBg2 border-fluent-gray140' : 'bg-fluent-lightBg2 border-fluent-gray40'} rounded-lg shadow-lg w-5/6 h-4/5 p-4 overflow-hidden border`}>
                  <div className={`${isDark ? 'bg-fluent-darkBg3' : 'bg-fluent-lightBg3'} h-8 mb-3 rounded flex items-center px-3`}>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className={`mx-auto text-xs ${isDark ? 'text-fluent-darkText3' : 'text-fluent-lightText3'}`}>tuterio Builder</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 h-[calc(100%-2rem)]">
                    <div className={`${isDark ? 'bg-fluent-darkBg2 border-fluent-gray160' : 'bg-fluent-lightBg2 border-fluent-gray40'} shadow col-span-1 rounded p-2 border`}>
                      <div className={`h-4 w-3/4 ${isDark ? 'bg-fluent-gray140' : 'bg-fluent-gray40'} rounded mb-2`}></div>
                      <div className="space-y-1">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className={`h-8 ${isDark ? 'bg-fluent-darkBg3' : 'bg-fluent-lightBg3'} rounded flex items-center px-2`}>
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                            <div className={`h-2 w-2/3 ${isDark ? 'bg-fluent-gray140' : 'bg-fluent-gray40'} rounded`}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`col-span-2 ${isDark ? 'bg-fluent-darkBg2 border-fluent-gray160' : 'bg-fluent-lightBg2 border-fluent-gray40'} shadow rounded p-3 border`}>
                      <div className={`h-6 w-1/3 ${isDark ? 'bg-fluent-gray140' : 'bg-fluent-gray40'} rounded mb-4`}></div>
                      <div className="space-y-2">
                        <div className={`h-3 w-full ${isDark ? 'bg-fluent-darkBg3' : 'bg-fluent-lightBg3'} rounded`}></div>
                        <div className={`h-3 w-full ${isDark ? 'bg-fluent-darkBg3' : 'bg-fluent-lightBg3'} rounded`}></div>
                        <div className={`h-3 w-2/3 ${isDark ? 'bg-fluent-darkBg3' : 'bg-fluent-lightBg3'} rounded`}></div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className={`h-16 ${isDark ? 'bg-fluent-darkBg3 border-fluent-gray160' : 'bg-fluent-lightBg3 border-fluent-gray40'} rounded border`}></div>
                        <div className={`h-16 ${isDark ? 'bg-fluent-darkBg3 border-fluent-gray160' : 'bg-fluent-lightBg3 border-fluent-gray40'} rounded border`}></div>
                      </div>
                      <div className={`mt-4 h-24 ${isDark ? 'bg-primary-900/30 border-primary-800/50' : 'bg-primary-100 border-primary-200'} rounded border p-2`}>
                        <div className={`h-3 w-1/4 ${isDark ? 'bg-primary-700/50' : 'bg-primary-300'} rounded mb-2`}></div>
                        <div className={`h-3 w-3/4 ${isDark ? 'bg-fluent-darkBg3' : 'bg-fluent-lightBg3'} rounded mb-2`}></div>
                        <div className={`h-3 w-2/3 ${isDark ? 'bg-fluent-darkBg3' : 'bg-fluent-lightBg3'} rounded`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className={`section ${isDark ? 'bg-fluent-darkBg2' : 'bg-fluent-lightBg2'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className={`heading-lg mb-4 ${isDark ? 'text-fluent-darkText1' : 'text-fluent-lightText1'}`}>
                {t('features.title')}
              </h2>
              <p className={`text-xl ${isDark ? 'text-fluent-darkText2' : 'text-fluent-lightText2'}`}>
                {t('features.subtitle')}
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeIn}>
              <FeatureCard
                title={t('features.cards.dragAndDrop.title')}
                description={t('features.cards.dragAndDrop.description')}
                icon={<FiFileText size={24} className="text-primary-500" />}
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <FeatureCard
                title={t('features.cards.embedAnywhere.title')}
                description={t('features.cards.embedAnywhere.description')}
                icon={<FiCode size={24} className="text-primary-500" />}
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <FeatureCard
                title={t('features.cards.progressTracking.title')}
                description={t('features.cards.progressTracking.description')}
                icon={<FiBarChart2 size={24} className="text-primary-500" />}
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <FeatureCard
                title={t('features.cards.interactiveElements.title')}
                description={t('features.cards.interactiveElements.description')}
                icon={<FiUsers size={24} className="text-primary-500" />}
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <FeatureCard
                title={t('features.cards.mobileFriendly.title')}
                description={t('features.cards.mobileFriendly.description')}
                icon={<FiSmartphone size={24} className="text-primary-500" />}
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <FeatureCard
                title={t('features.cards.analyticsDashboard.title')}
                description={t('features.cards.analyticsDashboard.description')}
                icon={<FiPieChart size={24} className="text-primary-500" />}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Fitness Module Section */}
      <section id="fitness" className={`section ${isDark ? 'bg-fluent-darkBg3' : 'bg-fluent-lightBg3'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className={`heading-lg mb-4 ${isDark ? 'text-fluent-darkText1' : 'text-fluent-lightText1'}`}>
                {t('fitness.title')}
              </h2>
              <p className={`text-xl ${isDark ? 'text-fluent-darkText2' : 'text-fluent-lightText2'}`}>
                {t('fitness.subtitle')}
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeIn}>
                <FeatureCard
                  title={t('fitness.cards.exerciseLibrary.title')}
                  description={t('fitness.cards.exerciseLibrary.description')}
                  icon={<MdFitnessCenter size={24} className="text-primary-500" />}
                  className="mb-6"
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <FeatureCard
                  title={t('fitness.cards.workoutProgramBuilder.title')}
                  description={t('fitness.cards.workoutProgramBuilder.description')}
                  icon={<MdSportsMartialArts size={24} className="text-primary-500" />}
                  className="mb-6"
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <FeatureCard
                  title={t('fitness.cards.nutritionGuidance.title')}
                  description={t('fitness.cards.nutritionGuidance.description')}
                  icon={<MdOutlineMenuBook size={24} className="text-primary-500" />}
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className={`${isDark ? 'bg-fluent-darkBg2 border-fluent-gray160' : 'bg-fluent-lightBg2 border-fluent-gray40'} rounded-lg shadow-lg w-full h-full p-4 overflow-hidden border`}>
                  <div className={`${isDark ? 'bg-secondary-900' : 'bg-primary-100'} h-10 mb-4 rounded flex items-center px-4`}>
                    <div className="font-medium text-primary-400">Workout Program: 12-Week Strength</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className={`text-center p-1 rounded-md text-xs ${i === 3 ? 'bg-primary-900/50 text-primary-400 font-medium' : 'bg-fluent-darkBg3'}`}>
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className={`${isDark ? 'bg-fluent-darkBg1 border-fluent-gray160' : 'bg-fluent-lightBg1 border-fluent-gray40'} rounded-lg p-3 border`}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium text-sm text-fluent-darkText1">Exercise {i + 1}</div>
                          <div className="text-xs text-fluent-darkText3">3 sets x 12 reps</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className={`${isDark ? 'bg-fluent-gray140' : 'bg-fluent-gray40'} h-16 rounded`}></div>
                          <div className="col-span-2 space-y-1 text-xs">
                            <div className="h-2 bg-fluent-gray140 rounded w-3/4"></div>
                            <div className="h-2 bg-fluent-gray140 rounded w-full"></div>
                            <div className="h-2 bg-fluent-gray140 rounded w-1/2"></div>
                            <div className="mt-3 flex gap-1">
                              <span className="px-2 py-1 bg-primary-900/50 text-primary-400 rounded">Form</span>
                              <span className="px-2 py-1 bg-fluent-darkBg3 rounded">Video</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className={`${isDark ? 'bg-secondary-900/30 border-secondary-800/50' : 'bg-primary-100 border-primary-200'} rounded-lg p-3 mt-4`}>
                      <div className="font-medium text-sm text-primary-400 mb-2">Client Notes</div>
                      <div className="h-2 bg-secondary-800/50 rounded w-full mb-1"></div>
                      <div className="h-2 bg-secondary-800/50 rounded w-3/4 mb-1"></div>
                      <div className="h-2 bg-secondary-800/50 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action - Always dark theme for consistent branding */}
      <section id="signup" className="section bg-gradient-to-r from-secondary-900 to-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="mb-8"
            >
              <h2 className="heading-lg mb-4">{t('cta.title')}</h2>
              <p className="text-xl text-fluent-darkText1 mb-8">
                {t('cta.subtitle')}
              </p>
              <div className="bg-fluent-darkBg1/80 backdrop-blur-sm p-8 rounded-lg border border-fluent-gray140 shadow-xl">
                <div className="max-w-md mx-auto">
                  <EmailSignup />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer - Always dark theme for consistent branding */}
      <footer className="bg-fluent-darkBg3 text-fluent-darkText2 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-fluent-darkText1 mb-4">tuterio</h3>
              <p className="text-fluent-darkText2 mb-4">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-fluent-darkText3 hover:text-primary-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-fluent-darkText3 hover:text-primary-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-fluent-darkText1 mb-4">{t('footer.product')}</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-fluent-darkText2 hover:text-primary-400 transition-colors">{t('navigation.features')}</a></li>
                <li><a href="#fitness" className="text-fluent-darkText2 hover:text-primary-400 transition-colors">{t('navigation.fitness')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-fluent-darkText1 mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-fluent-darkText2 hover:text-primary-400 transition-colors">{t('footer.aboutUs')}</a></li>
                <li><a href="#" className="text-fluent-darkText2 hover:text-primary-400 transition-colors">{t('footer.blog')}</a></li>
                <li><a href="#" className="text-fluent-darkText2 hover:text-primary-400 transition-colors">{t('footer.contact')}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-fluent-gray160 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-fluent-darkText3 text-sm">
              {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-fluent-darkText3 hover:text-primary-400 transition-colors text-sm">{t('footer.privacyPolicy')}</a>
              <a href="#" className="text-fluent-darkText3 hover:text-primary-400 transition-colors text-sm">{t('footer.termsOfService')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 