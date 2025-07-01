
export interface HealthSymptom {
  id: string;
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  duration: string;
  description: string;
}

export interface HealthAssessment {
  symptoms: HealthSymptom[];
  riskLevel: 'low' | 'medium' | 'high';
  recommendations: string[];
  nearbyHospitals: Hospital[];
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  distance: number;
  rating: number;
  specialties: string[];
  phone: string;
  ayushmanAccepted: boolean;
}

export class SwasthyaMitraService {
  static async analyzeSymptoms(symptoms: string[]): Promise<HealthAssessment> {
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockSymptoms: HealthSymptom[] = symptoms.map((symptom, index) => ({
      id: `symptom_${index}`,
      name: symptom,
      severity: ['mild', 'moderate', 'severe'][Math.floor(Math.random() * 3)] as any,
      duration: `${Math.floor(Math.random() * 7) + 1} days`,
      description: `Analysis of ${symptom} based on AI assessment`
    }));

    const riskLevel = symptoms.length > 3 ? 'high' : symptoms.length > 1 ? 'medium' : 'low';
    
    const recommendations = [
      'Stay hydrated and get adequate rest',
      'Monitor symptoms for the next 24-48 hours',
      'Consider consulting a healthcare professional',
      'Take prescribed medications as directed'
    ];

    const nearbyHospitals: Hospital[] = [
      {
        id: 'hosp_1',
        name: 'AIIMS Delhi',
        address: 'Ansari Nagar, New Delhi',
        distance: 2.5,
        rating: 4.8,
        specialties: ['Cardiology', 'Neurology', 'Oncology'],
        phone: '+91-11-26588500',
        ayushmanAccepted: true
      },
      {
        id: 'hosp_2',
        name: 'Safdarjung Hospital',
        address: 'Safdarjung, New Delhi',
        distance: 3.2,
        rating: 4.3,
        specialties: ['General Medicine', 'Surgery'],
        phone: '+91-11-26165060',
        ayushmanAccepted: true
      }
    ];

    return {
      symptoms: mockSymptoms,
      riskLevel,
      recommendations,
      nearbyHospitals
    };
  }

  static async searchHospitals(location: string, specialty?: string): Promise<Hospital[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return [
      {
        id: 'hosp_3',
        name: 'Apollo Hospital',
        address: `${location} - Main Branch`,
        distance: 1.8,
        rating: 4.6,
        specialties: ['Cardiology', 'Neurology', 'Orthopedics'],
        phone: '+91-40-23607777',
        ayushmanAccepted: false
      }
    ];
  }

  static async generateHealthReport(userId: string): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return `Health report generated for user ${userId} with AI insights and recommendations.`;
  }
}
