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
  timeLimit?: number;
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
        content: "Understanding the uniqueness of software quality assurance, environments for which SQA methods are developed, and fundamental definitions of software quality and software itself.",
        order: 1,
        materials: [
          { id: "m1-c1-m1", title: "Software Quality Fundamentals", type: "PDF", url: "/uploads/software-quality-fundamentals.pdf", description: "Introduction to software quality concepts and definitions" },
          { id: "m1-c1-m2", title: "SQA Environments", type: "PDF", url: "/uploads/sqa-environments.pdf", description: "Environments for which SQA methods are developed" }
        ]
      },
      {
        id: "m1-c2",
        title: "Software Errors, Faults, and Failures",
        content: "Understanding software errors, faults, and failures, along with classification of their causes and how they relate to software quality.",
        order: 2,
        materials: [
          { id: "m1-c2-m1", title: "Error Classification", type: "PDF", url: "/uploads/error-classification.pdf", description: "Classification of software errors, faults, and failures" }
        ]
      },
      {
        id: "m1-c3",
        title: "Software Quality Definition and Objectives",
        content: "Comprehensive coverage of software quality definition, SQA definition and objectives, and SQA in relation to software engineering.",
        order: 3,
        materials: [
          { id: "m1-c3-m1", title: "SQA Objectives", type: "PDF", url: "/uploads/sqa-objectives.pdf", description: "Software Quality Assurance objectives and definitions" }
        ]
      },
      {
        id: "m1-c4",
        title: "Software Quality Factors",
        content: "The need for comprehensive software quality requirements, classifications of software requirements into software quality factors including product operation, product revision, and product transition factors.",
        order: 4,
        materials: [
          { id: "m1-c4-m1", title: "Quality Factors Classification", type: "PDF", url: "/uploads/quality-factors.pdf", description: "Classification of software quality factors" },
          { id: "m1-c4-m2", title: "Product Operation Factors", type: "PDF", url: "/uploads/product-operation-factors.pdf", description: "Product operation software quality factors" },
          { id: "m1-c4-m3", title: "Product Revision and Transition Factors", type: "PDF", url: "/uploads/product-revision-transition.pdf", description: "Product revision and transition software quality factors" }
        ]
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
        content: "Understanding the SQA system as an architecture, including pre-project components, software project life cycle components, and infrastructure components for error prevention and improvement.",
        order: 1,
        materials: [
          { id: "m2-c1-m1", title: "SQA Architecture Overview", type: "PDF", url: "/uploads/sqa-architecture.pdf", description: "Overview of SQA system architecture" }
        ]
      },
      {
        id: "m2-c2",
        title: "Management and Infrastructure Components",
        content: "Management SQA components, standards, system certification, and assessment components.",
        order: 2,
        materials: [
          { id: "m2-c2-m1", title: "Management Components", type: "PDF", url: "/uploads/management-components.pdf", description: "Management SQA components" },
          { id: "m2-c2-m2", title: "Infrastructure Components", type: "PDF", url: "/uploads/infrastructure-components.pdf", description: "Infrastructure components for error prevention" }
        ]
      },
      {
        id: "m2-c3",
        title: "Contract Review",
        content: "Introduction to contract review, the contract review process and its stages...",
        order: 3,
        materials: [
          { id: "m2-c3-m1", title: "Contract Review Process", type: "PDF", url: "/uploads/contract-review.pdf", description: "Contract review process and implementation" }
        ]
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
        content: "Understanding classic and other software development methodologies...",
        order: 1,
        materials: [
          { id: "m3-c1-m1", title: "Development Methodologies", type: "PDF", url: "/uploads/development-methodologies.pdf", description: "Classic and modern software development methodologies" }
        ]
      },
      {
        id: "m3-c2",
        title: "Verification, Validation, and Qualification",
        content: "Understanding verification, validation, and qualification processes...",
        order: 2,
        materials: [
          { id: "m3-c2-m1", title: "V&V Processes", type: "PDF", url: "/uploads/verification-validation.pdf", description: "Verification, validation, and qualification processes" }
        ]
      },
      {
        id: "m3-c3",
        title: "Software Testing",
        content: "Software testing strategies, definition and objectives...",
        order: 3,
        materials: [
          { id: "m3-c3-m1", title: "Testing Strategies", type: "PDF", url: "/uploads/testing-strategies.pdf", description: "Software testing strategies and classifications" },
          { id: "m3-c3-m2", title: "White Box and Black Box Testing", type: "PDF", url: "/uploads/white-black-box-testing.pdf", description: "White box and black box testing techniques" },
          { id: "m3-c3-m3", title: "CASE Tools", type: "PDF", url: "/uploads/case-tools.pdf", description: "CASE tools and their effect on software quality" },
          // Student Submission
          { id: "m3-student-1", title: "SQA Components in Project Lifecycle", type: "LINK", url: "https://docs.google.com/document/d/1zJeGuvJJKk64iADZ6vR6L5XJVQplmQue/edit?usp=sharing", description: "Submitted by Eshwari S & team" }
        ]
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
        content: "The components of project progress control, progress control of internal projects and external participants...",
        order: 1,
        materials: [
          { id: "m4-c1-m1", title: "Progress Control Components", type: "PDF", url: "/uploads/progress-control.pdf", description: "Components of project progress control" },
          { id: "m4-c1-m2", title: "Computerized Tools for Progress Control", type: "PDF", url: "/uploads/progress-control-tools.pdf", description: "Computerized tools for software progress control" },
          // Student Submissions - Project Progress Control
          { id: "m4-student-progress-1", title: "Chapter 20.3 - Implementation of Project Progress Control Regimes", type: "LINK", url: "https://drive.google.com/drive/folders/1ArJjWw_oK3OpYV3KhZFN6xuobFGfiZD9?usp=sharing", description: "Submitted by Syed Abdul Rauf & team" },
          { id: "m4-student-progress-2", title: "Project Progress Control Full Materials (Ch 24.1-24.4, Ch 9.1-9.5, Ch 20.2)", type: "LINK", url: "https://drive.google.com/drive/folders/1ABJTaUy2mcBHWBzh2rgETIliQlpOoSr1?usp=sharing", description: "Submitted by Prajwal Reddy R & team" }
        ]
      },
      {
        id: "m4-c2",
        title: "Software Quality Metrics",
        content: "Objectives of quality measurement, classification of software quality metrics...",
        order: 2,
        materials: [
          { id: "m4-c2-m1", title: "Quality Metrics Overview", type: "PDF", url: "/uploads/quality-metrics.pdf", description: "Objectives and classification of software quality metrics" },
          { id: "m4-c2-m2", title: "Process and Product Metrics", type: "PDF", url: "/uploads/process-product-metrics.pdf", description: "Process metrics and product metrics" },
          { id: "m4-c2-m3", title: "Metrics Implementation", type: "PDF", url: "/uploads/metrics-implementation.pdf", description: "Implementation of software quality metrics" },
          // Student Submissions - Software Quality Metrics
          { id: "m4-student-metrics-1", title: "Software Quality Metrics - Entire Chapter", type: "LINK", url: "https://drive.google.com/drive/u/0/folders/1wl8JHo-deojCFWzFUynDOYaE3uvY4b9W", description: "Submitted by Palleboyina Deekshitha & team" },
          { id: "m4-student-metrics-2", title: "Software Quality Metrics Study Materials", type: "LINK", url: "https://drive.google.com/file/d/1ZQQpHE5TgfK6baJiFAKbN28uAHK2I4bj/view?usp=sharing", description: "Submitted by Deepak Gowda M L" },
          { id: "m4-student-metrics-3", title: "Software Quality Metrics", type: "LINK", url: "https://drive.google.com/file/d/1AG4bZqwO8m1izodnhPiZpARCjZVz_C77/view?usp=sharing", description: "Submitted by Cholaraju Bhuvan" },
          { id: "m4-student-metrics-4", title: "Module 4 - Software Quality Metrics", type: "LINK", url: "https://docs.google.com/document/d/1FprAHP6pEzyeZDDgYalSpWeAy4MblQfMIpkYqhN0rmQ/edit?usp=drivesdk", description: "Submitted by Shweta Rama Marathi & team" }
        ]
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
        content: "Quality management standards, scope of quality management standards, ISO 9001 and ISO 9000-3...",
        order: 1,
        materials: [
          { id: "m5-c1-m1", title: "ISO 9001 Overview", type: "PDF", url: "/uploads/iso-9001.pdf", description: "ISO 9001 quality management standards" },
          { id: "m5-c1-m2", title: "ISO 9000-3 Certification", type: "PDF", url: "/uploads/iso-9000-3.pdf", description: "ISO 9000-3 certification for software" },
          // Student Submission
          { id: "m5-student-iso", title: "Scope of Quality Management Standards", type: "LINK", url: "https://forms.gle/39sYUMqibGjPhUgM9", description: "Submitted by Amulya D & team" }
        ]
      },
      {
        id: "m5-c2",
        title: "Capability Maturity Models",
        content: "Capability Maturity Models (CMM and CMMI), assessment methodology, The Bootstrap methodology, The SPICE project...",
        order: 2,
        materials: [
          { id: "m5-c2-m1", title: "CMM and CMMI", type: "PDF", url: "/uploads/cmm-cmmi.pdf", description: "Capability Maturity Models" },
          { id: "m5-c2-m2", title: "SPICE and ISO/IEC 15504", type: "PDF", url: "/uploads/spice-iso15504.pdf", description: "SPICE project and ISO/IEC 15504" },
          // Student Submissions - SPICE & CMMI
          { id: "m5-student-spice-1", title: "SPICE Project", type: "LINK", url: "https://docs.google.com/document/d/1kBAlLm_8GjUXcNll8ds7KlnvmCP977gL/edit?usp=drivesdk", description: "Submitted by Student Group" },
          { id: "m5-student-spice-2", title: "Spice Project & Certification", type: "LINK", url: "https://docs.google.com/document/d/19vAosoVThaiJ1sAWXB6Sv0TY6N4C7_WX/edit?usp=drivesdk", description: "Submitted by Vaishnavi Pooja S & team" },
          { id: "m5-student-spice-3", title: "Spice, Certification, CMMI", type: "LINK", url: "https://docs.google.com/document/d/1wpGJ3mWkOBL-G7oCjBlR1Y_Uy0KqGIlG/edit?usp=drivesdk", description: "Submitted by Sangeetha K C & team" },
          { id: "m5-student-cmm", title: "Capability Maturity Model", type: "LINK", url: "https://docs.google.com/presentation/d/18K1OWHbUUalR42u56ZMZX9x25c0r-QNG/edit?usp=sharing", description: "Submitted by Dhananjaya D" }
        ]
      },
      {
        id: "m5-c3",
        title: "SQA Project Process Standards",
        content: "IEEE software engineering standards, structure and content of IEEE software engineering standards...",
        order: 3,
        materials: [
          { id: "m5-c3-m1", title: "IEEE Standards Overview", type: "PDF", url: "/uploads/ieee-standards.pdf", description: "IEEE software engineering standards" },
          { id: "m5-c3-m2", title: "IEEE Std 12207", type: "PDF", url: "/uploads/ieee-12207.pdf", description: "IEEE/EIA Std 12207 – software life cycle processes" },
          { id: "m5-c3-m3", title: "IEEE Std 1012 and 1028", type: "PDF", url: "/uploads/ieee-1012-1028.pdf", description: "IEEE Std 1012 – verification and validation, IEEE Std 1028 – reviews" },
          // Student Submissions - IEEE & Chapter 24
          { id: "m5-student-ieee-1", title: "Chapter 24.1 to 24.4 + Chapter 9.1 to 9.5", type: "LINK", url: "https://drive.google.com/drive/folders/1ABJTaUy2mcBHWBzh2rgETIliQlpOoSr1?usp=sharing", description: "Submitted by Prajwal Reddy R & team" },
          { id: "m5-student-ieee-2", title: "Structure and Content of IEEE Software Engineering Standards", type: "LINK", url: "https://forms.gle/2LXcBB3ocKMrBTx17", description: "Submitted by Manasa S" },
          { id: "m5-student-ieee-3", title: "24.1 - Structure and Content + 24.2", type: "LINK", url: "https://drive.google.com/drive/folders/1_aiKIONOIDKyFOfeG5A_Ne-6zCtdsbUp", description: "Submitted by Manoj Kumar VM & team" },
          { id: "m5-student-ieee-1012", title: "IEEE Std 1012 - Verification and Validation", type: "LINK", url: "https://docs.google.com/presentation/d/1tsmOm9jKUaEvqtfCw2d2z5jaPwpBjiSP/edit?usp=drivesdk", description: "Submitted by Dheeraj B S" }
        ]
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