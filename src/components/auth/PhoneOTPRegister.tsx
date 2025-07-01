
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Phone, Send, CheckCircle, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PhoneOTPRegister = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    otp: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { toast } = useToast();

  const handleSendOTP = async () => {
    if (!formData.name || !formData.phoneNumber || formData.phoneNumber.length !== 10) {
      toast({
        title: "Missing Information",
        description: "Please enter your name and a valid 10-digit phone number",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setStep(2);
      setIsLoading(false);
      setCountdown(30);
      toast({
        title: "OTP Sent",
        description: `Verification code sent to +91 ${formData.phoneNumber}`,
      });
      
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 2000);
  };

  const handleVerifyAndRegister = async () => {
    if (!formData.otp || formData.otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the 6-digit OTP",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful",
        description: "Welcome to BharatSetu!",
      });
      window.location.href = '/account';
    }, 1500);
  };

  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Mobile Number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <div className="flex">
              <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50 text-sm text-gray-600">
                +91
              </div>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter 10-digit number"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value.replace(/\D/g, '').slice(0, 10)})}
                className="pl-12 rounded-l-none"
                maxLength={10}
              />
            </div>
          </div>
        </div>
        
        <Button 
          onClick={handleSendOTP} 
          className="w-full bg-green-600 hover:bg-green-700"
          disabled={isLoading || !formData.name || formData.phoneNumber.length !== 10}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Sending OTP...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send OTP
            </>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
        <h3 className="font-semibold text-gray-800">OTP Sent Successfully</h3>
        <p className="text-sm text-gray-600">
          Enter the 6-digit code sent to +91 {formData.phoneNumber}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center">
          <InputOTP
            maxLength={6}
            value={formData.otp}
            onChange={(value) => setFormData({...formData, otp: value})}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button 
          onClick={handleVerifyAndRegister} 
          className="w-full bg-green-600 hover:bg-green-700"
          disabled={isLoading || formData.otp.length !== 6}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Creating Account...
            </>
          ) : (
            'Verify & Create Account'
          )}
        </Button>

        <div className="text-center">
          {countdown > 0 ? (
            <p className="text-sm text-gray-500">
              Resend OTP in {countdown}s
            </p>
          ) : (
            <Button 
              variant="link" 
              onClick={handleSendOTP}
              className="text-blue-600 p-0"
            >
              Resend OTP
            </Button>
          )}
        </div>

        <Button 
          variant="outline" 
          onClick={() => setStep(1)}
          className="w-full"
        >
          Change Details
        </Button>
      </div>
    </div>
  );
};

export default PhoneOTPRegister;
