"use client";

import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setError('');
  };

  return (
    <div>
      {submitted ? (
        <div className="text-center p-4 bg-primary-900/30 rounded-lg border border-primary-700">
          <h3 className="text-xl font-semibold text-fluent-darkText1 mb-2">Thank You!</h3>
          <p className="text-fluent-darkText2">
            We've added you to our waitlist. We'll notify you when we launch!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-fluent-darkText2 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="block w-full px-4 py-3 bg-fluent-darkBg1 border border-fluent-gray140 rounded-md text-fluent-darkText1 placeholder-fluent-darkText3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              required
            />
            {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full btn-primary"
          >
            Join the Waitlist
          </button>
          <p className="text-xs text-fluent-darkText3 text-center mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
};

export default EmailSignup; 