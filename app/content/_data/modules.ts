// app/content/_data/modules.ts

export type MaterialType = "PDF" | "LINK" | "VIDEO" | "NOTE";

export interface Material {
  id: string;
  title: string;
  type: MaterialType;
  url: string;
  description?: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  answer: number;
  marks?: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
  passingScore?: number;
  timeLimit?: number; // in minutes
}

export interface Questionnaire {
  id: string;
  title: string;
  questions: {
    id: string;
    q: string;
    type: "likert" | "text" | "multiple";
    scale?: number;
    options?: string[];
  }[];
}

export interface Chapter {
  id: string;
  title: string;
  content?: string;
  order?: number;
  materials?: Material[];
  quiz?: Quiz;
  questionnaire?: Questionnaire;
}

export interface ModuleData {
  id: string;
  slug: string;
  title: string;
  description?: string;
  order?: number;
  chapters: Chapter[];
  totalMaterials?: number;
  totalQuizzes?: number;
}

/**
 * Five comprehensive modules for BIS714B - Software Quality Assurance
 */
export const modules: ModuleData[] = [
  {
    id: "m1",
    slug: "software-quality-challenge",
    title: "The Software Quality Challenge",
    description: "Fundamental concepts of software quality, definitions, classifications, and software quality factors",
    order: 1,
    chapters: [
      {
        id: "m1-c1",
        title: "Introduction to Software Quality",
        content:
          "Understanding the uniqueness of software quality assurance, environments for which SQA methods are developed, and fundamental definitions of software quality and software itself.",
        order: 1,
        materials: [
          {
            id: "m1-c1-m1",
            title: "Software Quality Fundamentals",
            type: "PDF",
            url: "/uploads/software-quality-fundamentals.pdf",
            description: "Introduction to software quality concepts and definitions"
          },
          {
            id: "m1-c1-m2",
            title: "SQA Environments",
            type: "PDF",
            url: "/uploads/sqa-environments.pdf",
            description: "Environments for which SQA methods are developed"
          }
        ],
        quiz: {
          id: "m1-q1",
          title: "Software Quality Basics Quiz",
          description: "Test your understanding of fundamental software quality concepts",
          passingScore: 70,
          questions: [
            {
              id: "m1-q1-1",
              text: "What makes software quality assurance unique?",
              options: [
                "Software is intangible and complex",
                "Software development is linear",
                "Software quality is easy to measure",
                "Software doesn't require testing"
              ],
              answer: 0,
              marks: 1,
              explanation: "Software quality assurance is unique because software is intangible, complex, and requires special approaches to ensure quality."
            },
            {
              id: "m1-q1-2",
              text: "Which of the following is a correct definition of software quality?",
              options: [
                "Meeting customer requirements and expectations",
                "Having no bugs",
                "Being expensive",
                "Having many features"
              ],
              answer: 0,
              marks: 1,
              explanation: "Software quality is defined by meeting customer requirements and expectations, not just the absence of bugs."
            }
          ]
        }
      },
      {
        id: "m1-c2",
        title: "Software Errors, Faults, and Failures",
        content:
          "Understanding software errors, faults, and failures, along with classification of their causes and how they relate to software quality.",
        order: 2,
        materials: [
          {
            id: "m1-c2-m1",
            title: "Error Classification",
            type: "PDF",
            url: "/uploads/error-classification.pdf",
            description: "Classification of software errors, faults, and failures"
          }
        ]
      },
      {
        id: "m1-c3",
        title: "Software Quality Definition and Objectives",
        content:
          "Comprehensive coverage of software quality definition, SQA definition and objectives, and SQA in relation to software engineering.",
        order: 3,
        materials: [
          {
            id: "m1-c3-m1",
            title: "SQA Objectives",
            type: "PDF",
            url: "/uploads/sqa-objectives.pdf",
            description: "Software Quality Assurance objectives and definitions"
          }
        ]
      },
      {
        id: "m1-c4",
        title: "Software Quality Factors",
        content:
          "The need for comprehensive software quality requirements, classifications of software requirements into software quality factors including product operation, product revision, and product transition factors. Alternative models and stakeholders in quality requirements.",
        order: 4,
        materials: [
          {
            id: "m1-c4-m1",
            title: "Quality Factors Classification",
            type: "PDF",
            url: "/uploads/quality-factors.pdf",
            description: "Classification of software quality factors"
          },
          {
            id: "m1-c4-m2",
            title: "Product Operation Factors",
            type: "PDF",
            url: "/uploads/product-operation-factors.pdf",
            description: "Product operation software quality factors"
          },
          {
            id: "m1-c4-m3",
            title: "Product Revision and Transition Factors",
            type: "PDF",
            url: "/uploads/product-revision-transition.pdf",
            description: "Product revision and transition software quality factors"
          }
        ],
        quiz: {
          id: "m1-q2",
          title: "Software Quality Factors Quiz",
          description: "Assess your knowledge of software quality factors",
          passingScore: 70,
          questions: [
            {
              id: "m1-q2-1",
              text: "Which category includes reliability and usability?",
              options: [
                "Product operation factors",
                "Product revision factors",
                "Product transition factors",
                "Management factors"
              ],
              answer: 0,
              marks: 1,
              explanation: "Reliability and usability are part of product operation software quality factors."
            }
          ]
        }
      }
    ]
  },

  {
    id: "m2",
    slug: "components-of-sqa",
    title: "The Components of the Software Quality Assurance",
    description: "SQA system architecture, pre-project components, project life cycle components, and infrastructure components",
    order: 2,
    chapters: [
      {
        id: "m2-c1",
        title: "SQA System Architecture",
        content:
          "Understanding the SQA system as an architecture, including pre-project components, software project life cycle components, and infrastructure components for error prevention and improvement.",
        order: 1,
        materials: [
          {
            id: "m2-c1-m1",
            title: "SQA Architecture Overview",
            type: "PDF",
            url: "/uploads/sqa-architecture.pdf",
            description: "Overview of SQA system architecture"
          }
        ]
      },
      {
        id: "m2-c2",
        title: "Management and Infrastructure Components",
        content:
          "Management SQA components, standards, system certification, and assessment components. Organizing for SQA including human components and considerations guiding the construction of an organization's SQA system.",
        order: 2,
        materials: [
          {
            id: "m2-c2-m1",
            title: "Management Components",
            type: "PDF",
            url: "/uploads/management-components.pdf",
            description: "Management SQA components"
          },
          {
            id: "m2-c2-m2",
            title: "Infrastructure Components",
            type: "PDF",
            url: "/uploads/infrastructure-components.pdf",
            description: "Infrastructure components for error prevention"
          }
        ]
      },
      {
        id: "m2-c3",
        title: "Contract Review",
        content:
          "Introduction to contract review, the contract review process and its stages, contract review objectives, implementation of a contract review, contract review subjects, and contract reviews for internal projects.",
        order: 3,
        materials: [
          {
            id: "m2-c3-m1",
            title: "Contract Review Process",
            type: "PDF",
            url: "/uploads/contract-review.pdf",
            description: "Contract review process and implementation"
          }
        ],
        quiz: {
          id: "m2-q1",
          title: "Contract Review Quiz",
          description: "Test your understanding of contract review processes",
          passingScore: 70,
          questions: [
            {
              id: "m2-q1-1",
              text: "What is the primary objective of contract review?",
              options: [
                "To ensure all requirements are clear and feasible",
                "To increase project cost",
                "To delay project start",
                "To avoid documentation"
              ],
              answer: 0,
              marks: 1,
              explanation: "Contract review ensures all requirements are clear, feasible, and well-understood before project start."
            }
          ]
        }
      }
    ]
  },

  {
    id: "m3",
    slug: "sqa-project-lifecycle",
    title: "SQA Components in the Project Life Cycle",
    description: "Software development methodologies, verification, validation, qualification, and software testing strategies",
    order: 3,
    chapters: [
      {
        id: "m3-c1",
        title: "Software Development Methodologies",
        content:
          "Understanding classic and other software development methodologies, and factors affecting the intensity of quality assurance activities in the development process.",
        order: 1,
        materials: [
          {
            id: "m3-c1-m1",
            title: "Development Methodologies",
            type: "PDF",
            url: "/uploads/development-methodologies.pdf",
            description: "Classic and modern software development methodologies"
          }
        ]
      },
      {
        id: "m3-c2",
        title: "Verification, Validation, and Qualification",
        content:
          "Understanding verification, validation, and qualification processes, and a model for SQA defect removal effectiveness and cost.",
        order: 2,
        materials: [
          {
            id: "m3-c2-m1",
            title: "V&V Processes",
            type: "PDF",
            url: "/uploads/verification-validation.pdf",
            description: "Verification, validation, and qualification processes"
          }
        ]
      },
      {
        id: "m3-c3",
        title: "Software Testing",
        content:
          "Software testing strategies, definition and objectives, software testing strategies, software test classifications, white box testing, black box testing, and CASE tools and their effect on software quality.",
        order: 3,
        materials: [
          {
            id: "m3-c3-m1",
            title: "Testing Strategies",
            type: "PDF",
            url: "/uploads/testing-strategies.pdf",
            description: "Software testing strategies and classifications"
          },
          {
            id: "m3-c3-m2",
            title: "White Box and Black Box Testing",
            type: "PDF",
            url: "/uploads/white-black-box-testing.pdf",
            description: "White box and black box testing techniques"
          },
          {
            id: "m3-c3-m3",
            title: "CASE Tools",
            type: "PDF",
            url: "/uploads/case-tools.pdf",
            description: "CASE tools and their effect on software quality"
          }
        ],
        quiz: {
          id: "m3-q1",
          title: "Software Testing Quiz",
          description: "Assess your knowledge of software testing strategies",
          passingScore: 70,
          questions: [
            {
              id: "m3-q1-1",
              text: "What is the main difference between white box and black box testing?",
              options: [
                "White box tests internal structure, black box tests functionality",
                "White box is faster than black box",
                "Black box requires source code",
                "There is no difference"
              ],
              answer: 0,
              marks: 1,
              explanation: "White box testing examines internal code structure, while black box testing focuses on functionality without knowledge of internal structure."
            },
            {
              id: "m3-q1-2",
              text: "Which testing approach requires knowledge of the internal code structure?",
              options: [
                "White box testing",
                "Black box testing",
                "Integration testing",
                "Acceptance testing"
              ],
              answer: 0,
              marks: 1,
              explanation: "White box testing requires knowledge of the internal code structure to design test cases."
            }
          ]
        }
      }
    ]
  },

  {
    id: "m4",
    slug: "management-components",
    title: "Management Components of Software",
    description: "Project progress control, software quality metrics, and their implementation",
    order: 4,
    chapters: [
      {
        id: "m4-c1",
        title: "Project Progress Control",
        content:
          "The components of project progress control, progress control of internal projects and external participants, implementation of project progress control regimes, and computerized tools for software progress control quality.",
        order: 1,
        materials: [
          {
            id: "m4-c1-m1",
            title: "Progress Control Components",
            type: "PDF",
            url: "/uploads/progress-control.pdf",
            description: "Components of project progress control"
          },
          {
            id: "m4-c1-m2",
            title: "Computerized Tools for Progress Control",
            type: "PDF",
            url: "/uploads/progress-control-tools.pdf",
            description: "Computerized tools for software progress control"
          }
        ],
        quiz: {
          id: "m4-q1",
          title: "Project Progress Control Quiz",
          description: "Test your understanding of project progress control",
          passingScore: 70,
          questions: [
            {
              id: "m4-q1-1",
              text: "What is the main purpose of project progress control?",
              options: [
                "To monitor and manage project progress",
                "To increase project delays",
                "To avoid documentation",
                "To reduce team communication"
              ],
              answer: 0,
              marks: 1,
              explanation: "Project progress control monitors and manages project progress to ensure timely delivery and quality."
            }
          ]
        }
      },
      {
        id: "m4-c2",
        title: "Software Quality Metrics",
        content:
          "Objectives of quality measurement, classification of software quality metrics (process metrics, product metrics), implementation of software quality metrics, and limitations of software metrics.",
        order: 2,
        materials: [
          {
            id: "m4-c2-m1",
            title: "Quality Metrics Overview",
            type: "PDF",
            url: "/uploads/quality-metrics.pdf",
            description: "Objectives and classification of software quality metrics"
          },
          {
            id: "m4-c2-m2",
            title: "Process and Product Metrics",
            type: "PDF",
            url: "/uploads/process-product-metrics.pdf",
            description: "Process metrics and product metrics"
          },
          {
            id: "m4-c2-m3",
            title: "Metrics Implementation",
            type: "PDF",
            url: "/uploads/metrics-implementation.pdf",
            description: "Implementation of software quality metrics"
          }
        ],
        quiz: {
          id: "m4-q2",
          title: "Software Quality Metrics Quiz",
          description: "Assess your knowledge of software quality metrics",
          passingScore: 70,
          questions: [
            {
              id: "m4-q2-1",
              text: "Which type of metric measures development process characteristics?",
              options: [
                "Process metrics",
                "Product metrics",
                "Cost metrics",
                "Time metrics"
              ],
              answer: 0,
              marks: 1,
              explanation: "Process metrics measure characteristics of the software development process."
            },
            {
              id: "m4-q2-2",
              text: "Product metrics measure:",
              options: [
                "Characteristics of the software product",
                "Development time",
                "Team size",
                "Budget allocation"
              ],
              answer: 0,
              marks: 1,
              explanation: "Product metrics measure characteristics of the software product itself."
            }
          ]
        }
      }
    ]
  },

  {
    id: "m5",
    slug: "standards-certification-assessment",
    title: "Standards, Certification and Assessment",
    description: "Quality management standards, ISO certifications, CMM/CMMI, and IEEE software engineering standards",
    order: 5,
    chapters: [
      {
        id: "m5-c1",
        title: "Quality Management Standards",
        content:
          "Quality management standards, scope of quality management standards, ISO 9001 and ISO 9000-3, and certification according to ISO 9000-3.",
        order: 1,
        materials: [
          {
            id: "m5-c1-m1",
            title: "ISO 9001 Overview",
            type: "PDF",
            url: "/uploads/iso-9001.pdf",
            description: "ISO 9001 quality management standards"
          },
          {
            id: "m5-c1-m2",
            title: "ISO 9000-3 Certification",
            type: "PDF",
            url: "/uploads/iso-9000-3.pdf",
            description: "ISO 9000-3 certification for software"
          }
        ],
        quiz: {
          id: "m5-q1",
          title: "Quality Standards Quiz",
          description: "Test your understanding of quality management standards",
          passingScore: 70,
          questions: [
            {
              id: "m5-q1-1",
              text: "What does ISO 9001 primarily focus on?",
              options: [
                "Quality management systems",
                "Software testing",
                "Code review",
                "Project scheduling"
              ],
              answer: 0,
              marks: 1,
              explanation: "ISO 9001 focuses on quality management systems and processes."
            }
          ]
        }
      },
      {
        id: "m5-c2",
        title: "Capability Maturity Models",
        content:
          "Capability Maturity Models (CMM and CMMI), assessment methodology, The Bootstrap methodology, The SPICE project and the ISO/IEC 15504, and software process assessment standard.",
        order: 2,
        materials: [
          {
            id: "m5-c2-m1",
            title: "CMM and CMMI",
            type: "PDF",
            url: "/uploads/cmm-cmmi.pdf",
            description: "Capability Maturity Models"
          },
          {
            id: "m5-c2-m2",
            title: "SPICE and ISO/IEC 15504",
            type: "PDF",
            url: "/uploads/spice-iso15504.pdf",
            description: "SPICE project and ISO/IEC 15504"
          }
        ],
        quiz: {
          id: "m5-q2",
          title: "CMM/CMMI Quiz",
          description: "Assess your knowledge of Capability Maturity Models",
          passingScore: 70,
          questions: [
            {
              id: "m5-q2-1",
              text: "What does CMMI stand for?",
              options: [
                "Capability Maturity Model Integration",
                "Code Management Model Integration",
                "Customer Management Model Integration",
                "Cost Management Model Integration"
              ],
              answer: 0,
              marks: 1,
              explanation: "CMMI stands for Capability Maturity Model Integration."
            }
          ]
        }
      },
      {
        id: "m5-c3",
        title: "SQA Project Process Standards",
        content:
          "IEEE software engineering standards, structure and content of IEEE software engineering standards, IEEE/EIA Std 12207 – software life cycle processes, IEEE Std 1012 – verification and validation, and IEEE Std 1028 – reviews.",
        order: 3,
        materials: [
          {
            id: "m5-c3-m1",
            title: "IEEE Standards Overview",
            type: "PDF",
            url: "/uploads/ieee-standards.pdf",
            description: "IEEE software engineering standards"
          },
          {
            id: "m5-c3-m2",
            title: "IEEE Std 12207",
            type: "PDF",
            url: "/uploads/ieee-12207.pdf",
            description: "IEEE/EIA Std 12207 – software life cycle processes"
          },
          {
            id: "m5-c3-m3",
            title: "IEEE Std 1012 and 1028",
            type: "PDF",
            url: "/uploads/ieee-1012-1028.pdf",
            description: "IEEE Std 1012 – verification and validation, IEEE Std 1028 – reviews"
          }
        ],
        quiz: {
          id: "m5-q3",
          title: "IEEE Standards Quiz",
          description: "Test your understanding of IEEE software engineering standards",
          passingScore: 70,
          questions: [
            {
              id: "m5-q3-1",
              text: "IEEE Std 1012 focuses on:",
              options: [
                "Verification and validation",
                "Code formatting",
                "Project management",
                "User interface design"
              ],
              answer: 0,
              marks: 1,
              explanation: "IEEE Std 1012 focuses on verification and validation processes."
            }
          ]
        }
      }
    ]
  }
];

