
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  ArrowLeft, 
  Play,
  Brain,
  Users,
  Star,
  Clock,
  Award,
  TrendingUp,
  Zap,
  Video,
  Mic,
  FileText,
  Target,
  Calendar,
  BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAdvancedAI } from '@/hooks/useAdvancedAI';

const PathshaalaPlus = () => {
  const navigate = useNavigate();
  const { activateAI } = useAdvancedAI();
  const [selectedCourse, setSelectedCourse] = useState('');
  const [ageGroup, setAgeGroup] = useState('');

  useEffect(() => {
    activateAI('pathshaala');
  }, [activateAI]);

  const ageGroups = [
    { id: 'kids', label: 'Kids (5-10)', color: 'from-pink-500 to-purple-500', icon: '🧒' },
    { id: 'school', label: 'School (11-17)', color: 'from-blue-500 to-indigo-500', icon: '🎓' },
    { id: 'college', label: 'College (18-25)', color: 'from-green-500 to-emerald-500', icon: '🎓' },
    { id: 'professional', label: 'Professional (25+)', color: 'from-orange-500 to-red-500', icon: '💼' }
  ];

  const courses = [
    {
      id: 'math',
      title: 'Advanced Mathematics',
      description: 'AI-powered personalized math learning with interactive visualizations',
      level: 'Intermediate',
      duration: '6 months',
      students: '2.5K+',
      rating: 4.9,
      features: ['AI Tutor', 'Interactive Problems', 'Visual Learning', 'Progress Tracking']
    },
    {
      id: 'science',
      title: 'Science Explorer',
      description: 'Immersive science learning with AR experiments and simulations',
      level: 'Beginner to Advanced',
      duration: '8 months',
      students: '1.8K+',
      rating: 4.8,
      features: ['AR Experiments', 'Virtual Labs', 'AI Explanations', 'Peer Learning']
    },
    {
      id: 'language',
      title: 'Language Mastery',
      description: 'Multi-language learning with AI conversation partners',
      level: 'All Levels',
      duration: '12 months',
      students: '3.2K+',
      rating: 4.9,
      features: ['AI Conversations', 'Speech Recognition', 'Cultural Context', 'Real-time Feedback']
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Adaptive Learning AI',
      description: 'Personalizes content based on learning style and pace'
    },
    {
      icon: Video,
      title: 'AI Video Lectures',
      description: 'Animated explanations that adapt to your understanding level'
    },
    {
      icon: Mic,
      title: 'Voice Interaction',
      description: 'Ask questions and get instant AI-powered explanations'
    },
    {
      icon: Target,
      title: 'Smart Goals',
      description: 'AI sets and adjusts learning goals based on your progress'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/home')}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div className="h-8 w-px bg-gray-300" />
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">PathShaala+</h1>
                  <p className="text-sm text-gray-600">AI-Powered Smart Study Portal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Personalized Learning for Every Age
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            AI-powered education platform with adaptive learning paths, animated video lectures, and personalized study plans for all age groups
          </p>
          
          {/* Age Group Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {ageGroups.map((group) => (
              <Card
                key={group.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  ageGroup === group.id ? 'ring-2 ring-purple-500 shadow-lg' : ''
                }`}
                onClick={() => setAgeGroup(group.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${group.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-2xl">{group.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{group.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="features">AI Features</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge variant="secondary" className="bg-white/20 text-white mb-2">
                        {course.level}
                      </Badge>
                      <h3 className="text-xl font-bold">{course.title}</h3>
                    </div>
                    <Button
                      size="sm"
                      className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Zap className="w-3 h-3 mr-2 text-purple-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-indigo-600"
                      onClick={() => setSelectedCourse(course.id)}
                    >
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Video Demo */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Video className="w-6 h-6 mr-2 text-purple-600" />
                  AI-Animated Video Lectures Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive AI Lecturer</h3>
                    <p className="text-gray-600 mb-4">Experience personalized, animated explanations</p>
                    <Button className="bg-gradient-to-r from-purple-500 to-indigo-600">
                      Watch Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-6 h-6 mr-2 text-purple-600" />
                      Learning Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {['Mathematics', 'Science', 'Language'].map((subject, index) => (
                        <div key={subject}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-gray-900">{subject}</span>
                            <span className="text-sm text-gray-500">{75 + index * 5}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${75 + index * 5}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Award className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-1">Weekly Streak</h3>
                      <p className="text-2xl font-bold text-purple-600">15 Days</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-1">Skill Level</h3>
                      <p className="text-2xl font-bold text-green-600">Intermediate</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="text-center py-12">
              <Users className="w-20 h-20 text-purple-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Learning Community</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Connect with fellow learners, participate in study groups, and share your learning journey
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-3">
                Join Community
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PathshaalaPlus;
