
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Mic, 
  MicOff, 
  Volume2, 
  Sparkles, 
  Bot, 
  Zap,
  TrendingUp,
  Clock,
  Star
} from 'lucide-react';

interface SmartSearchBarProps {
  onSearch: (query: string) => void;
}

const SmartSearchBar = ({ onSearch }: SmartSearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Health check symptoms', 'Legal document help', 'Job opportunities near me', 'Report civic issue'
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const recognitionRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Smart suggestions based on BharatSetu modules
  const smartSuggestions = [
    'Find doctors near me', 'Legal aid for property', 'Government job schemes',
    'Report water problem', 'Health insurance claim', 'Marriage certificate',
    'Skill development courses', 'Traffic violation fine', 'Aadhaar card update',
    'Pension scheme eligibility', 'Birth certificate online', 'Voter ID registration'
  ];

  useEffect(() => {
    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'hi-IN'; // Hindi and English

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setIsListening(false);
        handleSearch(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }
  }, []);

  const handleVoiceSearch = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.start();
        setIsListening(true);
      } else {
        alert('Voice search not supported in this browser');
      }
    }
  };

  const handleSearch = (searchQuery: string = query) => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      // Add to recent searches
      setRecentSearches(prev => [searchQuery, ...prev.filter(s => s !== searchQuery)].slice(0, 4));
      setShowSuggestions(false);
      
      // Speak the search confirmation
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(`Searching for ${searchQuery}`);
        utterance.lang = 'en-IN';
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
      }
    }
  };

  const updateSuggestions = (value: string) => {
    if (value.length > 1) {
      const filtered = smartSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 6));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    updateSuggestions(value);
  };

  const selectSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    handleSearch(suggestion);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Search Bar */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        
        <div className="relative bg-white/90 backdrop-blur-md rounded-full border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl">
          <div className="flex items-center p-2">
            <div className="flex-1 flex items-center space-x-3 px-4">
              <Search className="w-5 h-5 text-gray-500" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Ask me anything... (Try: 'Find hospitals near me' or 'Legal help')"
                value={query}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="border-0 bg-transparent placeholder:text-gray-500 focus:ring-0 text-base"
                onFocus={() => setShowSuggestions(true)}
              />
            </div>
            
            {/* Voice Search Button */}
            <Button
              type="button"
              onClick={handleVoiceSearch}
              className={`mr-2 rounded-full w-12 h-12 p-0 transition-all duration-300 ${
                isListening 
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                  : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
              }`}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </Button>
            
            {/* Search Button */}
            <Button
              type="button"
              onClick={() => handleSearch()}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-full px-6 h-12"
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Voice Listening Indicator */}
      {isListening && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
          <Card className="p-4 bg-red-50 border-red-200 animate-pulse">
            <div className="flex items-center space-x-2 text-red-600">
              <Volume2 className="w-5 h-5 animate-bounce" />
              <span className="text-sm font-medium">Listening... Speak now</span>
              <div className="flex space-x-1">
                <div className="w-2 h-4 bg-red-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-6 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-5 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Smart Suggestions Dropdown */}
      {showSuggestions && (query.length > 1 ? suggestions.length > 0 : true) && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-40 bg-white/95 backdrop-blur-md border shadow-xl animate-fade-in">
          <CardContent className="p-4">
            {query.length > 1 ? (
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Bot className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-gray-700">AI Suggestions</span>
                  <Badge variant="secondary" className="text-xs">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Smart
                  </Badge>
                </div>
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => selectSuggestion(suggestion)}
                      className="flex items-center space-x-3 p-2 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors group"
                    >
                      <Search className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                      <span className="text-sm text-gray-700 group-hover:text-blue-700">{suggestion}</span>
                      <Zap className="w-3 h-3 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold text-gray-700">Recent Searches</span>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <div
                      key={index}
                      onClick={() => selectSuggestion(search)}
                      className="flex items-center space-x-3 p-2 hover:bg-green-50 rounded-lg cursor-pointer transition-colors group"
                    >
                      <Clock className="w-4 h-4 text-gray-400 group-hover:text-green-500" />
                      <span className="text-sm text-gray-700 group-hover:text-green-700">{search}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t mt-4 pt-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-semibold text-gray-700">Popular Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {smartSuggestions.slice(0, 4).map((suggestion, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-purple-50 hover:border-purple-300 transition-colors"
                        onClick={() => selectSuggestion(suggestion)}
                      >
                        {suggestion}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Search Tips */}
      <div className="mt-4 text-center">
        <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
          <span className="flex items-center">
            <Mic className="w-3 h-3 mr-1" />
            Voice Search
          </span>
          <span>•</span>
          <span className="flex items-center">
            <Bot className="w-3 h-3 mr-1" />
            AI Powered
          </span>
          <span>•</span>
          <span className="flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            Real-time Results
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmartSearchBar;
