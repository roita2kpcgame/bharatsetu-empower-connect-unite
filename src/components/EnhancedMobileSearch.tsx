
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Search, 
  Mic, 
  X, 
  Filter,
  TrendingUp,
  Clock,
  MapPin,
  Sparkles
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  relevance: number;
  location?: string;
}

interface EnhancedMobileSearchProps {
  onSearchResults?: (results: SearchResult[]) => void;
  placeholder?: string;
}

const EnhancedMobileSearch: React.FC<EnhancedMobileSearchProps> = ({
  onSearchResults,
  placeholder = "Search BharatSetu services..."
}) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Health services near me',
    'Legal document verification',
    'Job opportunities',
    'Education courses'
  ]);
  const [trendingSearches] = useState([
    'Digital Health ID',
    'Property registration',
    'Skill development',
    'Government schemes'
  ]);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'hi-IN,en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        if (event.results[0].isFinal) {
          handleSearch(transcript);
          setIsListening(false);
        }
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
        toast({
          title: "Voice Search Error",
          description: "Please try again or use text search",
          variant: "destructive"
        });
      };
    }
  }, [toast]);

  // AI-powered search with smart suggestions
  const handleSearch = async (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    
    // Simulate AI-powered search with contextual results
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const mockResults: SearchResult[] = [
      {
        id: '1',
        title: 'SwasthyaMitra Health Services',
        description: 'AI-powered health consultations and medical assistance',
        category: 'Health',
        relevance: 95,
        location: 'Available nationwide'
      },
      {
        id: '2',
        title: 'KanoonSathi Legal Aid',
        description: 'Legal document verification and consultation services',
        category: 'Legal',
        relevance: 90,
        location: 'Online & Offline'
      },
      {
        id: '3',
        title: 'YuvaRojgar Employment Portal',
        description: 'Find jobs and career opportunities with AI matching',
        category: 'Employment',
        relevance: 85,
        location: 'Pan India'
      },
      {
        id: '4',
        title: 'PathShaala+ Education',
        description: 'Interactive learning with AI tutors and live classes',
        category: 'Education',
        relevance: 80,
        location: 'Online Platform'
      }
    ].filter(result => 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(mockResults);
    setIsLoading(false);
    
    // Add to recent searches
    setRecentSearches(prev => {
      const updated = [searchQuery, ...prev.filter(s => s !== searchQuery)];
      return updated.slice(0, 5);
    });
    
    onSearchResults?.(mockResults);
  };

  const handleVoiceSearch = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
      toast({
        title: "Voice Search Active",
        description: "Speak now to search...",
      });
    }
  };

  const handleQuickSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    handleSearch(searchTerm);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4" ref={searchRef}>
      {/* Main Search Bar - Mobile Optimized */}
      <div className="relative">
        <div className={`relative transition-all duration-300 ${
          isExpanded ? 'transform scale-105' : ''
        }`}>
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder={placeholder}
            className="w-full h-12 md:h-14 pl-12 pr-20 text-base md:text-lg rounded-full border-2 border-blue-200 focus:border-blue-500 bg-white shadow-lg search-glow"
          />
          
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-blue-500" />
          
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleVoiceSearch}
              className={`rounded-full w-8 h-8 md:w-10 md:h-10 ${
                isListening ? 'bg-red-100 text-red-500 animate-pulse' : 'text-blue-500'
              }`}
            >
              <Mic className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSearch()}
              className="rounded-full w-8 h-8 md:w-10 md:h-10 text-blue-500"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Search Suggestions Dropdown - Mobile Optimized */}
        {isExpanded && (
          <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-2xl border-0 bg-white/95 backdrop-blur-md">
            <CardContent className="p-0">
              <ScrollArea className="max-h-80 md:max-h-96">
                {query.length === 0 && (
                  <div className="p-4 space-y-4">
                    {/* Recent Searches */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">Recent Searches</span>
                      </div>
                      <div className="space-y-2">
                        {recentSearches.map((search, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            onClick={() => handleQuickSearch(search)}
                            className="w-full justify-start text-left h-auto p-2 text-sm"
                          >
                            <Clock className="w-3 h-3 mr-2 text-gray-400" />
                            {search}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Trending Searches */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium text-gray-700">Trending</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {trendingSearches.map((trend, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="cursor-pointer hover:bg-blue-100 text-xs"
                            onClick={() => handleQuickSearch(trend)}
                          >
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {trend}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Search Results */}
                {results.length > 0 && (
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">
                        {results.length} results found
                      </span>
                      <Badge variant="outline" className="text-xs">
                        <Sparkles className="w-3 h-3 mr-1" />
                        AI Enhanced
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      {results.map((result) => (
                        <div
                          key={result.id}
                          className="p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 text-sm">
                                {result.title}
                              </h4>
                              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                {result.description}
                              </p>
                              {result.location && (
                                <div className="flex items-center mt-2">
                                  <MapPin className="w-3 h-3 text-gray-400 mr-1" />
                                  <span className="text-xs text-gray-500">
                                    {result.location}
                                  </span>
                                </div>
                              )}
                            </div>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {result.category}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Click outside to close */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};

export default EnhancedMobileSearch;
