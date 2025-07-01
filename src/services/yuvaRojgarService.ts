
export interface SkillAssessment {
  id: string;
  skills: Skill[];
  recommendations: string[];
  careerPaths: CareerPath[];
  govSchemes: GovernmentScheme[];
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  score: number;
  improvement_areas: string[];
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  averageSalary: number;
  growthProspects: string;
  courses: Course[];
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  cost: number;
  certification: boolean;
  pmkvyApproved: boolean;
}

export interface GovernmentScheme {
  id: string;
  name: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  applicationProcess: string;
  deadline?: string;
}

export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  type: 'full-time' | 'part-time' | 'freelance' | 'internship';
  skills: string[];
  experience: string;
  postedDate: string;
}

export class YuvaRojgarService {
  static async assessSkills(answers: Record<string, any>): Promise<SkillAssessment> {
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const skills: Skill[] = [
      {
        name: 'Communication',
        level: 'intermediate',
        score: 75,
        improvement_areas: ['Public speaking', 'Written communication']
      },
      {
        name: 'Digital Literacy',
        level: 'advanced',
        score: 85,
        improvement_areas: ['Advanced Excel', 'Data Analysis']
      },
      {
        name: 'Problem Solving',
        level: 'intermediate',
        score: 70,
        improvement_areas: ['Critical thinking', 'Analytical skills']
      }
    ];

    const careerPaths: CareerPath[] = [
      {
        id: 'career_1',
        title: 'Digital Marketing Specialist',
        description: 'Create and manage digital marketing campaigns',
        requiredSkills: ['Digital Marketing', 'Social Media', 'Analytics'],
        averageSalary: 450000,
        growthProspects: 'High demand in growing digital economy',
        courses: [
          {
            id: 'course_1',
            title: 'Google Digital Marketing Course',
            provider: 'Google',
            duration: '6 months',
            cost: 0,
            certification: true,
            pmkvyApproved: true
          }
        ]
      }
    ];

    const govSchemes: GovernmentScheme[] = [
      {
        id: 'scheme_1',
        name: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY)',
        description: 'Skill development initiative for youth',
        eligibility: ['Age 18-45', 'Indian citizen', 'School dropout or unemployed'],
        benefits: ['Free training', 'Certification', 'Job placement assistance'],
        applicationProcess: 'Apply through official PMKVY portal',
        deadline: '2024-03-31'
      }
    ];

    return {
      id: 'assessment_1',
      skills,
      recommendations: [
        'Focus on improving communication skills',
        'Consider digital marketing career path',
        'Apply for PMKVY certification programs'
      ],
      careerPaths,
      govSchemes
    };
  }

  static async searchJobs(filters: {
    location?: string;
    skills?: string[];
    experience?: string;
    salary?: number;
  }): Promise<JobOpportunity[]> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return [
      {
        id: 'job_1',
        title: 'Junior Software Developer',
        company: 'TechCorp India',
        location: 'Bangalore',
        salary: 400000,
        type: 'full-time',
        skills: ['JavaScript', 'React', 'Node.js'],
        experience: '0-2 years',
        postedDate: '2024-01-15'
      },
      {
        id: 'job_2',
        title: 'Digital Marketing Executive',
        company: 'Marketing Solutions Ltd',
        location: 'Mumbai',
        salary: 350000,
        type: 'full-time',
        skills: ['SEO', 'Social Media', 'Content Writing'],
        experience: '1-3 years',
        postedDate: '2024-01-12'
      }
    ];
  }

  static async getInterviewPrep(jobRole: string): Promise<{
    questions: string[];
    tips: string[];
    resources: string[];
  }> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      questions: [
        'Tell me about yourself',
        'Why do you want this role?',
        'What are your strengths and weaknesses?',
        'Where do you see yourself in 5 years?'
      ],
      tips: [
        'Research the company thoroughly',
        'Practice common interview questions',
        'Prepare specific examples of your achievements',
        'Dress professionally and arrive early'
      ],
      resources: [
        'Mock interview videos',
        'Industry-specific preparation guides',
        'Salary negotiation tips',
        'Post-interview follow-up templates'
      ]
    };
  }
}
