
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, ArrowRight, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DigiLockerRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDigiLockerRegister = async () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "DigiLocker Registration",
        description: "Redirecting to DigiLocker registration...",
      });
      
      setTimeout(() => {
        toast({
          title: "Registration Successful",
          description: "Welcome! Your account has been created via DigiLocker",
        });
        window.location.href = '/account';
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
            DigiLocker Registration
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Create your account using DigiLocker. Your identity will be instantly verified 
            using your Aadhaar and other government documents.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="space-y-2 text-sm">
            <h4 className="font-medium text-blue-800">What you'll get:</h4>
            <ul className="space-y-1 text-blue-700">
              <li>• Instant KYC verification</li>
              <li>• Access to all government services</li>
              <li>• Secure document storage</li>
              <li>• Pre-filled application forms</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="space-y-2 text-sm">
            <h4 className="font-medium text-amber-800">Required Documents:</h4>
            <ul className="space-y-1 text-amber-700">
              <li>• Valid Aadhaar number</li>
              <li>• Mobile number linked to Aadhaar</li>
              <li>• Email address</li>
            </ul>
          </div>
        </div>
      </div>

      <Button 
        onClick={handleDigiLockerRegister}
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
            Register with DigiLocker
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>

      <div className="text-center">
        <p className="text-xs text-gray-500">
          Don't have DigiLocker?{' '}
          <Button variant="link" className="p-0 h-auto text-xs text-blue-600">
            Create DigiLocker Account
          </Button>
        </p>
      </div>
    </div>
  );
};

export default DigiLockerRegister;
