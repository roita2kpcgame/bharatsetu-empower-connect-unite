
import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Mic, 
  MicOff, 
  MapPin, 
  Clock, 
  TrendingUp,
  Sparkles,
  Bot,
  X,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SmartSearchBar = () => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [recentSearches] = useState(['Health check', 'Legal documents', 'Job opportunities']);
  const [isLoading, setIsLoading] = useState(false);
  const recognitionRef = useRef<any>(null);
  const navigate = useNavigate();

  const smartSuggestions = [
    { 
      icon: Search, 
      text: 'Find nearby hospitals', 
      category: 'Health', 
      color: 'text-red-500',
      action: () => navigate('/swasthya-mitra')
    },
    { 
      icon: Search, 
      text: 'Legal document help', 
      category: 'Legal', 
      color: 'text-blue-500',
      action: () => navigate('/kanoon-sathi')
    },
    { 
      icon: Search, 
      text: 'Job search assistance', 
      category: 'Career', 
      color: 'text-green-500',
      action: () => navigate('/yuva-rojgar')
    },
    { 
      icon: Search, 
      text: 'Report civic issues', 
      category: 'Civic', 
      color: 'text-orange-500',
      action: () => navigate('/samasya-report')
    }
  ];

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        handleSearch(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const handleVoiceSearch = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleSearch = async (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setShowSuggestions(true);

    // Simulate AI-powered search
    setTimeout(() => {
      const mockResults = [
        {
          title: 'SwasthyaMitra Health Check',
          description: 'Get instant health analysis and nearby hospital recommendations',
          category: 'Health',
          relevance: 95,
          action: () => navigate('/swasthya-mitra')
        },
        {
          title: 'Legal Document Generator',
          description: 'Create legal documents with AI assistance',
          category: 'Legal',
          relevance: 88,
          action: () => navigate('/kanoon-sathi')
        },
        {
          title: 'Smart Job Matching',
          description: 'Find jobs that match your skills and preferences',
          category: 'Career',
          relevance: 92,
          action: () => navigate('/yuva-rojgar')
        }
      ].filter(result => 
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(mockResults);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setQuery('');
    setShowSuggestions(false);
    setSearchResults([]);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Search Input */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        <div className="relative bg-white/90 backdrop-blur-md rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
          <div className="flex items-center p-4">
            <Search className="w-6 h-6 text-gray-400 mr-4" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Ask me anything about government services, health, legal aid, jobs..."
              className="flex-1 text-lg border-none bg-transparent focus:ring-0 focus:outline-none placeholder:text-gray-500"
            />
            
            {query && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="mr-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-4 h-4" />
              </Button>
            )}

            <Button
              variant={isListening ? "default" : "ghost"}
              size="sm"
              onClick={handleVoiceSearch}
              className={`mr-2 rounded-full transition-all duration-300 ${
                isListening 
                  ? "bg-red-500 hover:bg-red-600 text-white animate-pulse" 
                  : "hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </Button>

            <Button
              onClick={() => handleSearch()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl px-6 py-2 transform hover:scale-105 transition-all duration-300"
            >
              <Bot className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Voice Status */}
      {isListening && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
          <Badge variant="secondary" className="bg-red-100 text-red-800 animate-pulse">
            <Mic className="w-3 h-3 mr-1" />
            Listening...
          </Badge>
        </div>
      )}

      {/* Search Suggestions & Results */}
      {showSuggestions && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-40 bg-white/95 backdrop-blur-md shadow-2xl border-0 animate-fade-in">
          <CardContent className="p-6">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-gray-600">AI is searching...</span>
              </div>
            ) : searchResults.length > 0 ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
                  Smart Results
                </h3>
                <div className="space-y-3">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      onClick={result.action}
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 cursor-pointer transition-all duration-300 hover:shadow-md group"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {result.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                        <div className="flex items-center mt-2">
                          <Badge variant="outline" className="text-xs">
                            {result.category}
                          </Badge>
                          <span className="ml-2 text-xs text-green-600 font-medium">
                            {result.relevance}% match
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                {/* Quick Suggestions */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {smartSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={suggestion.action}
                      className="flex items-center p-3 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 cursor-pointer transition-all duration-300 hover:shadow-md group"
                    >
                      <suggestion.icon className={`w-5 h-5 mr-3 ${suggestion.color}`} />
                      <div>
                        <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {suggestion.text}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">{suggestion.category}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Recent Searches
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
                          onClick={() => {
                            setQuery(search);
                            handleSearch(search);
                          }}
                        >
                          {search}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Overlay to close suggestions */}
      {showSuggestions && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setShowSuggestions(false)}
        />
      )}
    </div>
  );
};

export default SmartSearchBar;
