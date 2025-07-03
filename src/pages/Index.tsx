import { useState, useRef, useEffect } from 'react';
import { TranslationProvider, useTranslation } from '@/contexts/TranslationContext';
import Header from '@/components/Header';
import ModuleCard from '@/components/ModuleCard';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import EnhancedAIChat from '@/components/EnhancedAIChat';
import AIContextualHelp from '@/components/AIContextualHelp';
import MobileOptimizedSearch from '@/components/MobileOptimizedSearch';
import GPSLocationTracker from '@/components/GPSLocationTracker';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Scale, 
  Briefcase, 
  AlertCircle, 
  Globe, 
  Users, 
  TrendingUp,
  Shield,
  BookOpen,
  Sprout,
  MapPin,
  Mic,
  Bot,
  Sparkles,
  Zap,
  Brain,
  ArrowRight,
  Rocket,
  Search,
  Volume2,
  Waves,
  Star,
  Camera,
  Navigation,
  Smartphone,
  Cpu,
  Lock,
  Eye
} from 'lucide-react';
import { useAdvancedAI } from '@/hooks/useAdvancedAI';
import { useFutureProofing } from '@/hooks/useFutureProofing';
import { useNavigate } from 'react-router-dom';

const IndexContent = () => {
  const [isListening, setIsListening] = useState(false);
  const [showAIHelp, setShowAIHelp] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const { t } = useTranslation();
  const { activateAI, deactivateAI } = useAdvancedAI();
  const { systemHealth, enableFeature, features } = useFutureProofing();
  const navigate = useNavigate();
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize audio visualization
  useEffect(() => {
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      audioContextRef.current = new AudioContext();
    }
  }, []);

  const modules = [
    {
      id: 'swasthya',
      title: t('swasthyamitra'),
      subtitle: t('ai_health_assistant'),
      description: 'AI-powered healthcare with symptom analysis, hospital finder, telemedicine, and health insurance integration with predictive health insights',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      features: ['AI Symptom Analysis', 'Smart Hospital Locator', 'Voice Health Check', 'Predictive Health Insights', 'Medicine Reminders', 'Telemedicine Integration', 'Emergency Response', 'Health Insurance Claims']
    },
    {
      id: 'kanoon',
      title: t('kanoon_sathi'),
      subtitle: t('legal_aid_platform'),
      description: 'Revolutionary AI legal assistant with document generation, expert consultation, case tracking, and blockchain verification for transparency',
      icon: Scale,
      color: 'from-blue-500 to-indigo-600',
      features: ['AI Legal Advisor', 'Smart Document Generator', 'Expert Video Consultation', 'Blockchain Case Tracking', 'Rights Awareness Bot', 'Multi-language Legal Help', 'Court Fee Calculator', 'Legal Aid Integration']
    },
    {
      id: 'yuva',
      title: t('yuva_rojgar'),
      subtitle: t('career_empowerment'),
      description: 'Next-gen AI career platform with skill assessment, job matching, interview coaching, and government scheme integration',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      features: ['AI Skill Assessment', 'Smart Job Matching', 'PMKVY Integration', 'Interview AI Coach', 'Salary Predictor', 'Career Path Planner', 'Resume Builder', 'Market Analysis']
    },
    {
      id: 'samasya',
      title: t('samasya_report'),
      subtitle: t('civic_issue_reporter'),
      description: 'Smart civic engagement with AI issue categorization, photo analysis, GPS tracking, and direct government integration',
      icon: AlertCircle,
      color: 'from-orange-500 to-amber-600',
      features: ['AI Issue Detection', 'Smart Photo Analysis', 'Real-time GPS Tracking', 'Auto Municipality Routing', 'Community Impact Scoring', 'Predictive Issue Prevention', 'Citizen Feedback', 'Government Response Portal']
    }
  ];

  const upcomingModules = [
    { 
      name: 'PathShaala+', 
      icon: BookOpen, 
      description: 'AI-Powered Smart Study Portal with personalized learning paths and animated video lectures', 
      color: 'from-purple-500 to-indigo-500',
      route: '/pathshaala-plus',
      features: ['AI Video Lectures', 'Personalized Learning', 'Exam Preparation', 'Multi-Age Support']
    },
    { 
      name: 'KrishiBandhu', 
      icon: Sprout, 
      description: 'Advanced Farming AI with crop prediction, market analysis and real-time agricultural news', 
      color: 'from-green-600 to-emerald-500',
      route: '/krishi-bandhu',
      features: ['Crop Prediction', 'Market Analysis', 'Weather Forecasting', 'Real-time News']
    },
    { 
      name: 'AbleAccess Map', 
      icon: MapPin, 
      description: 'Accessibility mapping with AR navigation and camera-based assistance for differently-abled', 
      color: 'from-blue-500 to-cyan-500',
      route: '/able-access-map',
      features: ['AR Navigation', 'Camera Integration', 'Voice Guidance', 'Accessibility Mapping']
    }
  ];

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
  };

  const toggleAIHelp = () => {
    if (showAIHelp) {
      setShowAIHelp(false);
      deactivateAI();
    } else {
      setShowAIHelp(true);
      activateAI('home');
    }
  };

  const handleLocationFound = (location: {lat: number, lng: number}) => {
    setUserLocation(location);
  };

  const openMobileSearch = () => {
    setShowMobileSearch(true);
  };

  const closeMobileSearch = () => {
    setShowMobileSearch(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
      {/* Mobile-Optimized Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-r from-saffron-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 md:w-32 h-16 md:h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header 
        isListening={isListening}
        onVoiceToggle={handleVoiceToggle}
      />
      
      {/* Enhanced Mobile-First Hero Section */}
      <section className="container mx-auto px-4 pt-4 md:pt-8 pb-8 md:pb-16 animate-fade-in relative">
        <div className="text-center mb-6 md:mb-12">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-4 md:mb-6 animate-scale-in">
                {t('bharatsetu')}
              </h1>
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 animate-bounce">
                <Sparkles className="w-4 md:w-8 h-4 md:h-8 text-yellow-500" />
              </div>
              {/* Removed Om symbol from cultural elements */}
              <div className="absolute -bottom-2 md:-bottom-4 -right-4 md:-right-8 text-xl md:text-3xl animate-pulse opacity-30">🇮🇳</div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-3 md:mb-4 max-w-4xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            {t('all_in_one_platform')}
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
            One App Multiple Solutions Infinite Impact
          </p>

          {/* Mobile-Optimized Smart Search */}
          <div className="mb-6 md:mb-8 animate-fade-in px-2" style={{ animationDelay: '0.5s' }}>
            <div className="md:hidden">
              <Button
                onClick={openMobileSearch}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Search className="w-5 h-5 mr-3" />
                <span className="text-lg">Search with AI...</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="hidden md:block">
              <MobileOptimizedSearch onSearch={(query) => console.log('Search:', query)} />
            </div>
          </div>

          {/* GPS Location Tracker - Mobile Optimized */}
          <div className="mb-6 md:mb-8 animate-fade-in px-2" style={{ animationDelay: '0.6s' }}>
            <GPSLocationTracker onLocationFound={handleLocationFound} />
          </div>

          {/* Enhanced Action Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8 animate-fade-in px-4" style={{ animationDelay: '0.7s' }}>
            <Button
              onClick={toggleAIHelp}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 md:px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Bot className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">{t('get_ai_help')}</span>
            </Button>
            
            <Button
              onClick={() => navigate('/modules')}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 md:px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Rocket className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Launch Modules</span>
            </Button>
          </div>

          {/* Enhanced Badges - Mobile Optimized */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8 animate-fade-in px-4" style={{ animationDelay: '0.8s' }}>
            <Badge variant="secondary" className="px-3 md:px-4 py-2 text-xs md:text-sm hover-scale transition-all duration-300 hover:shadow-lg bg-red-100 text-red-700 border border-red-200">
              <Heart className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
              <span>{t('health')}</span>
            </Badge>
            <Badge variant="secondary" className="px-3 md:px-4 py-2 text-xs md:text-sm hover-scale transition-all duration-300 hover:shadow-lg bg-blue-100 text-blue-700 border border-blue-200">
              <Scale className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
              <span>{t('legal_aid')}</span>
            </Badge>
            <Badge variant="secondary" className="px-3 md:px-4 py-2 text-xs md:text-sm hover-scale transition-all duration-300 hover:shadow-lg bg-green-100 text-green-700 border border-green-200">
              <Briefcase className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
              <span>{t('employment')}</span>
            </Badge>
            <Badge variant="secondary" className="px-3 md:px-4 py-2 text-xs md:text-sm hover-scale transition-all duration-300 hover:shadow-lg bg-orange-100 text-orange-700 border border-orange-200">
              <AlertCircle className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
              <span>{t('civic_issues')}</span>
            </Badge>
          </div>

          {/* System Health Indicator - Mobile Optimized */}
          <div className="mb-6 md:mb-8 animate-fade-in px-4" style={{ animationDelay: '0.9s' }}>
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 max-w-md mx-auto">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">System Health</span>
                  <Badge className="bg-green-100 text-green-700 text-xs">
                    {systemHealth.overall}% Optimal
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-3 h-3 text-blue-500" />
                    <span>Performance: {systemHealth.performance}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock className="w-3 h-3 text-green-500" />
                    <span>Security: {systemHealth.security}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-3 h-3 text-purple-500" />
                    <span>Mobile: {systemHealth.mobile}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-3 h-3 text-orange-500" />
                    <span>Accessibility: {systemHealth.accessibility}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="animate-fade-in px-2 md:px-0" style={{ animationDelay: '1.0s' }}>
          <StatsSection />
        </div>
      </section>

      {/* Core Modules Section - Mobile Optimized */}
      <section className="container mx-auto px-4 pb-8 md:pb-16">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('core_modules')}
              </h2>
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 animate-pulse" />
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Next-generation AI-powered solutions designed for India's diverse needs with advanced machine learning and cultural integration
          </p>
          <Button
            onClick={() => navigate('/modules')}
            variant="outline"
            className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-4 md:px-6 py-2 rounded-full relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-purple-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <span className="relative z-10">View All Modules</span>
            <ArrowRight className="w-4 h-4 ml-2 relative z-10" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {modules.map((module, index) => (
            <div 
              key={module.id} 
              className="animate-fade-in hover:scale-105 transition-all duration-500" 
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <ModuleCard module={module} />
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Features - Mobile Optimized */}
      <section className="container mx-auto px-4 pb-8 md:pb-16">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {t('coming_soon')} - Now Available!
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Revolutionary modules with cutting-edge AI technology and unique features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {upcomingModules.map((module, index) => (
            <Card 
              key={index} 
              className="text-center p-4 md:p-6 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover-scale animate-fade-in relative overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${0.3 * index}s` }}
              onClick={() => navigate(module.route)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <CardContent className="pt-4 md:pt-6 relative z-10">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${module.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <module.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{module.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{module.description}</p>
                
                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-3 md:mb-4">
                  {module.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    className={`flex-1 bg-gradient-to-r ${module.color} hover:opacity-90`}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(module.route);
                    }}
                  >
                    <Rocket className="w-3 h-3 mr-1" />
                    Launch
                  </Button>
                  <Badge variant="outline" className="animate-pulse px-2 py-1">
                    <Zap className="w-3 h-3 mr-1" />
                    Live
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Enhanced Technology Stack - Mobile Optimized */}
      <section className="bg-white/50 backdrop-blur-sm py-8 md:py-16 animate-fade-in relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 via-white/50 to-green-50/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Built with Next-Gen AI & Innovation
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Advanced AI, mobile-first design, and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Globe, title: 'React & AI', desc: 'Modern frontend with GPT-4', color: 'from-blue-500 to-cyan-500' },
              { icon: Shield, title: 'Security First', desc: 'Advanced encryption & privacy', color: 'from-green-500 to-emerald-500' },
              { icon: Mic, title: 'Voice AI', desc: 'Multi-language speech recognition', color: 'from-purple-500 to-pink-500' },
              { icon: TrendingUp, title: 'Smart Analytics', desc: 'Real-time insights & predictions', color: 'from-orange-500 to-red-500' }
            ].map((tech, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in hover-scale transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className={`w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 hover:shadow-2xl transition-all duration-300 group-hover:rotate-12`}>
                  <tech.icon className="w-8 md:w-10 h-8 md:h-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">{tech.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <EnhancedAIChat />
      
      {/* AI Contextual Help */}
      <AIContextualHelp
        currentPage="home"
        isVisible={showAIHelp}
        onClose={() => setShowAIHelp(false)}
      />

      {/* Mobile Search Modal */}
      {showMobileSearch && (
        <MobileOptimizedSearch
          onSearch={(query) => console.log('Search:', query)}
          isFullScreen={true}
          onClose={closeMobileSearch}
        />
      )}
    </div>
  );
};

const Index = () => {
  return (
    <TranslationProvider>
      <IndexContent />
    </TranslationProvider>
  );
};

export default Index;
