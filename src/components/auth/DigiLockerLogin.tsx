
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DigiLockerLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDigiLockerLogin = async () => {
    setIsLoading(true);
    
    // Simulate DigiLocker authentication process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "DigiLocker Authentication",
        description: "Redirecting to DigiLocker portal...",
      });
      
      // In a real implementation, this would redirect to DigiLocker OAuth
      setTimeout(() => {
        toast({
          title: "Login Successful",
          description: "Welcome! Authenticated via DigiLocker",
        });
        window.location.href = '/';
      }, 2000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <Shield className="w-8 h-8 text-white" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            DigiLocker Authentication
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Login securely using your DigiLocker credentials. Your documents and identity 
            are verified by the Government of India.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="space-y-2 text-sm">
            <h4 className="font-medium text-blue-800">Benefits of DigiLocker Login:</h4>
            <ul className="space-y-1 text-blue-700">
              <li>• Instant identity verification</li>
              <li>• Access to your official documents</li>
              <li>• Government-grade security</li>
              <li>• No need to upload documents separately</li>
            </ul>
          </div>
        </div>
      </div>

      <Button 
        onClick={handleDigiLockerLogin}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Connecting to DigiLocker...
          </>
        ) : (
          <>
            <Shield className="w-4 h-4 mr-2" />
            Login with DigiLocker
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>

      <div className="text-center">
        <p className="text-xs text-gray-500">
          New to DigiLocker?{' '}
          <Button variant="link" className="p-0 h-auto text-xs text-blue-600">
            Create Account
          </Button>
        </p>
      </div>
    </div>
  );
};

export default DigiLockerLogin;
