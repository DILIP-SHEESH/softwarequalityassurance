// app/quizzes/page.tsx
"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, Trophy, RotateCcw } from "lucide-react";

const quizData = {
  id: "full-book-quiz",
  title: "Software Quality Assurance Final Exam",
  passingScore: 70,
  questions: [
    // Chapter 1
    { id: "q1", text: "According to the book (Chapter 1), what are the three fundamental differences between software products and other industrial products?", options: ["Low complexity, high visibility, easy manufacturing", "High complexity, invisibility of the product, and opportunities to detect defects limited mainly to the development phase", "Software is cheaper and requires no maintenance", "Software has no bugs and is always visible"], answer: 1, explanation: "Chapter 1 stresses high complexity, invisibility, and defect detection limited to the development phase." },
    { id: "q2", text: "Which of the following is NOT one of the seven main characteristics of the professional software development and maintenance environment (Chapter 1)?", options: ["Contractual conditions and customer-supplier relationship", "Requirement for teamwork and cooperation with other teams", "Need for interfaces with other software systems", "No need to continue maintenance after delivery"], answer: 3, explanation: "The book lists seven characteristics, including the need to maintain software for 5–10 years or more." },

    // Chapter 2
    { id: "q3", text: "According to the IEEE definition quoted in Chapter 2, software includes:", options: ["Only computer programs (the code)", "Computer programs, procedures, documentation, and data necessary for operating the software system", "Hardware components and user manuals only", "Just the source code and test data"], answer: 1, explanation: "The IEEE (and ISO) definition includes four components: code, procedures, documentation, and data." },
    { id: "q4", text: "A software error becomes a software failure only when (Chapter 2):", options: ["The programmer writes the code", "It is 'activated' by the user trying to apply the specific faulty application", "The documentation is printed", "The software is compiled successfully"], answer: 1, explanation: "Not every fault turns into a failure – only when specific conditions are met during use." },
    { id: "q5", text: "Which is listed in Chapter 2 as a common cause of software errors?", options: ["Perfect client-developer communication", "Faulty definition of requirements by the client", "No deliberate deviations from requirements", "Always correct logical design"], answer: 1, explanation: "Faulty requirements, communication failures, deliberate deviations, and logical design errors are the main causes." },

    // Chapter 3
    { id: "q6", text: "McCall’s classic factor model (Chapter 3) classifies software quality factors into how many main categories?", options: ["Two categories", "Three categories: product operation, product revision, and product transition", "Four categories", "Five categories"], answer: 1, explanation: "McCall’s model groups 11 factors into three categories." },
    { id: "q7", text: "Which factor category in McCall’s model includes correctness, reliability, and efficiency (Chapter 3)?", options: ["Product revision", "Product transition", "Product operation", "Product maintenance"], answer: 2, explanation: "Product operation category includes correctness, reliability, efficiency, integrity, and usability." },

    // Chapter 4
    { id: "q8", text: "Pre-project SQA components include (Chapter 4):", options: ["Only testing and reviews", "Contract review and development & quality plans", "Configuration management only", "Staff training only"], answer: 1, explanation: "Chapter 4 lists contract review and development/quality plans as pre-project components." },
    { id: "q9", text: "Which class of SQA components includes procedures, templates, checklists, and staff training (Chapter 4)?", options: ["Management SQA components", "Infrastructure SQA components", "Project life cycle components", "Pre-project components"], answer: 1, explanation: "Infrastructure components support the entire organisation." },

    // Chapter 5
    { id: "q10", text: "The contract review process consists of two main stages (Chapter 5):", options: ["Proposal draft review and contract draft review", "Design review and code review", "Testing and maintenance review", "Only final contract approval"], answer: 0, explanation: "Chapter 5 clearly defines two stages: proposal draft review and contract draft review." },
    { id: "q11", text: "One of the main objectives of the proposal draft review (Chapter 5) is:", options: ["To check only the budget", "To ensure the project is based on a clear, complete, and feasible customer requirement specification", "To write the code", "To perform final testing"], answer: 1, explanation: "The review ensures clarity, completeness, and feasibility of requirements." },
    { id: "q12", text: "Contract review is also recommended for (Chapter 5):", options: ["Only external customers", "Internal projects", "Only very large projects", "Only maintenance projects"], answer: 1, explanation: "The book recommends applying contract review to internal projects as well." },

    // Chapter 6
    { id: "q13", text: "Development and quality plans are prepared after (Chapter 6):", options: ["Contract signing", "Proposal draft review but before contract signing", "Only after testing", "During maintenance"], answer: 0, explanation: "Plans are prepared after the contract is signed." },

    // Chapters 7–11
    { id: "q14", text: "Formal design reviews (DRs) and peer reviews are examples of (Chapter 8):", options: ["Testing methods", "Review methods", "Configuration management", "Cost of quality"], answer: 1, explanation: "Chapter 8 is dedicated to review methods." },
    { id: "q15", text: "The main goal of software testing strategies (Chapter 9) is:", options: ["To prove the software has no errors", "To detect as many faults as possible before delivery", "To replace reviews", "To reduce documentation"], answer: 1, explanation: "Testing aims to detect faults." },
    { id: "q16", text: "Automated testing has the advantage of (Chapter 10):", options: ["Higher accuracy and completeness of performance", "Lower cost in all cases", "No need for test cases", "Only suitable for small projects"], answer: 0, explanation: "Chapter 10 lists accuracy and completeness as key advantages." },
    { id: "q17", text: "Software maintenance quality assurance includes (Chapter 11):", options: ["Only corrective maintenance", "Pre-maintenance contract review and maintenance plan", "No SQA activities", "Only configuration management"], answer: 1, explanation: "Chapter 11 covers pre-maintenance components." },

    // Chapters 12–13
    { id: "q18", text: "Assuring quality of external participants’ contributions includes (Chapter 12):", options: ["Only ignoring them", "Contract review, progress reports, and acceptance tests", "Only internal reviews", "No special tools"], answer: 1, explanation: "Chapter 12 lists specific SQA tools for subcontractors and COTS." },
    { id: "q19", text: "CASE tools contribute to software quality by (Chapter 13):", options: ["Only speeding up coding", "Improving product quality, maintenance quality, and project management", "Replacing all human reviews", "Increasing errors"], answer: 1, explanation: "Chapter 13 details contributions to development, maintenance, and management." },

    // Chapters 14–19 (Infrastructure)
    { id: "q20", text: "Procedures and work instructions (Chapter 14) are part of:", options: ["Management components", "Infrastructure SQA components", "Testing only", "Standards only"], answer: 1, explanation: "They belong to infrastructure components." },
    { id: "q21", text: "Templates and checklists (Chapter 15) mainly help to:", options: ["Increase paperwork", "Ensure completeness and uniformity of documents", "Replace training", "Only for managers"], answer: 1, explanation: "They improve document quality." },
    { id: "q22", text: "Staff training and certification (Chapter 16) aim to:", options: ["Only reduce costs", "Develop professional knowledge and skills required for SQA", "Replace procedures", "Only for new employees"], answer: 1, explanation: "Chapter 16 links training directly to SQA objectives." },
    { id: "q23", text: "Corrective and preventive actions (Chapter 17) are triggered by:", options: ["Only customer complaints", "Analysis of defects, failures, and process data", "Only audits", "No follow-up needed"], answer: 1, explanation: "Chapter 17 describes the full CAPA process." },
    { id: "q24", text: "Software configuration management (Chapter 18) includes:", options: ["Only version control", "Change control, version release, and configuration audits", "Only documentation", "Only testing"], answer: 1, explanation: "SCM covers identification, change control, and audits." },

    // Chapters 20–22 (Management)
    { id: "q25", text: "Project progress control (Chapter 20) uses:", options: ["Only budget reports", "Progress reports, internal/external participant control, and computerized tools", "Only testing", "No metrics"], answer: 1, explanation: "Chapter 20 describes progress control components." },
    { id: "q26", text: "Software quality metrics (Chapter 21) are used to:", options: ["Only measure cost", "Assess product quality, process effectiveness, and maintenance quality", "Replace reviews", "Only for large projects"], answer: 1, explanation: "Chapter 21 covers product, process, and maintenance metrics." },
    { id: "q27", text: "The classic model of cost of software quality (Chapter 22) classifies costs into:", options: ["Only prevention and appraisal", "Prevention, appraisal, and failure costs", "Only external failure", "Only internal costs"], answer: 1, explanation: "Classic model: prevention + appraisal + internal/external failure." },

    // Chapters 23–24 (Standards)
    { id: "q28", text: "ISO 9000-3 and CMMI are examples of (Chapter 23):", options: ["Project process standards", "Quality management standards", "Testing standards only", "No relation to SQA"], answer: 1, explanation: "Chapter 23 covers quality management standards." },
    { id: "q29", text: "IEEE/EIA Std 12207 is (Chapter 24):", options: ["A quality management standard", "A software life-cycle process standard", "Only for testing", "Only for costs"], answer: 1, explanation: "Chapter 24 focuses on IEEE project process standards." },

    // Chapters 25–26 (Organizing SQA)
    { id: "q30", text: "Top management’s role in SQA (Chapter 25) includes:", options: ["Only writing code", "Setting quality policy, resource allocation, and management reviews", "Only testing", "No involvement"], answer: 1, explanation: "Chapter 25 details top, department, and project management responsibilities." },
    { id: "q31", text: "The SQA unit’s tasks (Chapter 26) include:", options: ["Only auditing", "Developing SQA procedures, training, audits, and improvement proposals", "Only configuration", "Only metrics"], answer: 1, explanation: "Chapter 26 describes the SQA unit plus trustees, committees, and forums." },
    { id: "q32", text: "SQA trustees and SQA forums (Chapter 26) are part of:", options: ["Infrastructure components", "The human/organisational components of the SQA system", "Testing only", "Standards only"], answer: 1, explanation: "They support implementation of SQA components." },

    // Epilogue + Overall
    { id: "q33", text: "The future of SQA (Epilogue) will face challenges related to:", options: ["Only smaller projects", "Increasing complexity, new technologies, and higher customer expectations", "No changes", "Only costs"], answer: 1, explanation: "The Epilogue discusses SQA challenges and capabilities." },
    { id: "q34", text: "According to the book’s overall conception, acceptable software quality is achieved by:", options: ["Only testing", "Combined application of a great variety of SQA components with emphasis on early phases", "Only standards", "Only management reviews"], answer: 1, explanation: "This is the guiding conception repeated throughout the book." },
    { id: "q35", text: "The book covers SQA for which environments?", options: ["Only large custom-made software", "Custom-made, COTS packages, small projects, in-house, and maintenance", "Only academic projects", "Only open-source"], answer: 1, explanation: "Chapter 1 and the preface extend coverage to in-house, COTS, and small organisations." }
  ]
};

