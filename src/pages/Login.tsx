
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Phone, 
  Mail, 
  Shield, 
  Chrome,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PhoneOTPLogin from '@/components/auth/PhoneOTPLogin';
import EmailPasswordLogin from '@/components/auth/EmailPasswordLogin';
import DigiLockerLogin from '@/components/auth/DigiLockerLogin';
import GoogleLogin from '@/components/auth/GoogleLogin';

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('phone');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="absolute top-4 left-4 md:top-8 md:left-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full flex items-center justify-center border-2 border-gray-300">
              <span className="text-blue-600 font-bold text-xl">भ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">BharatSetu</h1>
              <p className="text-sm text-gray-600">Secure Login Portal</p>
            </div>
          </div>
          <p className="text-gray-600">Choose your preferred login method</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-md">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl text-gray-800">Welcome Back</CardTitle>
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
              </TabsContent>

              <TabsContent value="email">
                <EmailPasswordLogin />
              </TabsContent>

              <TabsContent value="digilocker">
                <DigiLockerLogin />
              </TabsContent>

              <TabsContent value="google">
                <GoogleLogin />
              </TabsContent>
            </Tabs>

            <Separator className="my-6" />
            
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Don't have an account?{' '}
                <Button variant="link" className="p-0 h-auto text-blue-600">
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

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>Protected by advanced encryption • Privacy Policy • Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
