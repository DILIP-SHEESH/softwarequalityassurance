"use client";

import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { modules as allModules } from "@/app/content/_data/modules";
import { BookOpen, PlayCircle, Users, FileText } from "lucide-react";

// Just drop your random PDF filenames in here. 
// Ensure your 'uploads' folder is inside the 'public' directory (public/uploads/)
const randomPdfs = [
  "BIS714B SQA - All important topics (1).pdf",
  "BIS714B-module-1-textbook.pdf",
  "BIS714B-module-2-textbook.pdf",
  "BIS714B-module-3-textbook.pdf",
  "BIS714B-module-4-textbook.pdf",
  "BIS7148-module-5-textbook.pdf",
  "Question Bank.docx (1).pdf",
  "Software Quality Assurance From Theory to Implementation (1).pdf",
  "SQA_QuestionBank.pdf"
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Welcome to StudyHub
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-indigo-100 mb-8 sm:mb-10">
                Your comprehensive learning platform for Software Quality Assurance
              </p>

              {/* FIXED BUTTONS CONTAINER */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link
                  href="/student-materials"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-indigo-800 text-white font-semibold rounded-lg hover:bg-indigo-900 transition-colors"
                >
                  <BookOpen className="mr-2 w-5 h-5" />
                  All Materials
                </Link>
                <Link
                  href="/quizzes"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-indigo-800 text-white font-semibold rounded-lg hover:bg-indigo-900 transition-colors"
                >
                  <PlayCircle className="mr-2 w-5 h-5" />
                  Start Quiz
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* All Modules Section - Static */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">All Modules</h2>
              <p className="text-gray-600">Explore our comprehensive course modules</p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allModules.map((module) => (
                  <div
                    key={module.id}
                    className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-200 cursor-default"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 bg-indigo-100 p-2.5 rounded-lg group-hover:bg-indigo-200 transition-colors">
                        <BookOpen className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {module.title}
                          </h3>
                          <span className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                            #{module.order}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {module.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>{module.chapters.length} chapters</span>
                          {module.totalMaterials && (
                            <>
                              <span>•</span>
                              <span>{module.totalMaterials} materials</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Random Uploaded PDFs Section */}
        {randomPdfs.length > 0 && (
          <section className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Additional Resources</h2>
                <p className="text-gray-600">Explore randomly uploaded PDFs and reference materials</p>
              </div>
              <div className="max-w-5xl mx-auto">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {randomPdfs.map((pdf, index) => (
                    <a
                      key={index}
                      href={`/uploads/${pdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-sm transition-all group"
                    >
                      <FileText className="w-6 h-6 text-red-500 group-hover:text-red-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 truncate" title={pdf}>
                        {pdf}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Section with Student Materials */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">What You Can Do</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-7 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Study Materials</h3>
                <p className="text-sm text-gray-600">Access PDFs, notes, and resources organized by modules.</p>
              </div>
              <div className="bg-gray-50 p-7 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <PlayCircle className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Take Quizzes</h3>
                <p className="text-sm text-gray-600">Test your knowledge with interactive quizzes.</p>
              </div>
              <div className="bg-gray-50 p-7 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Student Materials</h3>
                <p className="text-sm text-gray-600">View all submitted Google Drive materials from students.</p>
                <Link href="/student-materials" className="mt-4 block text-indigo-600 font-medium hover:underline">
                  View All Student Submissions →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}