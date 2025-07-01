
import { Separator } from '@/components/ui/separator';
import { Heart, Code, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">भ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BharatSetu</h3>
                <p className="text-sm text-gray-400">Empowering India, One Citizen at a Time</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Building bridges between citizens and essential services through technology, 
              making governance accessible and empowering every Indian.
            </p>
          </div>

          {/* Modules */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Core Modules</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">SwasthyaMitra</li>
              <li className="hover:text-white cursor-pointer transition-colors">KanoonSathi</li>
              <li className="hover:text-white cursor-pointer transition-colors">YuvaRojgar</li>
              <li className="hover:text-white cursor-pointer transition-colors">SamasyaReport</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-green-400">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with love for India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-blue-500" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-green-500" />
              <span>Community Driven</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            © 2024 BharatSetu. Empowering Digital India.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
