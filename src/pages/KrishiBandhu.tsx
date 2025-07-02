
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Sprout, 
  ArrowLeft, 
  TrendingUp,
  Cloud,
  DollarSign,
  Calendar,
  MapPin,
  Brain,
  Newspaper,
  BarChart3,
  Thermometer,
  Droplets,
  Sun,
  Wind,
  Camera,
  Zap,
  Users,
  Phone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const KrishiBandhu = () => {
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState('');
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({
    temperature: 28,
    humidity: 65,
    rainfall: 12,
    wind: 8
  });

  const crops = [
    { id: 'rice', name: 'Rice', icon: '🌾', season: 'Kharif', price: '₹2,100/quintal' },
    { id: 'wheat', name: 'Wheat', icon: '🌱', season: 'Rabi', price: '₹1,975/quintal' },
    { id: 'cotton', name: 'Cotton', icon: '🌸', season: 'Kharif', price: '₹5,800/quintal' },
    { id: 'sugarcane', name: 'Sugarcane', icon: '🎋', season: 'Annual', price: '₹350/quintal' }
  ];

  const marketPredictions = [
    { crop: 'Rice', currentPrice: 2100, predictedPrice: 2250, trend: 'up', confidence: 87 },
    { crop: 'Wheat', currentPrice: 1975, predictedPrice: 1850, trend: 'down', confidence: 78 },
    { crop: 'Cotton', currentPrice: 5800, predictedPrice: 6100, trend: 'up', confidence: 92 },
    { crop: 'Sugarcane', currentPrice: 350, predictedPrice: 380, trend: 'up', confidence: 83 }
  ];

  const newsUpdates = [
    {
      title: 'New Government Scheme for Organic Farming',
      summary: 'PM-PRANAM scheme launched with ₹10,000 crore budget',
      category: 'Policy',
      time: '2 hours ago'
    },
    {
      title: 'Weather Alert: Unseasonal Rains Expected',
      summary: 'IMD predicts heavy rainfall in North India this week',
      category: 'Weather',
      time: '4 hours ago'
    },
    {
      title: 'Cotton Prices Rise 15% in International Market',
      summary: 'Global demand surge boosts cotton export opportunities',
      category: 'Market',
      time: '6 hours ago'
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Crop Prediction AI',
      description: 'Advanced ML models predict best crops for your soil and climate',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Real-time price predictions and market trend analysis',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Camera,
      title: 'Disease Detection',
      description: 'AI-powered crop disease identification using mobile camera',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cloud,
      title: 'Weather Intelligence',
      description: 'Hyper-local weather forecasts and farming recommendations',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">KrishiBandhu</h1>
                  <p className="text-sm text-gray-600">Advanced Farming AI Assistant</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Zap className="w-3 h-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Smart Farming Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            AI-powered farming assistance with crop prediction, market analysis, real-time news, and weather intelligence for modern farmers
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">2.5M+</div>
                <div className="text-sm text-gray-600">Farmers</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Sprout className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Crops Supported</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">28</div>
                <div className="text-sm text-gray-600">States</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="crops">Crops</TabsTrigger>
            <TabsTrigger value="market">Market</TabsTrigger>
            <TabsTrigger value="weather">Weather</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Weather Widget */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cloud className="w-5 h-5 mr-2 text-blue-600" />
                    Weather Today
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="w-5 h-5 text-red-500" />
                      <div>
                        <div className="text-lg font-semibold">{weatherData.temperature}°C</div>
                        <div className="text-xs text-gray-500">Temperature</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Droplets className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="text-lg font-semibold">{weatherData.humidity}%</div>
                        <div className="text-xs text-gray-500">Humidity</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Sun className="w-5 h-5 text-yellow-500" />
                      <div>
                        <div className="text-lg font-semibold">{weatherData.rainfall}mm</div>
                        <div className="text-xs text-gray-500">Rainfall</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wind className="w-5 h-5 text-gray-500" />
                      <div>
                        <div className="text-lg font-semibold">{weatherData.wind} km/h</div>
                        <div className="text-xs text-gray-500">Wind Speed</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Features */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {aiFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Button className="h-20 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                <div className="text-center">
                  <Camera className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-sm">Scan Crop Disease</div>
                </div>
              </Button>
              <Button className="h-20 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                <div className="text-center">
                  <BarChart3 className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-sm">Market Analysis</div>
                </div>
              </Button>
              <Button className="h-20 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                <div className="text-center">
                  <Brain className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-sm">AI Crop Advisor</div>
                </div>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="crops">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {crops.map((crop) => (
                <Card 
                  key={crop.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedCrop === crop.id ? 'ring-2 ring-green-500 shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedCrop(crop.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{crop.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{crop.name}</h3>
                    <Badge variant="outline" className="mb-2">{crop.season}</Badge>
                    <div className="text-lg font-bold text-green-600">{crop.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedCrop && (
              <Card className="mt-8 animate-fade-in">
                <CardHeader>
                  <CardTitle>AI Crop Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Optimal Conditions</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>🌡️ Temperature: 25-30°C</div>
                        <div>💧 Water: 1200-1500mm annually</div>
                        <div>🌱 Soil: Well-drained loamy soil</div>
                        <div>📅 Best Planting: June-July</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">AI Predictions</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>📈 Yield Forecast: 3.2 tons/hectare</div>
                        <div>💰 Expected Profit: ₹45,000/hectare</div>
                        <div>⚠️ Disease Risk: Low (15%)</div>
                        <div>🎯 Success Rate: 92%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="market">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Market Predictions (Next 30 Days)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marketPredictions.map((prediction, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">{crops.find(c => c.name === prediction.crop)?.icon}</div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{prediction.crop}</h4>
                            <div className="text-sm text-gray-600">
                              Current: ₹{prediction.currentPrice}/quintal
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${prediction.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            ₹{prediction.predictedPrice}
                            {prediction.trend === 'up' ? ' ↗️' : ' ↘️'}
                          </div>
                          <div className="text-sm text-gray-500">
                            {prediction.confidence}% confidence
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="weather">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>7-Day Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                      <div key={day} className="flex items-center justify-between">
                        <span className="font-medium">{day}</span>
                        <div className="flex items-center space-x-4">
                          <Sun className="w-5 h-5 text-yellow-500" />
                          <span>{28 + index}°C / {18 + index}°C</span>
                          <span className="text-sm text-gray-500">{index * 2}mm</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Farming Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Recommended Activities</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Perfect weather for rice transplanting</li>
                        <li>• Apply fertilizer before expected rain</li>
                        <li>• Monitor for pest activity in cotton fields</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">Weather Alerts</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Heavy rainfall expected Thursday-Friday</li>
                        <li>• Avoid spraying pesticides during rain</li>
                        <li>• Ensure proper drainage in fields</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="news">
            <div className="space-y-6">
              {newsUpdates.map((news, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline">{news.category}</Badge>
                          <span className="text-sm text-gray-500">{news.time}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{news.title}</h3>
                        <p className="text-gray-600">{news.summary}</p>
                      </div>
                      <Newspaper className="w-6 h-6 text-gray-400 ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* AI News Assistant */}
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">Ask AI About Farming News</h3>
                      <div className="flex space-x-2">
                        <Input placeholder="Ask about latest farming policies, weather updates..." className="flex-1" />
                        <Button className="bg-gradient-to-r from-green-500 to-emerald-600">
                          Ask AI
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default KrishiBandhu;
