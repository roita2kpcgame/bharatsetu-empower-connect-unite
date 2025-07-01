
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

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
  isListening: boolean;
  onVoiceToggle: () => void;
}

const Header = ({ language, setLanguage, isListening, onVoiceToggle }: HeaderProps) => {
  const languages = ['English', 'हिंदी', 'বাংলা', 'தமிழ்', 'తెలుగు'];
  const navigate = useNavigate();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full flex items-center justify-center border-2 border-gray-300">
              <span className="text-blue-600 font-bold text-lg">भ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">BharatSetu</h1>
              <p className="text-xs text-gray-600">Empowering India</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Voice Toggle */}
            <Button
              variant={isListening ? "default" : "outline"}
              size="sm"
              onClick={onVoiceToggle}
              className={isListening ? "bg-red-500 hover:bg-red-600 animate-pulse" : ""}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              <span className="ml-2 hidden sm:inline">
                {isListening ? "Stop" : "Voice"}
              </span>
            </Button>

            {/* Login Button */}
            <Button
              variant="default"
              size="sm"
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <LogIn className="w-4 h-4" />
              <span className="ml-2 hidden sm:inline">Login</span>
            </Button>

            {/* Status Badge */}
            <Badge variant="outline" className="hidden lg:flex">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live
            </Badge>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