/**
 * Calculate totals for each module
 */
modules.forEach(module => {
  module.totalMaterials = module.chapters.reduce(
    (sum, chapter) => sum + (chapter.materials?.length || 0),
    0
  );
  module.totalQuizzes = module.chapters.filter(chapter => chapter.quiz).length;
});

/**
 * Find a module by its slug
 */
export function findModuleBySlug(slug: string): ModuleData | null {
  return modules.find((m) => m.slug === slug) || null;
}

/**
 * Find a chapter by its ID across all modules
 */
export function findChapterById(id: string): { module: ModuleData; chapter: Chapter } | null {
  for (const module of modules) {
    const chapter = module.chapters.find((c) => c.id === id);
    if (chapter) {
      return { module, chapter };
    }
  }
  return null;
}

/**
 * Get all quizzes across all modules
 */
export function getAllQuizzes(): Array<{ module: ModuleData; chapter: Chapter; quiz: Quiz }> {
  const quizzes: Array<{ module: ModuleData; chapter: Chapter; quiz: Quiz }> = [];
  
  modules.forEach(module => {
    module.chapters.forEach(chapter => {
      if (chapter.quiz) {
        quizzes.push({ module, chapter, quiz: chapter.quiz });
      }
    });
  });
  
  return quizzes;
}

/**
 * Get statistics about the modules
 */
export function getModuleStats() {
  return {
    totalModules: modules.length,
    totalChapters: modules.reduce((sum, m) => sum + m.chapters.length, 0),
    totalMaterials: modules.reduce((sum, m) => sum + (m.totalMaterials || 0), 0),
    totalQuizzes: modules.reduce((sum, m) => sum + (m.totalQuizzes || 0), 0),
    totalQuestions: modules.reduce(
      (sum, m) => sum + m.chapters.reduce(
        (chSum, ch) => chSum + (ch.quiz?.questions.length || 0),
        0
      ),
      0
    )
  };
}
