
export interface JobSeeker {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  age: number;
  education: Education[];
  skills: Skill[];
  experience: WorkExperience[];
  preferences: JobPreferences;
  resume?: string;
  portfolio?: string;
  socialProfiles: SocialProfile[];
  certifications: Certification[];
  aiProfile: AIJobSeekerProfile;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: number;
  grade: string;
  specialization?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  verified: boolean;
  endorsements: number;
  category: 'technical' | 'soft' | 'language' | 'certification';
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: {
    start: string;
    end?: string;
  };
  description: string;
  skills: string[];
  achievements: string[];
}

export interface JobPreferences {
  jobTypes: string[];
  industries: string[];
  locations: string[];
  salaryRange: {
    min: number;
    max: number;
  };
  workMode: 'remote' | 'onsite' | 'hybrid' | 'flexible';
  availability: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
  salary: {
    min: number;
    max: number;
  };
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  postedDate: string;
  deadline: string;
  industry: string;
  experienceLevel: 'entry' | 'mid' | 'senior' | 'executive';
  workMode: 'remote' | 'onsite' | 'hybrid';
  skills: string[];
  aiMatchScore?: number;
  applicationStatus?: 'not_applied' | 'applied' | 'shortlisted' | 'interviewed' | 'selected' | 'rejected';
}

export interface AIJobSeekerProfile {
  strengths: string[];
  weaknesses: string[];
  careerSuggestions: string[];
  skillGaps: SkillGap[];
  marketValue: number;
  competitiveAdvantage: string;
  personalityType: string;
  workStyle: string;
}

export interface SkillGap {
  skill: string;
  currentLevel: string;
  requiredLevel: string;
  learningPath: string[];
  timeToAcquire: string;
  importance: 'low' | 'medium' | 'high' | 'critical';
}

export interface CareerPath {
  currentRole: string;
  nextRoles: string[];
  timeline: string;
  skillsToAcquire: string[];
  certifications: string[];
  experienceNeeded: string;
  salaryProgression: number[];
}

export interface InterviewPreparation {
  commonQuestions: Array<{
    question: string;
    suggestedAnswer: string;
    tips: string[];
  }>;
  technicalQuestions: Array<{
    topic: string;
    questions: string[];
    resources: string[];
  }>;
  companySpecific: Array<{
    company: string;
    culture: string;
    questions: string[];
    tips: string[];
  }>;
}

export interface SkillAssessment {
  skillName: string;
  score: number;
  level: string;
  strengths: string[];
  improvements: string[];
  certificationSuggestions: string[];
  learningResources: string[];
}

export class YuvaRojgarService {
  private static aiJobModel = 'advanced-career-ai-v3';

