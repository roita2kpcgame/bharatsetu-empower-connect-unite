
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translation {
  [key: string]: string;
}

interface Translations {
  [language: string]: Translation;
}

const translations: Translations = {
  English: {
    'bharatsetu': 'BharatSetu',
    'empowering_india': 'Empowering India',
    'all_in_one_platform': 'The All-in-One Empowerment Platform for India',
    'one_app_multiple_solutions': 'One App. Multiple Solutions. Infinite Impact.',
    'core_modules': 'Core Modules',
    'coming_soon': 'Coming Soon',
    'swasthyamitra': 'SwasthyaMitra',
    'ai_health_assistant': 'AI Health Assistant',
    'kanoon_sathi': 'KanoonSathi',
    'legal_aid_platform': 'Legal Aid Platform',
    'yuva_rojgar': 'YuvaRojgar',
    'career_empowerment': 'Career Empowerment',
    'samasya_report': 'SamasyaReport',
    'civic_issue_reporter': 'Civic Issue Reporter',
    'launch_module': 'Launch Module',
    'learn_more': 'Learn More',
    'health': 'Health',
    'legal_aid': 'Legal Aid',
    'employment': 'Employment',
    'civic_issues': 'Civic Issues',
    'login': 'Login',
    'voice': 'Voice',
    'stop': 'Stop',
    'live': 'Live'
  },
  'हिंदी': {
    'bharatsetu': 'भारतसेतु',
    'empowering_india': 'भारत को सशक्त बनाना',
    'all_in_one_platform': 'भारत के लिए एक सम्पूर्ण सशक्तिकरण मंच',
    'one_app_multiple_solutions': 'एक ऐप। कई समाधान। अनंत प्रभाव।',
    'core_modules': 'मुख्य मॉड्यूल',
    'coming_soon': 'जल्द आ रहा है',
    'swasthyamitra': 'स्वास्थ्यमित्र',
    'ai_health_assistant': 'एआई स्वास्थ्य सहायक',
    'kanoon_sathi': 'कानूनसाथी',
    'legal_aid_platform': 'कानूनी सहायता मंच',
    'yuva_rojgar': 'युवा रोजगार',
    'career_empowerment': 'करियर सशक्तिकरण',
    'samasya_report': 'समस्या रिपोर्ट',
    'civic_issue_reporter': 'नागरिक समस्या रिपोर्टर',
    'launch_module': 'मॉड्यूल लॉन्च करें',
    'learn_more': 'और जानें',
    'health': 'स्वास्थ्य',
    'legal_aid': 'कानूनी सहायता',
    'employment': 'रोजगार',
    'civic_issues': 'नागरिक समस्याएं',
    'login': 'लॉगिन',
    'voice': 'आवाज़',
    'stop': 'रोकें',
    'live': 'लाइव'
  },
  'বাংলা': {
    'bharatsetu': 'ভারতসেতু',
    'empowering_india': 'ভারতকে ক্ষমতায়ন',
    'all_in_one_platform': 'ভারতের জন্য সর্বসমাধানের ক্ষমতায়ন প্ল্যাটফর্ম',
    'one_app_multiple_solutions': 'একটি অ্যাপ। একাধিক সমাধান। অসীম প্রভাব।',
    'core_modules': 'মূল মডিউল',
    'coming_soon': 'শীঘ্রই আসছে',
    'swasthyamitra': 'স্বাস্থ্যমিত্র',
    'ai_health_assistant': 'এআই স্বাস্থ্য সহায়ক',
    'kanoon_sathi': 'কানুনসাথী',
    'legal_aid_platform': 'আইনি সহায়তা প্ল্যাটফর্ম',
    'yuva_rojgar': 'যুব রোজগার',
    'career_empowerment': 'ক্যারিয়ার ক্ষমতায়ন',
    'samasya_report': 'সমস্যা রিপোর্ট',
    'civic_issue_reporter': 'নাগরিক সমস্যা রিপোর্টার',
    'launch_module': 'মডিউল চালু করুন',
    'learn_more': 'আরও জানুন',
    'health': 'স্বাস্থ্য',
    'legal_aid': 'আইনি সহায়তা',
    'employment': 'কর্মসংস্থান',
    'civic_issues': 'নাগরিক সমস্যা',
    'login': 'লগইন',
    'voice': 'কণ্ঠস্বর',
    'stop': 'থামুন',
    'live': 'লাইভ'
  },
  'தமிழ்': {
    'bharatsetu': 'பாரதசேது',
    'empowering_india': 'இந்தியாவை வலுப்படுத்துதல்',
    'all_in_one_platform': 'இந்தியாவுக்கான அனைத்து-in-ஒன்று வலுப்படுத்தல் தளம்',
    'one_app_multiple_solutions': 'ஒரு ஆப். பல தீர்வுகள். எல்லையற்ற தாக்கம்।',
    'core_modules': 'முக்கிய தொகுதிகள்',
    'coming_soon': 'விரைவில் வருகிறது',
    'swasthyamitra': 'ஸ்வாஸ்த்யமித்ரா',
    'ai_health_assistant': 'ஏஐ சுகாதார உதவியாளர்',
    'kanoon_sathi': 'கானூன்சாதி',
    'legal_aid_platform': 'சட்ட உதவி தளம்',
    'yuva_rojgar': 'யுவா ரோஜ்கார்',
    'career_empowerment': 'வாழ்க்கை வலுப்படுத்தல்',
    'samasya_report': 'சமஸ்யா அறிக்கை',
    'civic_issue_reporter': 'குடிமக்கள் பிரச்சினை அறிக்கையாளர்',
    'launch_module': 'தொகுதியை தொடங்கு',
    'learn_more': 'மேலும் அறிய',
    'health': 'சுகாதாரம்',
    'legal_aid': 'சட்ட உதவி',
    'employment': 'வேலைவாய்ப்பு',
    'civic_issues': 'குடிமக்கள் பிரச்சினைகள்',
    'login': 'உள்நுழைய',
    'voice': 'குரல்',
    'stop': 'நிறுத்து',
    'live': 'நேரலை'
  },
  'తెలుగు': {
    'bharatsetu': 'భారతసేతు',
    'empowering_india': 'భారతదেశం శక్తివంతం',
    'all_in_one_platform': 'భారతదేశం కోసం ఆల్-ఇన్-వన్ ఎంపవర్మెంట్ ప్లాట్‌ఫారమ్',
    'one_app_multiple_solutions': 'ఒక యాప్. బహుళ పరిష్కారాలు. అనంత ప్రభావం.',
    'core_modules': 'కోర్ మాడ్యూల్స్',
    'coming_soon': 'త్వరలో వస్తోంది',
    'swasthyamitra': 'స్వాస్థ్యమిత్ర',
    'ai_health_assistant': 'ఏఐ ఆరోగ్య సహాయకుడు',
    'kanoon_sathi': 'కానూన్‌సాథి',
    'legal_aid_platform': 'న్యాయ సహాయ వేదిక',
    'yuva_rojgar': 'యువ రోజ్‌గార్',
    'career_empowerment': 'కెరీర్ శక్తివంతం',
    'samasya_report': 'సమస్యా రిపోర్ట్',
    'civic_issue_reporter': 'పౌర సమస్య రిపోర్టర్',
    'launch_module': 'మాడ్యూల్ ప్రారంభించండి',
    'learn_more': 'మరింత తెలుసుకోండి',
    'health': 'ఆరోగ్యం',
    'legal_aid': 'న్యాయ సహాయం',
    'employment': 'ఉపాధి',
    'civic_issues': 'పౌర సమస్యలు',
    'login': 'లాగిన్',
    'voice': 'వాయిస్',
    'stop': 'ఆపండి',
    'live': 'లైవ్'
  }
};

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  availableLanguages: string[];
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('English');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['English'][key] || key;
  };

  const availableLanguages = Object.keys(translations);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
