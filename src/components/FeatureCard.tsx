import React, { ReactNode } from 'react';

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
  return (
    <div className={`bg-fluent-darkBg1 border border-fluent-gray160 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="flex items-center mb-4">
        <div className="mr-4 text-primary-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-fluent-darkText1">{title}</h3>
      </div>
      <p className="text-fluent-darkText2">{description}</p>
    </div>
  );
};

export default FeatureCard; 