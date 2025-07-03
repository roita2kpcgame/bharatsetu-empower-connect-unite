
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Play, 
  Brain, 
  Trophy, 
  Users, 
  Calendar,
  Clock,
  Star,
  ArrowLeft,
  Video,
  FileText,
  Target,
  Zap,
  Globe,
  Headphones,
  Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PathShaalaPlus = () => {
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState('10th');
  const [activeSubject, setActiveSubject] = useState('mathematics');

  const grades = [
    { id: '5th', name: 'Class 5th', students: '2.5K+' },
    { id: '8th', name: 'Class 8th', students: '3.2K+' },
    { id: '10th', name: 'Class 10th', students: '5.8K+' },
    { id: '12th', name: 'Class 12th', students: '4.1K+' },
    { id: 'college', name: 'College', students: '1.9K+' },
    { id: 'competitive', name: 'Competitive', students: '3.7K+' }
  ];

  const subjects = [
    { id: 'mathematics', name: 'Mathematics', icon: '🔢', videos: 150, difficulty: 'Medium' },
    { id: 'science', name: 'Science', icon: '🔬', videos: 120, difficulty: 'Hard' },
    { id: 'english', name: 'English', icon: '📚', videos: 90, difficulty: 'Easy' },
    { id: 'hindi', name: 'Hindi', icon: '🇮🇳', videos: 80, difficulty: 'Easy' },
    { id: 'social', name: 'Social Studies', icon: '🌍', videos: 100, difficulty: 'Medium' }
  ];

  const features = [
    { icon: Brain, title: 'AI-Powered Learning', desc: 'Personalized study paths based on your learning style' },
    { icon: Video, title: 'Animated Video Lectures', desc: 'Engaging 3D animations and visual explanations' },
    { icon: Target, title: 'Exam Preparation', desc: 'Targeted practice for board exams and competitions' },
    { icon: Trophy, title: 'Gamified Learning', desc: 'Earn points, badges, and compete with friends' },
    { icon: Globe, title: 'Multi-language Support', desc: 'Content available in Hindi, English, and regional languages' },
    { icon: Headphones, title: 'Audio Learning', desc: 'Listen to lectures while commuting or relaxing' }
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
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div className="h-8 w-px bg-gray-300" />
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    PathShaala+
                  </h1>
                  <p className="text-sm text-gray-600">AI-Powered Smart Study Portal</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Brain className="w-3 h-3 mr-1" />
              AI Enhanced
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionizing Education with AI
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Personalized learning paths, AI-generated video lectures, and smart exam preparation for students of all ages
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Students', value: '50K+', icon: Users },
              { label: 'Video Lectures', value: '2.5K+', icon: Video },
              { label: 'Subjects', value: '25+', icon: BookOpen },
              { label: 'Success Rate', value: '92%', icon: Trophy }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Grade Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Select Your Grade</h3>
            {grades.map((grade) => (
              <Card
                key={grade.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedGrade === grade.id 
                    ? 'ring-2 ring-purple-500 bg-purple-50' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedGrade(grade.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{grade.name}</h4>
                      <p className="text-sm text-gray-600">{grade.students} students</p>
                    </div>
                    {selectedGrade === grade.id && (
                      <Zap className="w-5 h-5 text-purple-500" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Subject Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeSubject} onValueChange={setActiveSubject}>
              <TabsList className="grid w-full grid-cols-5 mb-6">
                {subjects.map((subject) => (
                  <TabsTrigger key={subject.id} value={subject.id} className="text-xs">
                    <span className="mr-1">{subject.icon}</span>
                    {subject.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {subjects.map((subject) => (
                <TabsContent key={subject.id} value={subject.id}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center space-x-2">
                          <span className="text-2xl">{subject.icon}</span>
                          <span>{subject.name} - {selectedGrade}</span>
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">
                            {subject.videos} Videos
                          </Badge>
                          <Badge 
                            variant="outline"
                            className={
                              subject.difficulty === 'Easy' ? 'border-green-300 text-green-700' :
                              subject.difficulty === 'Medium' ? 'border-yellow-300 text-yellow-700' :
                              'border-red-300 text-red-700'
                            }
                          >
                            {subject.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* AI-Generated Video Lectures */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {[1, 2, 3, 4].map((video) => (
                          <Card key={video} className="hover:shadow-md transition-shadow cursor-pointer">
                            <CardContent className="p-4">
                              <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></div>
                                <Play className="w-12 h-12 text-purple-600 relative z-10" />
                                <Badge className="absolute top-2 right-2 bg-red-500">
                                  <Video className="w-3 h-3 mr-1" />
                                  HD
                                </Badge>
                              </div>
                              <h4 className="font-medium text-gray-900 mb-2">
                                Chapter {video}: AI-Generated Lecture
                              </h4>
                              <div className="flex items-center justify-between text-sm text-gray-600">
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  15 min
                                </span>
                                <span className="flex items-center">
                                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                                  4.8
                                </span>
                              </div>
                              <div className="flex space-x-2 mt-3">
                                <Button size="sm" className="flex-1">
                                  <Play className="w-3 h-3 mr-1" />
                                  Watch
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Download className="w-3 h-3" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* Practice Tests */}
                      <div className="border-t pt-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                          Practice Tests & Assignments
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { name: 'Chapter Test 1', questions: 25, time: '30 min', difficulty: 'Easy' },
                            { name: 'Mock Exam', questions: 50, time: '60 min', difficulty: 'Medium' },
                            { name: 'Previous Year Paper', questions: 40, time: '45 min', difficulty: 'Hard' }
                          ].map((test, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow">
                              <CardContent className="p-4">
                                <h5 className="font-medium text-gray-900 mb-2">{test.name}</h5>
                                <div className="space-y-2 text-sm text-gray-600 mb-4">
                                  <div className="flex items-center">
                                    <FileText className="w-4 h-4 mr-2" />
                                    {test.questions} Questions
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {test.time}
                                  </div>
                                </div>
                                <Button size="sm" className="w-full">
                                  Start Test
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathShaalaPlus;
