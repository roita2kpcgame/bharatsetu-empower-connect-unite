
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Bot, 
  Brain, 
  Zap, 
  Shield, 
  Sparkles,
  Heart,
  Scale,
  Briefcase,
  AlertTriangle,
  GraduationCap,
  Wheat,
  Accessibility
} from 'lucide-react';

interface AIFeature {
  id: string;
  name: string;
  description: string;
  module: string;
  icon: React.ReactNode;
  status: 'active' | 'learning' | 'optimizing';
  accuracy: number;
  usage: number;
}

interface AIModuleEnhancementsProps {
  module: string;
}

const AIModuleEnhancements: React.FC<AIModuleEnhancementsProps> = ({ module }) => {
  const [aiFeatures, setAiFeatures] = useState<AIFeature[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Initialize AI features based on module
    const moduleFeatures: Record<string, AIFeature[]> = {
      'SwasthyaMitra': [
        {
          id: 'health-ai-1',
          name: 'Symptom Analysis AI',
          description: 'Advanced AI analyzes symptoms and provides preliminary diagnosis',
          module: 'SwasthyaMitra',
          icon: <Heart className="w-4 h-4" />,
          status: 'active',
          accuracy: 94,
          usage: 87
        },
        {
          id: 'health-ai-2',
          name: 'Drug Interaction Checker',
          description: 'AI-powered medication safety and interaction analysis',
          module: 'SwasthyaMitra',
          icon: <Shield className="w-4 h-4" />,
          status: 'active',
          accuracy: 98,
          usage: 76
        },
        {
          id: 'health-ai-3',
          name: 'Personalized Health Insights',
          description: 'Machine learning creates personalized health recommendations',
          module: 'SwasthyaMitra',
          icon: <Brain className="w-4 h-4" />,
          status: 'learning',
          accuracy: 89,
          usage: 65
        }
      ],
      'KanoonSathi': [
        {
          id: 'legal-ai-1',
          name: 'Document Intelligence',
          description: 'AI automatically analyzes and categorizes legal documents',
          module: 'KanoonSathi',
          icon: <Scale className="w-4 h-4" />,
          status: 'active',
          accuracy: 96,
          usage: 82
        },
        {
          id: 'legal-ai-2',
          name: 'Legal Research Assistant',
          description: 'Advanced AI searches through legal databases and case laws',
          module: 'KanoonSathi',
          icon: <Bot className="w-4 h-4" />,
          status: 'active',
          accuracy: 92,
          usage: 78
        },
        {
          id: 'legal-ai-3',
          name: 'Compliance Predictor',
          description: 'Predictive AI identifies potential legal compliance issues',
          module: 'KanoonSathi',
          icon: <Zap className="w-4 h-4" />,
          status: 'optimizing',
          accuracy: 88,
          usage: 71
        }
      ],
      'YuvaRojgar': [
        {
          id: 'job-ai-1',
          name: 'Smart Job Matching',
          description: 'AI matches candidates with perfect job opportunities',
          module: 'YuvaRojgar',
          icon: <Briefcase className="w-4 h-4" />,
          status: 'active',
          accuracy: 91,
          usage: 89
        },
        {
          id: 'job-ai-2',
          name: 'Skill Gap Analysis',
          description: 'AI identifies skill gaps and suggests learning paths',
          module: 'YuvaRojgar',
          icon: <Brain className="w-4 h-4" />,
          status: 'active',
          accuracy: 87,
          usage: 73
        },
        {
          id: 'job-ai-3',
          name: 'Career Path Predictor',
          description: 'Machine learning predicts optimal career trajectories',
          module: 'YuvaRojgar',
          icon: <Sparkles className="w-4 h-4" />,
          status: 'learning',
          accuracy: 84,
          usage: 68
        }
      ],
      'SamasyaReport': [
        {
          id: 'civic-ai-1',
          name: 'Issue Classification AI',
          description: 'Automatically categorizes and prioritizes civic issues',
          module: 'SamasyaReport',
          icon: <AlertTriangle className="w-4 h-4" />,
          status: 'active',
          accuracy: 93,
          usage: 85
        },
        {
          id: 'civic-ai-2',
          name: 'Resolution Predictor',
          description: 'AI predicts resolution time and assigns priority levels',
          module: 'SamasyaReport',
          icon: <Bot className="w-4 h-4" />,
          status: 'active',
          accuracy: 88,
          usage: 79
        },
        {
          id: 'civic-ai-3',
          name: 'Pattern Recognition',
          description: 'Identifies recurring civic issues and suggests prevention',
          module: 'SamasyaReport',
          icon: <Brain className="w-4 h-4" />,
          status: 'optimizing',
          accuracy: 86,
          usage: 72
        }
      ],
      'PathShaalaPlus': [
        {
          id: 'edu-ai-1',
          name: 'Adaptive Learning AI',
          description: 'Personalizes learning pace and content for each student',
          module: 'PathShaalaPlus',
          icon: <GraduationCap className="w-4 h-4" />,
          status: 'active',
          accuracy: 95,
          usage: 91
        },
        {
          id: 'edu-ai-2',
          name: 'Performance Predictor',
          description: 'AI predicts student performance and identifies at-risk learners',
          module: 'PathShaalaPlus',
          icon: <Brain className="w-4 h-4" />,
          status: 'active',
          accuracy: 89,
          usage: 83
        },
        {
          id: 'edu-ai-3',
          name: 'Content Generator',
          description: 'AI creates personalized quizzes and learning materials',
          module: 'PathShaalaPlus',
          icon: <Sparkles className="w-4 h-4" />,
          status: 'learning',
          accuracy: 87,
          usage: 75
        }
      ],
      'KrishiBandhu': [
        {
          id: 'agri-ai-1',
          name: 'Crop Health Monitor',
          description: 'AI analyzes crop images to detect diseases and pests',
          module: 'KrishiBandhu',
          icon: <Wheat className="w-4 h-4" />,
          status: 'active',
          accuracy: 92,
          usage: 88
        },
        {
          id: 'agri-ai-2',
          name: 'Weather Intelligence',
          description: 'Advanced AI provides hyper-local weather predictions',
          module: 'KrishiBandhu',
          icon: <Bot className="w-4 h-4" />,
          status: 'active',
          accuracy: 96,
          usage: 84
        },
        {
          id: 'agri-ai-3',
          name: 'Yield Optimizer',
          description: 'Machine learning optimizes crop yield and resource usage',
          module: 'KrishiBandhu',
          icon: <Zap className="w-4 h-4" />,
          status: 'optimizing',
          accuracy: 90,
          usage: 77
        }
      ],
      'AbleAccessMap': [
        {
          id: 'access-ai-1',
          name: 'Accessibility Scanner',
          description: 'AI automatically scans and rates location accessibility',
          module: 'AbleAccessMap',
          icon: <Accessibility className="w-4 h-4" />,
          status: 'active',
          accuracy: 94,
          usage: 86
        },
        {
          id: 'access-ai-2',
          name: 'Route Intelligence',
          description: 'AI finds optimal accessible routes for different mobility needs',
          module: 'AbleAccessMap',
          icon: <Brain className="w-4 h-4" />,
          status: 'active',
          accuracy: 91,
          usage: 81
        },
        {
          id: 'access-ai-3',
          name: 'Crowd Prediction',
          description: 'Predicts accessibility challenges based on crowd patterns',
          module: 'AbleAccessMap',
          icon: <Sparkles className="w-4 h-4" />,
          status: 'learning',
          accuracy: 85,
          usage: 73
        }
      ]
    };

    setAiFeatures(moduleFeatures[module] || []);
  }, [module]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'learning': return 'bg-blue-500';
      case 'optimizing': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const handleOptimizeAI = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setAiFeatures(prev => prev.map(feature => ({
        ...feature,
        accuracy: Math.min(100, feature.accuracy + Math.random() * 3),
        usage: Math.min(100, feature.usage + Math.random() * 5)
      })));
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <Card className="border-gradient-to-r from-blue-200 to-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="w-5 h-5 text-blue-600" />
            <span>AI Intelligence Center</span>
            <Badge variant="secondary" className="ml-2">
              Level 5 Security
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiFeatures.map((feature) => (
              <Card key={feature.id} className="hover:shadow-lg transition-all duration-300 hover-scale">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {feature.icon}
                      <span className="font-medium text-sm">{feature.name}</span>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(feature.status)}`} />
                  </div>
                  
                  <p className="text-xs text-gray-600 mb-3">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Accuracy</span>
                      <span>{feature.accuracy}%</span>
                    </div>
                    <Progress value={feature.accuracy} className="h-1" />
                    
                    <div className="flex justify-between text-xs">
                      <span>Usage</span>
                      <span>{feature.usage}%</span>
                    </div>
                    <Progress value={feature.usage} className="h-1" />
                  </div>
                  
                  <Badge 
                    variant="outline" 
                    className="mt-2 text-xs capitalize"
                  >
                    {feature.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleOptimizeAI}
              disabled={isProcessing}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Optimizing AI...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Optimize AI Performance</span>
                </div>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIModuleEnhancements;
