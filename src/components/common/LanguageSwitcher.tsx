// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language); // Persist selected language
  };

  const isCurrentLanguage = (language: string) => {
    return i18n.language.startsWith(language);
  };

  // Using inline styles for demonstration, replace with your preferred styling method
  const buttonStyle = (language: string) => ({
    fontWeight: isCurrentLanguage(language) ? 'bold' : 'normal',
    color: isCurrentLanguage(language) ? 'blue' : 'black',
    cursor: 'pointer',
    margin: '0 5px',
  });

  return (
    <div>
      <button
        onClick={() => switchLanguage('en')}
        style={buttonStyle('en')}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('de')}
        style={buttonStyle('de')}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;