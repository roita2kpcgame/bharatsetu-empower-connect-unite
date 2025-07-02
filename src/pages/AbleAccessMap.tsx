
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  ArrowLeft, 
  Camera,
  Navigation,
  Accessibility,
  Map,
  Eye,
  Volume2,
  Smartphone,
  Heart,
  Shield,
  Users,
  Star,
  Clock,
  Route,
  Zap,
  Compass,
  Home,
  Building,
  Car,
  Bus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AbleAccessMap = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [arMode, setArMode] = useState(false);
  const [location, setLocation] = useState('');
  const [accessibilityLevel, setAccessibilityLevel] = useState('wheelchair');

  const accessibilityOptions = [
    { id: 'wheelchair', label: 'Wheelchair Accessible', icon: Accessibility, color: 'from-blue-500 to-indigo-600' },
    { id: 'visual', label: 'Visual Impairment', icon: Eye, color: 'from-purple-500 to-pink-600' },
    { id: 'hearing', label: 'Hearing Impairment', icon: Volume2, color: 'from-green-500 to-emerald-600' },
    { id: 'mobility', label: 'Mobility Assistance', icon: Heart, color: 'from-orange-500 to-red-600' }
  ];

  const nearbyPlaces = [
    {
      name: 'City Hospital',
      distance: '0.5 km',
      accessibility: 95,
      features: ['Wheelchair Ramps', 'Braille Signage', 'Audio Announcements', 'Accessible Toilets'],
      type: 'hospital',
      rating: 4.8
    },
    {
      name: 'Central Mall',
      distance: '1.2 km',
      accessibility: 88,
      features: ['Elevators', 'Wide Corridors', 'Accessible Parking', 'Guide Rails'],
      type: 'shopping',
      rating: 4.6
    },
    {
      name: 'Metro Station',
      distance: '0.8 km',
      accessibility: 92,
      features: ['Platform Lifts', 'Tactile Strips', 'Audio Announcements', 'Priority Seating'],
      type: 'transport',
      rating: 4.7
    },
    {
      name: 'Public Library',
      distance: '1.5 km',
      accessibility: 85,
      features: ['Wheelchair Access', 'Large Print Books', 'Screen Readers', 'Quiet Zones'],
      type: 'education',
      rating: 4.5
    }
  ];

  const arFeatures = [
    {
      icon: Camera,
      title: 'AR Navigation',
      description: 'Real-time camera overlay with accessibility information and directions'
    },
    {
      icon: Volume2,
      title: 'Voice Guidance',
      description: 'Turn-by-turn audio instructions with accessibility warnings'
    },
    {
      icon: Shield,
      title: 'Safety Alerts',
      description: 'Real-time alerts about obstacles, construction, and hazards'
    },
    {
      icon: Compass,
      title: 'Smart Routing',
      description: 'AI-powered route optimization for different accessibility needs'
    }
  ];

  useEffect(() => {
    // Request camera permission and initialize
    if (cameraActive) {
      initializeCamera();
    }
    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [cameraActive]);

  const initializeCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' },
        audio: false 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Camera access denied:', error);
      alert('Camera access is required for AR navigation. Please allow camera permissions.');
    }
  };

  const toggleCamera = () => {
    setCameraActive(!cameraActive);
    if (cameraActive && videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const startARNavigation = () => {
    if (!cameraActive) {
      setCameraActive(true);
    }
    setArMode(true);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Location:', position.coords.latitude, position.coords.longitude);
          // In a real app, you would reverse geocode this to get address
          setLocation('Current Location Detected');
        },
        (error) => {
          console.error('Location access denied:', error);
          alert('Location access is required for navigation. Please allow location permissions.');
        }
      );
    }
  };

  const getPlaceIcon = (type: string) => {
    switch (type) {
      case 'hospital': return Heart;
      case 'shopping': return Building;
      case 'transport': return Bus;
      case 'education': return Home;
      default: return MapPin;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">AbleAccess Map</h1>
                  <p className="text-sm text-gray-600">AR Navigation for Accessibility</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Zap className="w-3 h-3 mr-1" />
                AR Enabled
              </Badge>
              {cameraActive && (
                <Badge variant="secondary" className="bg-green-100 text-green-800 animate-pulse">
                  <Camera className="w-3 h-3 mr-1" />
                  Camera Active
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Navigate with Confidence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Advanced AR navigation system designed for differently-abled individuals with real-time accessibility information and camera-based guidance
          </p>

          {/* Accessibility Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {accessibilityOptions.map((option) => (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  accessibilityLevel === option.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setAccessibilityLevel(option.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{option.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="navigation" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="ar-camera">AR Camera</TabsTrigger>
            <TabsTrigger value="places">Places</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>

          <TabsContent value="navigation">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Search and Route */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Route className="w-5 h-5 mr-2 text-blue-600" />
                      Plan Your Route
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                      <Input 
                        placeholder="Where are you going?" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="flex-1"
                      />
                      <Button 
                        onClick={getCurrentLocation}
                        variant="outline"
                        className="px-3"
                      >
                        <Navigation className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button 
                        onClick={startARNavigation}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        Start AR Navigation
                      </Button>
                      <Button variant="outline" className="px-6">
                        <Map className="w-4 h-4 mr-2" />
                        Map View
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Nearby Accessible Places */}
                <Card>
                  <CardHeader>
                    <CardTitle>Nearby Accessible Places</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {nearbyPlaces.map((place, index) => {
                        const IconComponent = getPlaceIcon(place.type);
                        return (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">{place.name}</h4>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                  <span>{place.distance}</span>
                                  <div className="flex items-center">
                                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                                    {place.rating}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-green-600">{place.accessibility}%</div>
                              <div className="text-xs text-gray-500">Accessible</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <Camera className="w-4 h-4 mr-2" />
                      Enable Camera
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Volume2 className="w-4 h-4 mr-2" />
                      Voice Commands
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Shield className="w-4 h-4 mr-2" />
                      Safety Mode
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="w-4 h-4 mr-2" />
                      Emergency Contact
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Accessibility className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Accessibility Score</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-1">92%</div>
                    <div className="text-sm text-gray-600">Current Area</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ar-camera">
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Camera className="w-5 h-5 mr-2 text-blue-600" />
                      AR Camera View
                    </div>
                    <Button
                      onClick={toggleCamera}
                      variant={cameraActive ? "destructive" : "default"}
                      size="sm"
                    >
                      {cameraActive ? 'Stop Camera' : 'Start Camera'}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
                    {cameraActive ? (
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-gray-400">
                        <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-lg mb-2">Camera Not Active</p>
                        <p className="text-sm">Enable camera to use AR navigation</p>
                      </div>
                    )}
                    
                    {/* AR Overlay Elements */}
                    {cameraActive && arMode && (
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Navigation Arrow */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-16 h-16 bg-blue-500/80 rounded-full flex items-center justify-center animate-pulse">
                            <Navigation className="w-8 h-8 text-white transform rotate-45" />
                          </div>
                        </div>
                        
                        {/* Distance Indicator */}
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg">
                          <div className="text-sm">Destination</div>
                          <div className="text-lg font-bold">250m ahead</div>
                        </div>
                        
                        {/* Accessibility Info */}
                        <div className="absolute top-4 right-4 bg-green-500/80 text-white px-3 py-2 rounded-lg">
                          <div className="text-sm">Accessibility</div>
                          <div className="text-lg font-bold">95% ✓</div>
                        </div>
                        
                        {/* Bottom Instructions */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-lg text-center">
                          <div className="text-sm">Continue straight for 200m</div>
                          <div className="text-xs text-green-300">Wheelchair accessible path</div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Camera Controls */}
              {cameraActive && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    onClick={() => setArMode(!arMode)}
                    variant={arMode ? "default" : "outline"}
                    className="h-16"
                  >
                    <div className="text-center">
                      <Eye className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-xs">AR Mode</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-16">
                    <div className="text-center">
                      <Volume2 className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-xs">Voice Guide</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-16">
                    <div className="text-center">
                      <Compass className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-xs">Compass</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-16">
                    <div className="text-center">
                      <Shield className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-xs">Safety</div>
                    </div>
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="places">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nearbyPlaces.map((place, index) => {
                const IconComponent = getPlaceIcon(place.type);
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{place.name}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>{place.distance}</span>
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span>{place.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {place.accessibility}% Accessible
                        </Badge>
                      </div>

                      <div className="space-y-2 mb-4">
                        <h4 className="font-medium text-gray-900">Accessibility Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {place.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600">
                        <Navigation className="w-4 h-4 mr-2" />
                        Navigate Here
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {arFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
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

            {/* Additional Features */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Advanced Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Smart Vibrations</h4>
                    <p className="text-sm text-gray-600">Haptic feedback for navigation cues and obstacles</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Community Reports</h4>
                    <p className="text-sm text-gray-600">Real-time accessibility updates from other users</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Emergency Support</h4>
                    <p className="text-sm text-gray-600">One-touch emergency assistance and location sharing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AbleAccessMap;
