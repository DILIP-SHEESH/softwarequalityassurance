"use client";

import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { getAllQuizzes } from "@/app/content/_data/modules";
import { PlayCircle, Clock, Award, BookOpen, ArrowRight, HelpCircle } from "lucide-react";

export default function QuizzesPage() {
  const allQuizzes = getAllQuizzes();

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      <main className="flex-1 py-8 sm:py-12 w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">All Quizzes</h1>
            <p className="text-sm text-gray-600 mt-2">
              Test your knowledge with interactive quizzes from all modules
            </p>
          </div>

          {/* Stats */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <HelpCircle className="w-12 h-12 text-indigo-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-900 mb-1">
                  {allQuizzes.length} {allQuizzes.length === 1 ? "Quiz" : "Quizzes"}
                </div>
                <div className="text-sm text-indigo-700">
                  {allQuizzes.reduce((sum, q) => sum + q.quiz.questions.length, 0)} total questions
                </div>
              </div>
            </div>
          </div>

          {/* Quizzes List */}
          <div className="space-y-4">
            {allQuizzes.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <PlayCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No quizzes available at the moment.</p>
              </div>
            ) : (
              allQuizzes.map(({ quiz, chapter, module }) => (
                <div
                  key={quiz.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-indigo-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                      <PlayCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {quiz.title}
                      </h3>
                      {quiz.description && (
                        <p className="text-sm text-gray-600 mb-4">{quiz.description}</p>
                      )}
                      
                      {/* Quiz Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <HelpCircle className="w-4 h-4" />
                          {quiz.questions.length} Questions
                        </span>
                        {quiz.passingScore && (
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            Pass: {quiz.passingScore}%
                          </span>
                        )}
                        {quiz.timeLimit && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {quiz.timeLimit} min
                          </span>
                        )}
                      </div>

                      {/* Module & Chapter Info */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {module.title}
                        </span>
                        <span>•</span>
                        <span>{chapter.title}</span>
                      </div>

                      {/* Action Button */}
                      <Link
                        href={`/quizzes/start?quizId=${quiz.id}&chapterId=${chapter.id}`}
                        className="inline-flex items-center px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
                      >
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Start Quiz
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
