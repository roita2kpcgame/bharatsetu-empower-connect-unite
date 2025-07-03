
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  Shield, 
  Chrome,
  ArrowLeft,
  CheckCircle,
  Bot,
  Lock,
  Eye,
  AlertTriangle,
  User
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import PhoneOTPLogin from '@/components/auth/PhoneOTPLogin';
import EmailPasswordLogin from '@/components/auth/EmailPasswordLogin';
import DigiLockerLogin from '@/components/auth/DigiLockerLogin';
import GoogleLogin from '@/components/auth/GoogleLogin';
import HumanVerification from '@/components/auth/HumanVerification';
import AIContextualHelp from '@/components/AIContextualHelp';
import AIChat from '@/components/AIChat';
import UserDashboard from '@/components/UserDashboard';
import { useAdvancedAI } from '@/hooks/useAdvancedAI';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('phone');
  const [showHumanVerification, setShowHumanVerification] = useState(false);
  const [verificationLevel, setVerificationLevel] = useState<'basic' | 'advanced' | 'biometric'>('basic');
  const [isVerified, setIsVerified] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showAIHelp, setShowAIHelp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserDashboard, setShowUserDashboard] = useState(false);
  const { activateAI, isAIActive } = useAdvancedAI();

  React.useEffect(() => {
    activateAI('login');
  }, [activateAI]);

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Login Successful",
      description: "Welcome back! You are now logged in to BharatSetu",
    });
    
    // Navigate to account page after successful login
    setTimeout(() => {
      navigate('/account');
    }, 1500);
  };

  const handleLoginAttempt = () => {
    const newAttempts = loginAttempts + 1;
    setLoginAttempts(newAttempts);

    if (newAttempts >= 3) {
      setVerificationLevel('advanced');
      setShowHumanVerification(true);
    } else if (newAttempts >= 2) {
      setVerificationLevel('basic');
      setShowHumanVerification(true);
    } else {
      // Simulate successful login for demo
      handleSuccessfulLogin();
    }
  };

  const handleVerificationComplete = (verified: boolean) => {
    setIsVerified(verified);
    setShowHumanVerification(false);
    if (verified) {
      handleSuccessfulLogin();
      console.log('Human verification completed successfully');
    }
  };

  const securityFeatures = [
    { icon: Shield, label: 'End-to-end Encryption', description: 'Your data is protected with military-grade encryption' },
    { icon: Eye, label: 'Privacy First', description: 'We never store or share your personal information' },
    { icon: Bot, label: 'AI Fraud Detection', description: 'Advanced AI monitors for suspicious login activities' },
    { icon: Lock, label: 'Multi-factor Authentication', description: 'Multiple layers of security verification' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="absolute top-4 left-4 md:top-8 md:left-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            {/* User Profile Button (shown when logged in) */}
            {isLoggedIn && (
              <Button
                variant="outline"
                onClick={() => setShowUserDashboard(true)}
                className="absolute top-4 right-4 md:top-8 md:right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:from-blue-600 hover:to-purple-700"
              >
                <User className="w-4 h-4 mr-2" />
                My Dashboard
              </Button>
            )}
          </div>
          
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full flex items-center justify-center border-2 border-gray-300">
              <span className="text-blue-600 font-bold text-xl">भ</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">BharatSetu</h1>
              <p className="text-sm text-gray-600">Advanced Secure Login Portal</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Bot className="w-3 h-3 mr-1" />
              AI-Enhanced Security
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Shield className="w-3 h-3 mr-1" />
              Government Verified
            </Badge>
            {isVerified && (
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                <CheckCircle className="w-3 h-3 mr-1" />
                Human Verified
              </Badge>
            )}
          </div>

          <Button
            variant="outline"
            onClick={() => setShowAIHelp(true)}
            className="mb-4"
          >
            <Bot className="w-4 h-4 mr-2" />
            Need Help? Ask AI Assistant
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Security Features */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Advanced Security Features</h2>
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.label}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Login Attempts Warning */}
            {loginAttempts > 0 && (
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <div>
                      <h3 className="font-semibold text-orange-800">Security Notice</h3>
                      <p className="text-sm text-orange-600">
                        {loginAttempts} login attempt(s) detected. 
                        {loginAttempts >= 2 && ' Human verification required.'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Login Forms */}
          <div className="lg:col-span-2">
            {showHumanVerification ? (
              <HumanVerification
                onVerificationComplete={handleVerificationComplete}
                verificationLevel={verificationLevel}
              />
            ) : (
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-md">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-gray-800">Welcome Back</CardTitle>
                  <p className="text-gray-600">Choose your preferred login method</p>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
                      <TabsTrigger value="phone" className="text-xs">
                        <Phone className="w-4 h-4 mb-1" />
                        Phone
                      </TabsTrigger>
                      <TabsTrigger value="email" className="text-xs">
                        <Mail className="w-4 h-4 mb-1" />
                        Email
                      </TabsTrigger>
                      <TabsTrigger value="digilocker" className="text-xs">
                        <Shield className="w-4 h-4 mb-1" />
                        DigiLocker
                      </TabsTrigger>
                      <TabsTrigger value="google" className="text-xs">
                        <Chrome className="w-4 h-4 mb-1" />
                        Google
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="phone">
                      <PhoneOTPLogin />
                      <Button 
                        onClick={handleLoginAttempt}
                        className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600"
                      >
                        Login with Phone
                      </Button>
                    </TabsContent>

                    <TabsContent value="email">
                      <EmailPasswordLogin />
                      <Button 
                        onClick={handleLoginAttempt}
                        className="w-full mt-4 bg-gradient-to-r from-green-500 to-blue-600"
                      >
                        Login with Email
                      </Button>
                    </TabsContent>

                    <TabsContent value="digilocker">
                      <DigiLockerLogin />
                      <Button 
                        onClick={handleLoginAttempt}
                        className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600"
                      >
                        Login with DigiLocker
                      </Button>
                    </TabsContent>

                    <TabsContent value="google">
                      <GoogleLogin />
                      <Button 
                        onClick={handleLoginAttempt}
                        className="w-full mt-4 bg-gradient-to-r from-red-500 to-pink-600"
                      >
                        Login with Google
                      </Button>
                    </TabsContent>
                  </Tabs>

                  <Separator className="my-6" />
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">
                      Don't have an account?{' '}
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-blue-600"
                        onClick={() => navigate('/register')}
                      >
                        Register Now
                      </Button>
                    </p>
                    
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Secured by Government of India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 space-y-2">
          <div className="flex justify-center space-x-6 text-xs text-gray-500">
            <span>🔒 End-to-end Encrypted</span>
            <span>🤖 AI-Powered Security</span>
            <span>🛡️ Multi-factor Authentication</span>
            <span>🇮🇳 Government Verified</span>
          </div>
          <p className="text-xs text-gray-500">
            Protected by advanced encryption • Privacy Policy • Terms of Service
          </p>
        </div>
      </div>

      {/* AI Components */}
      <AIContextualHelp 
        currentPage="login"
        isVisible={showAIHelp}
        onClose={() => setShowAIHelp(false)}
      />
      <AIChat />
      
      {/* User Dashboard */}
      <UserDashboard
        isVisible={showUserDashboard}
        onClose={() => setShowUserDashboard(false)}
      />
    </div>
  );
};

export default Login;
