
import { useState } from 'react';
import { TranslationProvider, useTranslation } from '@/contexts/TranslationContext';
import Header from '@/components/Header';
import ModuleCard from '@/components/ModuleCard';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import AIContextualHelp from '@/components/AIContextualHelp';
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
  Brain
} from 'lucide-react';
import { useAdvancedAI } from '@/hooks/useAdvancedAI';

const IndexContent = () => {
  const [isListening, setIsListening] = useState(false);
  const [showAIHelp, setShowAIHelp] = useState(false);
  const { t } = useTranslation();
  const { activateAI, deactivateAI } = useAdvancedAI();

  const modules = [
    {
      id: 'swasthya',
      title: t('swasthyamitra'),
      subtitle: t('ai_health_assistant'),
      description: 'Advanced AI-powered symptom analysis with real-time health monitoring, nearby clinic suggestions with live availability, and seamless Ayushman Bharat integration',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      features: ['AI Symptom Analysis', 'Smart Hospital Locator', 'Voice Health Check', 'Predictive Health Insights', 'Medicine Reminders', 'Telemedicine Integration']
    },
    {
      id: 'kanoon',
      title: t('kanoon_sathi'),
      subtitle: t('legal_aid_platform'),
      description: 'AI-powered legal document generator with natural language processing, expert consultation booking, and real-time case tracking with blockchain verification',
      icon: Scale,
      color: 'from-blue-500 to-indigo-600',
      features: ['Smart Document Templates', 'AI Legal Advisor', 'Expert Video Consultation', 'Blockchain Case Tracking', 'Rights Awareness Bot', 'Multi-language Legal Help']
    },
    {
      id: 'yuva',
      title: t('yuva_rojgar'),
      subtitle: t('career_empowerment'),
      description: 'Revolutionary AI career matching with personalized skill development, real-time job market analysis, and integrated government scheme recommendations',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      features: ['AI Skill Assessment', 'Smart Job Matching', 'PMKVY Integration', 'Interview AI Coach', 'Salary Predictor', 'Career Path Planner']
    },
    {
      id: 'samasya',
      title: t('samasya_report'),
      subtitle: t('civic_issue_reporter'),
      description: 'Next-gen civic engagement with AI-powered issue categorization, real-time photo analysis, GPS tracking, and direct municipality integration with automated follow-ups',
      icon: AlertCircle,
      color: 'from-orange-500 to-amber-600',
      features: ['AI Issue Detection', 'Smart Photo Analysis', 'Real-time GPS Tracking', 'Auto Municipality Routing', 'Community Impact Scoring', 'Predictive Issue Prevention']
    }
  ];

  const upcomingModules = [
    { name: 'PathShaala+', icon: BookOpen, description: 'AI-Powered Smart Study Portal with personalized learning paths', color: 'from-purple-500 to-indigo-500' },
    { name: 'KrishiBandhu', icon: Sprout, description: 'Advanced Farming AI with crop prediction and market analysis', color: 'from-green-600 to-emerald-500' },
    { name: 'AbleAccess Map', icon: MapPin, description: 'Accessibility mapping with AR navigation for differently-abled', color: 'from-blue-500 to-cyan-500' }
  ];

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Enhanced voice recognition logic would go here
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header 
        isListening={isListening}
        onVoiceToggle={handleVoiceToggle}
      />
      
      {/* Enhanced Hero Section */}
      <section className="container mx-auto px-4 pt-8 pb-16 animate-fade-in relative">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-6 animate-scale-in">
                {t('bharatsetu')}
              </h1>
              <div className="absolute -top-4 -right-4 animate-bounce">
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('all_in_one_platform')}
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t('one_app_multiple_solutions')}
          </p>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={toggleAIHelp}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Bot className="w-5 h-5 mr-2" />
              {t('get_ai_help')}
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Quick Start
            </Button>
            
            <Button
              variant="outline" 
              className="border-2 border-green-300 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Brain className="w-5 h-5 mr-2" />
              Smart Features
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Badge variant="secondary" className="px-4 py-2 text-sm hover-scale transition-all duration-300 hover:shadow-lg bg-red-100 text-red-700 border border-red-200">
              <Heart className="w-4 h-4 mr-2" />
              {t('health')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm hover-scale transition-all duration-300 hover:shadow-lg bg-blue-100 text-blue-700 border border-blue-200">
              <Scale className="w-4 h-4 mr-2" />
              {t('legal_aid')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm hover-scale transition-all duration-300 hover:shadow-lg bg-green-100 text-green-700 border border-green-200">
              <Briefcase className="w-4 h-4 mr-2" />
              {t('employment')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm hover-scale transition-all duration-300 hover:shadow-lg bg-orange-100 text-orange-700 border border-orange-200">
              <AlertCircle className="w-4 h-4 mr-2" />
              {t('civic_issues')}
            </Badge>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <StatsSection />
        </div>
      </section>

      {/* Enhanced Core Modules Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('core_modules')}
              </h2>
              <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Next-generation AI-powered solutions designed specifically for India's diverse needs with advanced machine learning and real-time analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => (
            <div 
              key={module.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <ModuleCard module={module} />
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Upcoming Features */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {t('coming_soon')}
          </h2>
          <p className="text-lg text-gray-600">
            Revolutionary modules to expand the AI ecosystem with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingModules.map((module, index) => (
            <Card 
              key={index} 
              className="text-center p-6 hover:shadow-2xl transition-all duration-500 border-dashed border-2 border-gray-300 hover-scale animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${0.3 * index}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <CardContent className="pt-6 relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{module.name}</h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <Badge variant="outline" className="animate-pulse">
                  <Zap className="w-3 h-3 mr-1" />
                  AI Powered
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Enhanced Technology Stack */}
      <section className="bg-white/50 backdrop-blur-sm py-16 animate-fade-in relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Built with Next-Gen AI Technology
            </h2>
            <p className="text-lg text-gray-600">
              Advanced AI, machine learning, and blockchain integration for a secure, scalable, and intelligent platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: 'React & AI', desc: 'Modern frontend with GPT-4 integration', color: 'from-blue-500 to-cyan-500' },
              { icon: Shield, title: 'Blockchain Security', desc: 'Decentralized data protection', color: 'from-green-500 to-emerald-500' },
              { icon: Mic, title: 'Voice AI', desc: 'Advanced speech recognition in 10+ languages', color: 'from-purple-500 to-pink-500' },
              { icon: TrendingUp, title: 'Predictive Analytics', desc: 'Real-time insights and forecasting', color: 'from-orange-500 to-red-500' }
            ].map((tech, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in hover-scale transition-all duration-300 group"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-2xl transition-all duration-300 group-hover:rotate-12`}>
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{tech.title}</h3>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <AIChat />
      
      {/* AI Contextual Help */}
      <AIContextualHelp
        currentPage="home"
        isVisible={showAIHelp}
        onClose={() => setShowAIHelp(false)}
      />
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
