
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Chrome, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GoogleRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGoogleRegister = async () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Google Registration",
        description: "Opening Google sign-up...",
      });
      
      setTimeout(() => {
        toast({
          title: "Registration Successful",
          description: "Welcome! Your account has been created with Google",
        });
        window.location.href = '/account';
      }, 2000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
          <Chrome className="w-8 h-8 text-white" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Google Registration
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Create your BharatSetu account using your Google account. 
            Quick, secure, and no password to remember.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div className="space-y-2 text-sm">
            <h4 className="font-medium text-gray-800">Benefits of Google Sign-Up:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• One-click registration</li>
              <li>• Secure Google authentication</li>
              <li>• Sync across all your devices</li>
              <li>• Auto-fill personal information</li>
            </ul>
          </div>
        </div>
      </div>

      <Button 
        onClick={handleGoogleRegister}
        variant="outline"
        className="w-full border-2 hover:bg-gray-50 text-gray-700"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2"></div>
            Connecting to Google...
          </>
        ) : (
          <>
            <Chrome className="w-5 h-5 mr-3 text-blue-600" />
            Continue with Google
          </>
        )}
      </Button>

      <div className="text-center">
        <p className="text-xs text-gray-500">
          By continuing, you agree to Google's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default GoogleRegister;
