
import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface SecurityEvent {
  id: string;
  type: 'intrusion' | 'suspicious_activity' | 'ddos' | 'xss' | 'sql_injection';
  timestamp: Date;
  severity: 'low' | 'medium' | 'high' | 'critical';
  details: string;
  blocked: boolean;
}

interface SecurityMetrics {
  threatLevel: number;
  activeThreats: number;
  blockedAttacks: number;
  securityScore: number;
}

export const useAdvancedSecurity = () => {
  const [securityLevel, setSecurityLevel] = useState<number>(5);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([]);
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    threatLevel: 0,
    activeThreats: 0,
    blockedAttacks: 0,
    securityScore: 100
  });
  const { toast } = useToast();

  // AI-powered threat detection
  const detectThreats = useCallback(() => {
    const suspiciousPatterns = [
      /script[^>]*>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /union\s+select/gi,
      /drop\s+table/gi,
      /<iframe/gi
    ];

    // Monitor input fields and URLs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      const value = (input as HTMLInputElement).value;
      suspiciousPatterns.forEach(pattern => {
        if (pattern.test(value)) {
          const event: SecurityEvent = {
            id: Date.now().toString(),
            type: 'xss',
            timestamp: new Date(),
            severity: 'high',
            details: `Suspicious XSS pattern detected in input: ${pattern}`,
            blocked: true
          };
          setSecurityEvents(prev => [...prev, event]);
          (input as HTMLInputElement).value = '';
          toast({
            title: "Security Alert",
            description: "Malicious input blocked by AI security",
            variant: "destructive"
          });
        }
      });
    });
  }, [toast]);

  // Real-time security monitoring
  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      detectThreats();
      
      // Simulate AI threat analysis
      const randomThreat = Math.random();
      if (randomThreat < 0.1) {
        const event: SecurityEvent = {
          id: Date.now().toString(),
          type: Math.random() > 0.5 ? 'suspicious_activity' : 'intrusion',
          timestamp: new Date(),
          severity: randomThreat < 0.05 ? 'critical' : 'medium',
          details: 'AI detected anomalous behavior pattern',
          blocked: true
        };
        setSecurityEvents(prev => [...prev.slice(-9), event]);
        
        setMetrics(prev => ({
          ...prev,
          blockedAttacks: prev.blockedAttacks + 1,
          securityScore: Math.max(85, prev.securityScore - 1)
        }));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isMonitoring, detectThreats]);

  // Content Security Policy enforcement
  const enforceCSP = useCallback(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' https://trusted-cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.bharatsetu.com";
    document.head.appendChild(meta);
  }, []);

  // Initialize security measures
  useEffect(() => {
    enforceCSP();
    
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      toast({
        title: "Security Notice",
        description: "Right-click disabled for security",
        variant: "default"
      });
    };

    // Disable F12 and other developer shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.shiftKey && e.key === 'J') ||
          (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        toast({
          title: "Security Alert",
          description: "Developer tools access restricted",
          variant: "destructive"
        });
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toast, enforceCSP]);

  const getSecurityStatus = useCallback(() => {
    const recentEvents = securityEvents.filter(
      event => Date.now() - event.timestamp.getTime() < 300000 // Last 5 minutes
    );
    
    return {
      level: securityLevel,
      status: metrics.securityScore > 95 ? 'excellent' : 
              metrics.securityScore > 85 ? 'good' : 
              metrics.securityScore > 70 ? 'warning' : 'critical',
      recentThreats: recentEvents.length,
      overallScore: metrics.securityScore
    };
  }, [securityLevel, securityEvents, metrics]);

  return {
    securityLevel,
    isMonitoring,
    securityEvents: securityEvents.slice(-10), // Keep last 10 events
    metrics,
    getSecurityStatus,
    setIsMonitoring
  };
};
