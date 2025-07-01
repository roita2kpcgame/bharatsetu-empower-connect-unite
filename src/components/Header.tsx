
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mic, 
  Globe, 
  Menu,
  MicOff,
  LogIn
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/contexts/TranslationContext';

interface HeaderProps {
  isListening: boolean;
  onVoiceToggle: () => void;
}

const Header = ({ isListening, onVoiceToggle }: HeaderProps) => {
  const { language, setLanguage, t, availableLanguages } = useTranslation();
  const navigate = useNavigate();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer hover-scale">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full flex items-center justify-center border-2 border-gray-300 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-12">
              <span className="text-blue-600 font-bold text-lg animate-pulse">भ</span>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-xl font-bold text-gray-900 bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                {t('bharatsetu')}
              </h1>
              <p className="text-xs text-gray-600 animate-fade-in">
                {t('empowering_india')}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2 group">
              <Globe className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300 hover:shadow-md"
              >
                {availableLanguages.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Voice Toggle */}
            <Button
              variant={isListening ? "default" : "outline"}
              size="sm"
              onClick={onVoiceToggle}
              className={`transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                isListening 
                  ? "bg-red-500 hover:bg-red-600 animate-pulse shadow-red-200" 
                  : "hover:bg-blue-50 hover:border-blue-400"
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              <span className="ml-2 hidden sm:inline">
                {isListening ? t('stop') : t('voice')}
              </span>
            </Button>

            {/* Login Button */}
            <Button
              variant="default"
              size="sm"
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <LogIn className="w-4 h-4" />
              <span className="ml-2 hidden sm:inline">{t('login')}</span>
            </Button>

            {/* Status Badge */}
            <Badge variant="outline" className="hidden lg:flex animate-fade-in hover:shadow-md transition-all duration-300">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              {t('live')}
            </Badge>

            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