export default function QuizzesPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const totalQuestions = quizData.questions.length;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    quizData.questions.forEach((q, i) => {
      if (selectedAnswers[i] === q.answer) correctCount++;
    });
    const score = Math.round((correctCount / totalQuestions) * 100);
    setShowResults(true);

    setTimeout(() => {
      alert(`🎯 Your Final Score: ${score}% (${correctCount}/${totalQuestions} correct)`);
    }, 300);
  };

  if (showResults) {
    const correctCount = quizData.questions.filter((q, i) => selectedAnswers[i] === q.answer).length;
    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = score >= (quizData.passingScore || 70);

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-xl text-center">
            <div className={`inline-flex w-24 h-24 rounded-full items-center justify-center mb-6 ${passed ? "bg-green-100" : "bg-red-100"}`}>
              {passed ? <Trophy className="w-14 h-14 text-green-600" /> : <XCircle className="w-14 h-14 text-red-600" />}
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-2">{score}%</h2>
            <p className="text-xl text-gray-600">{correctCount} out of {totalQuestions} correct</p>

            <button
              onClick={() => window.location.reload()}
              className="mt-10 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 rounded-xl text-lg flex items-center justify-center gap-3"
            >
              <RotateCcw className="w-5 h-5" />
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Software Quality Assurance Final Exam
          </h1>
          <p className="text-xl text-gray-600">
            35 Questions • Full Book Coverage (Chapters 1–26 + Epilogue)
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
          <div className="flex justify-between mb-8">
            <h2 className="text-2xl font-bold">{quizData.title}</h2>
            <p className="text-gray-500">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
          </div>

          <h3 className="text-xl font-medium mb-8">{currentQuestion.text}</h3>

          <div className="space-y-4 mb-10">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-6 rounded-2xl border-2 text-lg transition-all ${
                    isSelected ? "border-indigo-600 bg-indigo-50" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex-1 py-4 border border-gray-300 rounded-2xl font-medium disabled:opacity-50"
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-medium hover:bg-indigo-700"
            >
              {currentQuestionIndex === totalQuestions - 1 ? "Submit Quiz" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}