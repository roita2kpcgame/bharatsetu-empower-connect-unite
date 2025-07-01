
import { useState } from 'react';
import { TranslationProvider, useTranslation } from '@/contexts/TranslationContext';
import Header from '@/components/Header';
import ModuleCard from '@/components/ModuleCard';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Mic
} from 'lucide-react';

const IndexContent = () => {
  const [isListening, setIsListening] = useState(false);
  const { t } = useTranslation();

  const modules = [
    {
      id: 'swasthya',
      title: t('swasthyamitra'),
      subtitle: t('ai_health_assistant'),
      description: 'Smart symptom checker with nearby clinic suggestions and Ayushman Bharat integration',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      features: ['AI Symptom Analysis', 'Hospital Locator', 'Medicine Reminders', 'Health Records']
    },
    {
      id: 'kanoon',
      title: t('kanoon_sathi'),
      subtitle: t('legal_aid_platform'),
      description: 'Document generator for FIRs, certificates, and legal aid with expert consultation',
      icon: Scale,
      color: 'from-blue-500 to-indigo-600',
      features: ['Legal Document Templates', 'Expert Consultation', 'Case Tracking', 'Rights Awareness']
    },
    {
      id: 'yuva',
      title: t('yuva_rojgar'),
      subtitle: t('career_empowerment'),
      description: 'AI-powered skill analysis with personalized career plans and government scheme finder',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      features: ['Skill Assessment', 'Job Matching', 'PMKVY Integration', 'Interview Prep']
    },
    {
      id: 'samasya',
      title: t('samasya_report'),
      subtitle: t('civic_issue_reporter'),
      description: 'Photo-based civic issue reporting with GPS tracking and municipality integration',
      icon: AlertCircle,
      color: 'from-orange-500 to-amber-600',
      features: ['Issue Reporting', 'Photo Documentation', 'Progress Tracking', 'Community Updates']
    }
  ];

  const upcomingModules = [
    { name: 'PathShaala+', icon: BookOpen, description: 'Smart Study Portal' },
    { name: 'KrishiBandhu', icon: Sprout, description: 'Farming AI Tools' },
    { name: 'AbleAccess Map', icon: MapPin, description: 'Accessibility Mapping' }
  ];

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Voice recognition logic would go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Header 
        isListening={isListening}
        onVoiceToggle={handleVoiceToggle}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 pb-16 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-6 animate-scale-in">
            {t('bharatsetu')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('all_in_one_platform')}
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t('one_app_multiple_solutions')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Badge variant="secondary" className="px-4 py-2 text-sm hover-scale transition-all duration-300 hover:shadow-lg">
              <Heart className="w-4 h-4 mr-2" />
              {t('health')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm hover-scale transition-all duration-300 hover:shadow-lg">
              <Scale className="w-4 h-4 mr-2" />
              {t('legal_aid')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm hover-scale transition-all duration-300 hover:shadow-lg">
              <Briefcase className="w-4 h-4 mr-2" />
              {t('employment')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm hover-scale transition-all duration-300 hover:shadow-lg">
              <AlertCircle className="w-4 h-4 mr-2" />
              {t('civic_issues')}
            </Badge>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <StatsSection />
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('core_modules')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Integrated solutions powered by AI and designed for India's diverse needs
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

      {/* Upcoming Features */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {t('coming_soon')}
          </h2>
          <p className="text-lg text-gray-600">
            More modules to expand the ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingModules.map((module, index) => (
            <Card 
              key={index} 
              className="text-center p-6 hover:shadow-lg transition-all duration-300 border-dashed border-2 border-gray-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${0.3 * index}s` }}
            >
              <CardContent className="pt-6">
                <module.icon className="w-12 h-12 mx-auto mb-4 text-gray-500 hover:text-blue-600 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{module.name}</h3>
                <p className="text-gray-600">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-white/50 backdrop-blur-sm py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Built with Cutting-Edge Technology
            </h2>
            <p className="text-lg text-gray-600">
              Scalable, secure, and accessible for all Indians
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: 'React & AI', desc: 'Modern frontend with AI integration', color: 'from-blue-500 to-cyan-500' },
              { icon: Shield, title: 'Secure Backend', desc: 'Firebase & Node.js infrastructure', color: 'from-green-500 to-emerald-500' },
              { icon: Mic, title: 'Voice Support', desc: 'Multilingual voice commands', color: 'from-purple-500 to-pink-500' },
              { icon: TrendingUp, title: 'Analytics', desc: 'Impact measurement & insights', color: 'from-orange-500 to-red-500' }
            ].map((tech, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in hover-scale transition-all duration-300"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-xl transition-shadow duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">{tech.title}</h3>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <AIChat />
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
