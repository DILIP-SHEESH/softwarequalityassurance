"use client";

import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { modules as allModules, getModuleStats } from "@/app/content/_data/modules";
import { BookOpen, FileText, HelpCircle, ChevronRight, PlayCircle } from "lucide-react";

export default function HomePage() {
  const stats = getModuleStats();

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
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link
                  href="/modules"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg"
                >
                  Explore Modules
                  <ChevronRight className="ml-2 w-5 h-5" />
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

        {/* Stats Section */}
        <section className="py-10 sm:py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
                    {stats.totalModules}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Modules</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
                    {stats.totalChapters}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Chapters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
                    {stats.totalMaterials}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Materials</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
                    {stats.totalQuizzes}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Quizzes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                What You Can Do
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access comprehensive learning resources designed for your success
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 sm:p-7 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Study Materials
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Access PDFs, notes, videos, and other learning resources organized by modules and chapters.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-7 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <HelpCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Take Quizzes
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Test your knowledge with interactive quizzes covering all topics with instant feedback.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-7 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Questionnaires
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Complete self-assessment questionnaires to track your learning progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Preview */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                All Modules
              </h2>
              <p className="text-gray-600">
                Explore our comprehensive course modules
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {allModules.map((module) => (
                  <Link
                    key={module.id}
                    href={`/modules/${module.slug}`}
                    className="group bg-white border border-gray-200 rounded-lg p-5 hover:border-indigo-300 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 bg-indigo-100 p-2.5 rounded-lg group-hover:bg-indigo-200 transition-colors">
                        <BookOpen className="w-5 h-5 text-indigo-600" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                            {module.title}
                          </h3>
                          <span className="flex-shrink-0 bg-indigo-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                            #{module.order}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {module.description}
                        </p>

                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="font-medium">{module.chapters.length} chapters</span>
                          {module.totalMaterials && module.totalMaterials > 0 && (
                            <>
                              <span>•</span>
                              <span>{module.totalMaterials} materials</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/modules"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
              >
                View All Modules
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}