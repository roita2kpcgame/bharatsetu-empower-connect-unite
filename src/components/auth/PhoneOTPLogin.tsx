
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Phone, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PhoneOTPLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { toast } = useToast();

  const handleSendOTP = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsOtpSent(true);
      setIsLoading(false);
      setCountdown(30);
      toast({
        title: "OTP Sent",
        description: `Verification code sent to +91 ${phoneNumber}`,
      });
      
      // Start countdown
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

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the 6-digit OTP",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome to BharatSetu!",
      });
      // Redirect to dashboard
      window.location.href = '/';
    }, 1500);
  };

  const handleResendOTP = () => {
    setCountdown(30);
    toast({
      title: "OTP Resent",
      description: `New verification code sent to +91 ${phoneNumber}`,
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
  };

  return (
    <div className="space-y-6">
      {!isOtpSent ? (
        <>
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
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="pl-12 rounded-l-none"
                  maxLength={10}
                />
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleSendOTP} 
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isLoading || phoneNumber.length !== 10}
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
        </>
      ) : (
        <>
          <div className="text-center space-y-2">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
            <h3 className="font-semibold text-gray-800">OTP Sent Successfully</h3>
            <p className="text-sm text-gray-600">
              Enter the 6-digit code sent to +91 {phoneNumber}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
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
              onClick={handleVerifyOTP} 
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={isLoading || otp.length !== 6}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Verifying...
                </>
              ) : (
                'Verify & Login'
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
                  onClick={handleResendOTP}
                  className="text-blue-600 p-0"
                >
                  Resend OTP
                </Button>
              )}
            </div>

            <Button 
              variant="outline" 
              onClick={() => {
                setIsOtpSent(false);
                setOtp('');
                setCountdown(0);
              }}
              className="w-full"
            >
              Change Number
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default PhoneOTPLogin;
