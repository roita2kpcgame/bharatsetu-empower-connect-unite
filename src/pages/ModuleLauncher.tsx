
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  Scale, 
  Briefcase, 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight,
  Bot,
  Sparkles,
  Star,
  Users,
  MapPin,
  Phone,
  Calendar,
  FileText,
  Activity,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/contexts/TranslationContext';

const ModuleLauncher = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeModule, setActiveModule] = useState('swasthya');

  const modules = [
    {
      id: 'swasthya',
      title: 'SwasthyaMitra',
      subtitle: 'AI Health Assistant',
      description: 'Revolutionary healthcare platform with AI-powered diagnosis, hospital finder, telemedicine, and Ayushman Bharat integration',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      route: '/swasthya-mitra',
      stats: { users: '2.5M+', hospitals: '1,200+', consultations: '45K+' },
      keyFeatures: [
        'AI Symptom Analysis & Diagnosis',
        'Smart Hospital & Clinic Locator',
        'Real-time Doctor Consultations',
        'Digital Health Records Management',
        'Medicine Reminder & Tracking',
        'Emergency Services Integration',
        'Ayushman Bharat Card Integration',
        'Health Insurance Claims Support'
      ],
      services: [
        { name: 'AI Health Check', icon: Bot, desc: 'Instant symptom analysis' },
        { name: 'Find Hospitals', icon: MapPin, desc: 'Nearby medical facilities' },
        { name: 'Book Appointment', icon: Calendar, desc: 'Schedule consultations' },
        { name: 'Health Records', icon: FileText, desc: 'Digital medical history' }
      ]
    },
    {
      id: 'kanoon',
      title: 'KanoonSathi',
      subtitle: 'Legal Aid Platform',
      description: 'Comprehensive legal assistance with AI document generation, expert consultations, and case management system',
      icon: Scale,
      color: 'from-blue-500 to-indigo-600',
      route: '/kanoon-sathi',
      stats: { cases: '125K+', lawyers: '850+', documents: '500K+' },
      keyFeatures: [
        'AI Legal Document Generator',
        'Expert Lawyer Consultations',
        'Case Status Tracking System',
        'Legal Rights Awareness Portal',
        'Court Fee Calculator',
        'Legal Aid Scheme Integration',
        'Multi-language Legal Support',
        'Blockchain Document Verification'
      ],
      services: [
        { name: 'Legal Documents', icon: FileText, desc: 'AI-generated legal papers' },
        { name: 'Expert Consultation', icon: Users, desc: 'Connect with lawyers' },
        { name: 'Case Tracking', icon: Activity, desc: 'Monitor case progress' },
        { name: 'Rights Guide', icon: Shield, desc: 'Know your legal rights' }
      ]
    },
    {
      id: 'yuva',
      title: 'YuvaRojgar',
      subtitle: 'Career Empowerment',
      description: 'Advanced career development platform with AI job matching, skill assessment, and government scheme integration',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      route: '/yuva-rojgar',
      stats: { jobseekers: '1.8M+', employers: '25K+', placements: '350K+' },
      keyFeatures: [
        'AI-Powered Job Matching',
        'Comprehensive Skill Assessment',
        'PMKVY Scheme Integration',
        'Interview Preparation Coach',
        'Salary Negotiation Guide',
        'Career Path Planning',
        'Resume Builder & Optimizer',
        'Industry Trend Analysis'
      ],
      services: [
        { name: 'Job Search', icon: Briefcase, desc: 'AI-matched opportunities' },
        { name: 'Skill Test', icon: TrendingUp, desc: 'Assess your abilities' },
        { name: 'Training', icon: Bot, desc: 'Skill development courses' },
        { name: 'Interview Prep', icon: Users, desc: 'Practice sessions' }
      ]
    },
    {
      id: 'samasya',
      title: 'SamasyaReport',
      subtitle: 'Civic Issue Reporter',
      description: 'Smart civic engagement platform with AI issue detection, real-time tracking, and direct government integration',
      icon: AlertCircle,
      color: 'from-orange-500 to-amber-600',
      route: '/samasya-report',
      stats: { reports: '75K+', resolved: '68K+', cities: '450+' },
      keyFeatures: [
        'AI-Powered Issue Detection',
        'Smart Photo & Video Analysis',
        'Real-time GPS Tracking',
        'Direct Municipality Integration',
        'Community Impact Scoring',
        'Progress Tracking Dashboard',
        'Citizen Feedback System',
        'Government Response Portal'
      ],
      services: [
        { name: 'Report Issue', icon: AlertCircle, desc: 'Submit civic problems' },
        { name: 'Track Progress', icon: Activity, desc: 'Monitor resolution' },
        { name: 'Community', icon: Users, desc: 'Connect with citizens' },
        { name: 'Impact Score', icon: TrendingUp, desc: 'Measure community effect' }
      ]
    }
  ];

  const currentModule = modules.find(m => m.id === activeModule);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div className="h-8 w-px bg-gray-300" />
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Module Launcher</h1>
                  <p className="text-sm text-gray-600">Advanced Government Service Modules</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Bot className="w-3 h-3 mr-1" />
              AI Enhanced
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Module Navigation */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Module</h2>
            {modules.map((module) => (
              <Card
                key={module.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeModule === module.id 
                    ? 'ring-2 ring-purple-500 shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setActiveModule(module.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center`}>
                      <module.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{module.title}</h3>
                      <p className="text-sm text-gray-600">{module.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Module Details */}
          <div className="lg:col-span-3 space-y-6">
            {currentModule && (
              <>
                {/* Module Header */}
                <Card className="overflow-hidden">
                  <div className={`h-32 bg-gradient-to-r ${currentModule.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-6 text-white">
                      <div className="flex items-center space-x-3 mb-2">
                        <currentModule.icon className="w-8 h-8" />
                        <div>
                          <h1 className="text-2xl font-bold">{currentModule.title}</h1>
                          <p className="text-white/90">{currentModule.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-6">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-6">{currentModule.description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(currentModule.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button 
                        onClick={() => navigate(currentModule.route)}
                        className={`flex-1 bg-gradient-to-r ${currentModule.color} hover:opacity-90`}
                      >
                        Launch Module
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Module Features */}
                <Tabs defaultValue="features" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="features">Key Features</TabsTrigger>
                    <TabsTrigger value="services">Quick Services</TabsTrigger>
                  </TabsList>

                  <TabsContent value="features">
                    <Card>
                      <CardHeader>
                        <CardTitle>Advanced Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentModule.keyFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="services">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentModule.services.map((service, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${currentModule.color} rounded-lg flex items-center justify-center`}>
                                <service.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">{service.name}</h3>
                                <p className="text-sm text-gray-600">{service.desc}</p>
                              </div>
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="w-full"
                              onClick={() => navigate(currentModule.route)}
                            >
                              Access Service
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleLauncher;
