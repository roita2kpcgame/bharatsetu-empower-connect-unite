
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Languages, Loader2 } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');

  useEffect(() => {
    // Add Google Translate script
    const addScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'hi,en,bn,te,mr,ta,gu,kn,ml,pa,or,as,ne,sd,ur,ks,ko,ja,zh,es,fr,de,ru,ar,pt,it',
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        autoDisplay: false,
        multilanguagePage: true
      }, 'google_translate_element');
      setIsLoaded(true);
    };

    // Add custom styles for Google Translate
    const addCustomStyles = () => {
      const style = document.createElement('style');
      style.innerHTML = `
        .google-translate-container .goog-te-gadget {
          font-family: inherit !important;
          font-size: 12px !important;
        }
        .google-translate-container .goog-te-gadget-simple {
          background: transparent !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 6px !important;
          padding: 4px 8px !important;
          font-size: 12px !important;
        }
        .google-translate-container .goog-te-gadget-simple .goog-te-menu-value {
          color: #374151 !important;
          font-family: inherit !important;
        }
        .google-translate-container .goog-te-gadget-icon {
          background-image: none !important;
          margin-right: 4px !important;
        }
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
      `;
      document.head.appendChild(style);
    };

    if (!window.google) {
      addScript();
      addCustomStyles();
    } else if (window.google.translate) {
      window.googleTranslateElementInit();
      addCustomStyles();
    }

    return () => {
      // Cleanup
      const script = document.querySelector('script[src*="translate.google.com"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
    { code: 'as', name: 'অসমীয়া', flag: '🇮🇳' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        <Globe className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-medium text-gray-700">Translate:</span>
      </div>
      
      {!isLoaded ? (
        <div className="flex items-center space-x-2">
          <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
          <span className="text-xs text-gray-500">Loading...</span>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <div 
            id="google_translate_element" 
            className="google-translate-container"
          />
          <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
            <Languages className="w-3 h-3 mr-1" />
            {languages.length}+ Languages
          </Badge>
        </div>
      )}
    </div>
  );
};

export default GoogleTranslate;
