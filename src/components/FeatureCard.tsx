"use client";

import React, { ReactNode } from 'react';
import { useTheme } from './ThemeProvider';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className = "",
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`${isDark ? 'bg-fluent-darkBg1 border-fluent-gray160' : 'bg-fluent-lightBg1 border-fluent-gray40'} border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="flex items-center mb-4">
        <div className="mr-4 text-primary-500">
          {icon}
        </div>
        <h3 className={`text-xl font-semibold ${isDark ? 'text-fluent-darkText1' : 'text-fluent-lightText1'}`}>{title}</h3>
      </div>
      <p className={`${isDark ? 'text-fluent-darkText2' : 'text-fluent-lightText2'}`}>{description}</p>
    </div>
  );
};

export default FeatureCard; 