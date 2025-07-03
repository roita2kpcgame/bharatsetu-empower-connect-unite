
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
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
  Star,
  Brain,
  ArrowRight,
  Filter,
  MapPin,
  Calendar,
  User
} from 'lucide-react';

interface SmartSearchBarProps {
  onSearch: (query: string) => void;
}

const SmartSearchBar = ({ onSearch }: SmartSearchBarProps) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Health check symptoms', 'Legal document help', 'Job opportunities near me', 'Report civic issue'
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const recognitionRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Enhanced smart suggestions with routing
  const smartSuggestions = [
    { text: 'Find doctors near me', module: 'swasthya-mitra', category: 'Health' },
    { text: 'Legal aid for property', module: 'kanoon-sathi', category: 'Legal' },
    { text: 'Government job schemes', module: 'yuva-rojgar', category: 'Employment' },
    { text: 'Report water problem', module: 'samasya-report', category: 'Civic' },
    { text: 'AI study classes', module: 'pathshaala-plus', category: 'Education' },
    { text: 'Farming assistance', module: 'krishi-bandhu', category: 'Agriculture' },
    { text: 'Accessibility map', module: 'able-access-map', category: 'Accessibility' },
    { text: 'Health insurance claim', module: 'swasthya-mitra', category: 'Health' },
    { text: 'Marriage certificate', module: 'kanoon-sathi', category: 'Legal' },
    { text: 'Skill development courses', module: 'yuva-rojgar', category: 'Employment' },
    { text: 'Traffic violation fine', module: 'samasya-report', category: 'Civic' },
    { text: 'Class 10 math videos', module: 'pathshaala-plus', category: 'Education' }
  ];

  const categories = ['All', 'Health', 'Legal', 'Employment', 'Civic', 'Education', 'Agriculture', 'Accessibility'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'hi-IN';

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

  const processWithGPT4 = async (searchQuery: string) => {
    setIsLoading(true);
    try {
      // Simulate GPT-4 processing with smart routing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const matchedSuggestion = smartSuggestions.find(s => 
        s.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery.toLowerCase().includes(s.text.toLowerCase().split(' ')[0])
      );

      if (matchedSuggestion) {
        navigate(`/${matchedSuggestion.module}`);
      }
      
      // Simulate AI response
      const aiResponse = `Based on your query "${searchQuery}", I found relevant services in our platform. Redirecting you to the best match...`;
      
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(aiResponse);
        utterance.lang = 'en-IN';
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
      }
      
    } catch (error) {
      console.error('GPT-4 processing error:', error);
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleSearch = async (searchQuery: string = query) => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setRecentSearches(prev => [searchQuery, ...prev.filter(s => s !== searchQuery)].slice(0, 4));
      setShowSuggestions(false);
      
      // Process with GPT-4 for smart routing
      await processWithGPT4(searchQuery);
    }
  };

  const updateSuggestions = (value: string) => {
    if (value.length > 1) {
      const filtered = smartSuggestions.filter(suggestion => {
        const matchesText = suggestion.text.toLowerCase().includes(value.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || suggestion.category === selectedCategory;
        return matchesText && matchesCategory;
      });
      setSuggestions(filtered.map(s => s.text).slice(0, 8));
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

  const filteredSuggestions = smartSuggestions.filter(s => 
    selectedCategory === 'All' || s.category === selectedCategory
  );

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Enhanced Search Bar */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 animate-pulse"></div>
        
        <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-2xl hover:shadow-3xl">
          {/* Category Filter */}
          <div className="flex items-center space-x-2 p-3 border-b border-gray-100">
            <Filter className="w-4 h-4 text-gray-500" />
            <div className="flex space-x-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap text-xs ${
                    selectedCategory === category 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Main Search Input */}
          <div className="flex items-center p-4">
            <div className="flex-1 flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <Search className="w-5 h-5 text-white" />
              </div>
              <Input
                ref={inputRef}
                type="text"
                placeholder="Ask me anything... (Try: 'Find hospitals near me' or 'AI study classes')"
                value={query}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="border-0 bg-transparent placeholder:text-gray-500 focus:ring-0 text-lg font-medium"
                onFocus={() => setShowSuggestions(true)}
              />
              
              {isLoading && (
                <div className="flex items-center space-x-2 text-blue-500">
                  <Brain className="w-5 h-5 animate-spin" />
                  <span className="text-sm">AI Processing...</span>
                </div>
              )}
            </div>
            
            {/* Voice Search Button */}
            <Button
              type="button"
              onClick={handleVoiceSearch}
              className={`mr-3 rounded-full w-14 h-14 p-0 transition-all duration-300 ${
                isListening 
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse shadow-lg shadow-red-500/50' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/50'
              }`}
            >
              {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </Button>
            
            {/* Search Button */}
            <Button
              type="button"
              onClick={() => handleSearch()}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 rounded-xl px-8 h-14 text-white font-semibold shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              {isLoading ? (
                <Brain className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Search with AI
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Voice Listening Indicator */}
      {isListening && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50">
          <Card className="p-6 bg-red-50 border-red-200 animate-pulse shadow-xl">
            <div className="flex items-center space-x-3 text-red-600">
              <Volume2 className="w-6 h-6 animate-bounce" />
              <span className="text-lg font-semibold">Listening... Speak now</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-8 bg-red-400 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Enhanced Suggestions Dropdown */}
      {showSuggestions && (query.length > 1 ? suggestions.length > 0 : true) && (
        <Card className="absolute top-full left-0 right-0 mt-4 z-40 bg-white/98 backdrop-blur-xl border-2 border-gray-200 shadow-2xl animate-fade-in">
          <CardContent className="p-6">
            {query.length > 1 ? (
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">AI-Powered Suggestions</span>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    <Sparkles className="w-3 h-3 mr-1" />
                    GPT-4 Enhanced
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => selectSuggestion(suggestion)}
                      className="flex items-center justify-between p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl cursor-pointer transition-all duration-300 group border border-gray-100 hover:border-blue-200 hover:shadow-md"
                    >
                      <div className="flex items-center space-x-3">
                        <Search className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        <span className="text-gray-700 group-hover:text-blue-700 font-medium">{suggestion}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span className="text-lg font-semibold text-gray-800">Recent Searches</span>
                </div>
                <div className="space-y-2 mb-6">
                  {recentSearches.map((search, index) => (
                    <div
                      key={index}
                      onClick={() => selectSuggestion(search)}
                      className="flex items-center space-x-3 p-3 hover:bg-green-50 rounded-lg cursor-pointer transition-colors group"
                    >
                      <Clock className="w-4 h-4 text-gray-400 group-hover:text-green-500" />
                      <span className="text-gray-700 group-hover:text-green-700">{search}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="w-5 h-5 text-purple-500" />
                    <span className="text-lg font-semibold text-gray-800">Popular in {selectedCategory}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {filteredSuggestions.slice(0, 6).map((suggestion, index) => (
                      <div
                        key={index}
                        onClick={() => selectSuggestion(suggestion.text)}
                        className="flex items-center justify-between p-3 hover:bg-purple-50 rounded-lg cursor-pointer transition-colors group border border-gray-100 hover:border-purple-200"
                      >
                        <div>
                          <span className="text-gray-700 group-hover:text-purple-700 font-medium">{suggestion.text}</span>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {suggestion.category}
                            </Badge>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Enhanced Search Tips */}
      <div className="mt-6 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center space-x-2 text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <Mic className="w-4 h-4 text-purple-500" />
            <span>Voice Search</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <Bot className="w-4 h-4 text-blue-500" />
            <span>GPT-4 Powered</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span>Smart Routing</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Instant Results</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSearchBar;
