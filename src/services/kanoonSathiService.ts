
export interface LegalDocument {
  id: string;
  type: 'fir' | 'complaint' | 'affidavit' | 'agreement' | 'notice';
  title: string;
  template: string;
  requiredFields: string[];
  description: string;
}

export interface LegalConsultation {
  id: string;
  lawyerName: string;
  specialization: string[];
  experience: number;
  rating: number;
  fees: number;
  availability: string[];
  languages: string[];
}

export interface CaseStatus {
  id: string;
  caseNumber: string;
  court: string;
  status: 'filed' | 'pending' | 'hearing' | 'resolved';
  nextDate: string;
  updates: string[];
}

export class KanoonSathiService {
  static async getDocumentTemplates(): Promise<LegalDocument[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return [
      {
        id: 'doc_1',
        type: 'fir',
        title: 'First Information Report (FIR)',
        template: 'Standard FIR template with AI assistance',
        requiredFields: ['incident_date', 'location', 'description', 'witness_details'],
        description: 'File an FIR for criminal complaints'
      },
      {
        id: 'doc_2',
        type: 'complaint',
        title: 'Consumer Complaint',
        template: 'Consumer forum complaint template',
        requiredFields: ['company_name', 'issue_description', 'loss_amount', 'evidence'],
        description: 'File consumer complaints against companies'
      },
      {
        id: 'doc_3',
        type: 'affidavit',
        title: 'General Affidavit',
        template: 'Sworn statement template',
        requiredFields: ['statement', 'purpose', 'personal_details'],
        description: 'Create legal affidavits for various purposes'
      }
    ];
  }

  static async generateDocument(templateId: string, data: Record<string, string>): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return `Document generated using AI with template ${templateId} and provided data. 
    The document includes proper legal formatting and relevant clauses based on Indian law.`;
  }

  static async findLawyers(specialization: string, location: string): Promise<LegalConsultation[]> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return [
      {
        id: 'lawyer_1',
        lawyerName: 'Adv. Priya Sharma',
        specialization: ['Criminal Law', 'Family Law'],
        experience: 8,
        rating: 4.7,
        fees: 2000,
        availability: ['Mon-Fri 10AM-6PM'],
        languages: ['Hindi', 'English']
      },
      {
        id: 'lawyer_2',
        lawyerName: 'Adv. Rajesh Kumar',
        specialization: ['Civil Law', 'Property Law'],
        experience: 12,
        rating: 4.5,
        fees: 2500,
        availability: ['Tue-Sat 9AM-5PM'],
        languages: ['Hindi', 'English', 'Bengali']
      }
    ];
  }

  static async trackCase(caseNumber: string): Promise<CaseStatus> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      id: 'case_1',
      caseNumber,
      court: 'District Court, Delhi',
      status: 'hearing',
      nextDate: '2024-02-15',
      updates: [
        'Case filed successfully',
        'Initial hearing completed',
        'Next hearing scheduled'
      ]
    };
  }
}
