
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  Scale, 
  Briefcase, 
  AlertCircle, 
  Mic, 
  Globe, 
  Users, 
  TrendingUp,
  Shield,
  BookOpen,
  Sprout,
  MapPin
} from 'lucide-react';
import Header from '@/components/Header';
import ModuleCard from '@/components/ModuleCard';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState('English');
  const [isListening, setIsListening] = useState(false);

  const modules = [
    {
      id: 'swasthya',
      title: 'SwasthyaMitra',
      subtitle: 'AI Health Assistant',
      description: 'Smart symptom checker with nearby clinic suggestions and Ayushman Bharat integration',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      features: ['AI Symptom Analysis', 'Hospital Locator', 'Medicine Reminders', 'Health Records']
    },
    {
      id: 'kanoon',
      title: 'KanoonSathi',
      subtitle: 'Legal Aid Platform',
      description: 'Document generator for FIRs, certificates, and legal aid with expert consultation',
      icon: Scale,
      color: 'from-blue-500 to-indigo-600',
      features: ['Legal Document Templates', 'Expert Consultation', 'Case Tracking', 'Rights Awareness']
    },
    {
      id: 'yuva',
      title: 'YuvaRojgar',
      subtitle: 'Career Empowerment',
      description: 'AI-powered skill analysis with personalized career plans and government scheme finder',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      features: ['Skill Assessment', 'Job Matching', 'PMKVY Integration', 'Interview Prep']
    },
    {
      id: 'samasya',
      title: 'SamasyaReport',
      subtitle: 'Civic Issue Reporter',
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
        language={language} 
        setLanguage={setLanguage}
        isListening={isListening}
        onVoiceToggle={handleVoiceToggle}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
            BharatSetu
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto">
            The All-in-One Empowerment Platform for India
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            One App. Multiple Solutions. Infinite Impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Heart className="w-4 h-4 mr-2" />
              Health
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Scale className="w-4 h-4 mr-2" />
              Legal Aid
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Briefcase className="w-4 h-4 mr-2" />
              Employment
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <AlertCircle className="w-4 h-4 mr-2" />
              Civic Issues
            </Badge>
          </div>
        </div>

        <StatsSection />
      </section>

      {/* Core Modules Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Modules
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Integrated solutions powered by AI and designed for India's diverse needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-600">
            More modules to expand the ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingModules.map((module, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-dashed border-2 border-gray-300">
              <CardContent className="pt-6">
                <module.icon className="w-12 h-12 mx-auto mb-4 text-gray-500" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{module.name}</h3>
                <p className="text-gray-600">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-white/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built with Cutting-Edge Technology
            </h2>
            <p className="text-lg text-gray-600">
              Scalable, secure, and accessible for all Indians
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800">React & AI</h3>
              <p className="text-sm text-gray-600">Modern frontend with AI integration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800">Secure Backend</h3>
              <p className="text-sm text-gray-600">Firebase & Node.js infrastructure</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800">Voice Support</h3>
              <p className="text-sm text-gray-600">Multilingual voice commands</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800">Analytics</h3>
              <p className="text-sm text-gray-600">Impact measurement & insights</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
