
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Activity,
  Lock,
  Eye,
  Zap
} from 'lucide-react';
import { useAdvancedSecurity } from '@/hooks/useAdvancedSecurity';

const SecurityDashboard: React.FC = () => {
  const { securityEvents, metrics, getSecurityStatus } = useAdvancedSecurity();
  const status = getSecurityStatus();

  const getStatusIcon = () => {
    switch (status.status) {
      case 'excellent': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'good': return <Shield className="w-5 h-5 text-blue-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case 'critical': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default: return <Shield className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = () => {
    switch (status.status) {
      case 'excellent': return 'text-green-600 bg-green-50';
      case 'good': return 'text-blue-600 bg-blue-50';
      case 'warning': return 'text-orange-600 bg-orange-50';
      case 'critical': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="fixed top-4 left-4 z-40 w-80 max-w-[calc(100vw-2rem)] md:w-80">
      <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-md">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {getStatusIcon()}
              <span className="text-lg">Security Level {status.level}</span>
            </div>
            <Badge className={getStatusColor()}>
              {status.status.toUpperCase()}
            </Badge>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Security Score */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Overall Security Score</span>
              <span className="font-medium">{status.overallScore}%</span>
            </div>
            <Progress value={status.overallScore} className="h-2" />
          </div>

          {/* Security Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-3">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <div>
                  <div className="text-xs text-gray-600">Blocked Attacks</div>
                  <div className="font-semibold">{metrics.blockedAttacks}</div>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-green-500" />
                <div>
                  <div className="text-xs text-gray-600">Active Monitoring</div>
                  <div className="font-semibold">24/7</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Security Features */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Active Protections</h4>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <Lock className="w-3 h-3 text-green-500" />
                  <span>XSS Protection</span>
                </div>
                <Badge variant="outline" className="text-xs">Active</Badge>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <Eye className="w-3 h-3 text-green-500" />
                  <span>AI Threat Detection</span>
                </div>
                <Badge variant="outline" className="text-xs">Active</Badge>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <Zap className="w-3 h-3 text-green-500" />
                  <span>Real-time Monitoring</span>
                </div>
                <Badge variant="outline" className="text-xs">Active</Badge>
              </div>
            </div>
          </div>

          {/* Recent Security Events */}
          {securityEvents.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Recent Events</h4>
              <div className="space-y-1 max-h-20 overflow-y-auto">
                {securityEvents.slice(0, 3).map((event) => (
                  <div key={event.id} className="flex items-center justify-between text-xs p-2 bg-gray-50 rounded">
                    <span className="truncate">{event.details}</span>
                    <Badge 
                      variant={event.blocked ? "default" : "destructive"} 
                      className="text-xs ml-2"
                    >
                      {event.blocked ? 'Blocked' : 'Alert'}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Security Notice */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <div>
                <div className="text-xs font-medium text-blue-800">
                  AI-Powered Security
                </div>
                <div className="text-xs text-blue-600">
                  Advanced threat detection active
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityDashboard;