  static async getPersonalizedJobs(userId: string, preferences: JobPreferences): Promise<Job[]> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return [
      {
        id: 'job_1',
        title: 'Senior Software Developer',
        company: 'TechCorp India',
        location: 'Bangalore, Karnataka',
        type: 'full-time',
        salary: { min: 800000, max: 1200000 },
        description: 'Join our dynamic team to build next-generation applications using cutting-edge technologies.',
        requirements: [
          '3+ years experience in React/Node.js',
          'Strong problem-solving skills',
          'Experience with cloud platforms (AWS/Azure)',
          'Good communication skills'
        ],
        responsibilities: [
          'Develop and maintain web applications',
          'Collaborate with cross-functional teams',
          'Code reviews and mentoring junior developers',
          'Participate in architectural decisions'
        ],
        benefits: [
          'Health insurance for family',
          'Flexible working hours',
          'Performance bonuses',
          'Learning and development budget'
        ],
        postedDate: '2024-01-15',
        deadline: '2024-02-15',
        industry: 'Technology',
        experienceLevel: 'mid',
        workMode: 'hybrid',
        skills: ['React', 'Node.js', 'JavaScript', 'AWS', 'MongoDB'],
        aiMatchScore: 87
      },
      {
        id: 'job_2',
        title: 'Digital Marketing Manager',
        company: 'GrowthMax Solutions',
        location: 'Mumbai, Maharashtra',
        type: 'full-time',
        salary: { min: 600000, max: 900000 },
        description: 'Lead our digital marketing initiatives and drive customer acquisition through innovative campaigns.',
        requirements: [
          '2+ years in digital marketing',
          'Experience with Google Ads, Facebook Ads',
          'Analytics and data-driven approach',
          'Creative thinking and execution'
        ],
        responsibilities: [
          'Plan and execute digital marketing campaigns',
          'Manage social media presence',
          'Analyze campaign performance',
          'Collaborate with design and content teams'
        ],
        benefits: [
          'Performance-based incentives',
          'Health and wellness programs',
          'Flexible work arrangements',
          'Career growth opportunities'
        ],
        postedDate: '2024-01-20',
        deadline: '2024-02-20',
        industry: 'Marketing',
        experienceLevel: 'mid',
        workMode: 'hybrid',
        skills: ['Digital Marketing', 'Google Ads', 'Social Media', 'Analytics'],
        aiMatchScore: 73
      },
      {
        id: 'job_3',
        title: 'Data Scientist',
        company: 'AI Innovations Ltd',
        location: 'Hyderabad, Telangana',
        type: 'full-time',
        salary: { min: 1000000, max: 1500000 },
        description: 'Work on cutting-edge AI/ML projects and help drive data-driven decision making.',
        requirements: [
          'Masters in Computer Science/Statistics',
          'Experience with Python, R, SQL',
          'Machine Learning and Deep Learning expertise',
          'Strong analytical and problem-solving skills'
        ],
        responsibilities: [
          'Develop machine learning models',
          'Analyze large datasets for insights',
          'Collaborate with engineering teams',
          'Present findings to stakeholders'
        ],
        benefits: [
          'Competitive salary and equity',
          'Latest technology and tools',
          'Conference and training budget',
          'Flexible work environment'
        ],
        postedDate: '2024-01-25',
        deadline: '2024-02-25',
        industry: 'Technology',
        experienceLevel: 'mid',
        workMode: 'remote',
        skills: ['Python', 'Machine Learning', 'SQL', 'Statistics', 'Deep Learning'],
        aiMatchScore: 91
      }
    ];
  }

  static async analyzeSkillGaps(userId: string, targetRole: string): Promise<SkillGap[]> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return [
      {
        skill: 'Cloud Computing (AWS)',
        currentLevel: 'beginner',
        requiredLevel: 'intermediate',
        learningPath: [
          'AWS Fundamentals Course',
          'Hands-on Labs and Projects',
          'AWS Solutions Architect Certification',
          'Real-world Project Implementation'
        ],
        timeToAcquire: '3-4 months',
        importance: 'high'
      },
      {
        skill: 'System Design',
        currentLevel: 'none',
        requiredLevel: 'intermediate',
        learningPath: [
          'System Design Fundamentals',
          'Database Design Principles',
          'Scalability Patterns',
          'Practice with Mock Interviews'
        ],
        timeToAcquire: '2-3 months',
        importance: 'critical'
      },
      {
        skill: 'Leadership & Team Management',
        currentLevel: 'beginner',
        requiredLevel: 'intermediate',
        learningPath: [
          'Leadership Fundamentals Course',
          'Team Management Workshops',
          'Mentoring Junior Developers',
          'Project Management Certification'
        ],
        timeToAcquire: '4-6 months',
        importance: 'medium'
      }
    ];
  }

  static async generateCareerPath(currentRole: string, aspirations: string[]): Promise<CareerPath> {
    await new Promise(resolve => setTimeout(resolve, 1800));
    
    return {
      currentRole,
      nextRoles: [
        'Senior Software Developer',
        'Technical Lead',
        'Engineering Manager',
        'Principal Engineer'
      ],
      timeline: '2-5 years progression path',
      skillsToAcquire: [
        'Advanced System Design',
        'Cloud Architecture',
        'Team Leadership',
        'Product Management',
        'Strategic Planning'
      ],
      certifications: [
        'AWS Solutions Architect',
        'Google Cloud Professional',
        'Scrum Master Certification',
        'PMP Certification'
      ],
      experienceNeeded: 'Lead 2-3 major projects, mentor junior developers, cross-functional collaboration',
      salaryProgression: [800000, 1200000, 1800000, 2500000]
    };
  }

  static async getInterviewPreparation(jobId: string, userId: string): Promise<InterviewPreparation> {
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    return {
      commonQuestions: [
        {
          question: 'Tell me about yourself',
          suggestedAnswer: 'Focus on your professional journey, key achievements, and what makes you passionate about this role.',
          tips: [
            'Keep it concise (1-2 minutes)',
            'Structure: Present → Past → Future',
            'Align with job requirements',
            'Practice out loud'
          ]
        },
        {
          question: 'What are your strengths and weaknesses?',
          suggestedAnswer: 'Choose strengths relevant to the job and weaknesses you\'re actively working to improve.',
          tips: [
            'Provide specific examples',
            'Show self-awareness',
            'Demonstrate growth mindset',
            'Be authentic'
          ]
        },
        {
          question: 'Why do you want to work here?',
          suggestedAnswer: 'Research the company thoroughly and connect their values/mission with your career goals.',
          tips: [
            'Research company culture and values',
            'Mention specific projects or initiatives',
            'Show genuine interest',
            'Connect to your career aspirations'
          ]
        }
      ],
      technicalQuestions: [
        {
          topic: 'JavaScript/React',
          questions: [
            'Explain the virtual DOM and its benefits',
            'What are React hooks and when would you use them?',
            'How do you handle state management in large applications?'
          ],
          resources: [
            'React Official Documentation',
            'JavaScript MDN Web Docs',
            'LeetCode for coding practice'
          ]
        },
        {
          topic: 'System Design',
          questions: [
            'Design a URL shortener like bit.ly',
            'How would you scale a social media application?',
            'Explain database sharding and its trade-offs'
          ],
          resources: [
            'System Design Interview book',
            'High Scalability blog',
            'Design Patterns documentation'
          ]
        }
      ],
      companySpecific: [
        {
          company: 'TechCorp India',
          culture: 'Innovation-focused, collaborative, fast-paced startup environment',
          questions: [
            'How do you stay updated with latest technologies?',
            'Describe a time you had to learn something new quickly',
            'How do you handle tight deadlines?'
          ],
          tips: [
            'Emphasize adaptability and learning agility',
            'Show examples of innovation and problem-solving',
            'Demonstrate teamwork and collaboration skills'
          ]
        }
      ]
    };
  }

  static async assessSkill(skillName: string, responses: Record<string, any>): Promise<SkillAssessment> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      skillName,
      score: Math.floor(Math.random() * 30) + 70,
      level: 'Intermediate',
      strengths: [
        'Strong foundational knowledge',
        'Good practical application skills',
        'Problem-solving approach'
      ],
      improvements: [
        'Advanced concepts understanding',
        'Performance optimization techniques',
        'Best practices implementation'
      ],
      certificationSuggestions: [
        'AWS Certified Developer',
        'React Professional Certification',
        'JavaScript Advanced Certification'
      ],
      learningResources: [
        'Advanced React Patterns Course',
        'JavaScript Design Patterns',
        'System Design for Frontend Developers',
        'Performance Optimization Workshop'
      ]
    };
  }

  static async getGovernmentSchemes(category: string): Promise<Array<{
    name: string;
    description: string;
    eligibility: string[];
    benefits: string[];
    applicationProcess: string[];
    deadline: string;
    website: string;
  }>> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return [
      {
        name: 'Pradhan Mantri Mudra Yojana',
        description: 'Financial support for micro and small enterprises',
        eligibility: [
          'Age 18-65 years',
          'Business plan required',
          'No income limit',
          'Indian citizen'
        ],
        benefits: [
          'Loans up to ₹10 lakhs',
          'No collateral required',
          'Low interest rates',
          'Flexible repayment'
        ],
        applicationProcess: [
          'Visit nearest bank/NBFC',
          'Submit application with documents',
          'Business plan presentation',
          'Loan approval and disbursement'
        ],
        deadline: 'Ongoing scheme',
        website: 'https://www.mudra.org.in'
      },
      {
        name: 'Stand-Up India Scheme',
        description: 'Bank loans for SC/ST and women entrepreneurs',
        eligibility: [
          'SC/ST or Women entrepreneur',
          'Age 18+ years',
          'At least 51% stake in company',
          'Greenfield enterprise'
        ],
        benefits: [
          'Loans ₹10 lakh to ₹1 crore',
          'Handholding support',
          'Credit guarantee',
          'Lower interest rates'
        ],
        applicationProcess: [
          'Online application portal',
          'Document verification',
          'Business plan evaluation',
          'Loan sanction and disbursement'
        ],
        deadline: 'Open till 2025',
        website: 'https://www.standupmitra.in'
      }
    ];
  }

  static async optimizeResume(resumeText: string): Promise<{
    optimizedResume: string;
    improvements: string[];
    atsScore: number;
    keywords: string[];
  }> {
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    return {
      optimizedResume: `AI-OPTIMIZED RESUME

CONTACT INFORMATION
[Improved formatting and professional email]

PROFESSIONAL SUMMARY
[AI-enhanced summary highlighting key achievements and skills]

TECHNICAL SKILLS
[Reorganized with relevant keywords and proficiency levels]

WORK EXPERIENCE
[Quantified achievements with metrics and impact]

EDUCATION
[Enhanced with relevant coursework and academic achievements]

CERTIFICATIONS & PROJECTS
[Added relevant certifications and portfolio projects]

KEYWORDS OPTIMIZED FOR ATS SYSTEMS`,
      
      improvements: [
        'Added quantifiable achievements with metrics',
        'Improved keyword density for ATS compatibility',
        'Enhanced professional summary with value proposition',
        'Reorganized sections for better readability',
        'Added relevant technical skills and certifications'
      ],
      atsScore: 85,
      keywords: [
        'JavaScript', 'React', 'Node.js', 'AWS', 'MongoDB',
        'Agile', 'Scrum', 'Git', 'REST APIs', 'Team Leadership'
      ]
    };
  }
}
