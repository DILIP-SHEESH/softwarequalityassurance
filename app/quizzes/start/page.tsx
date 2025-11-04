"use client";

import { useSearchParams } from "next/navigation";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { QuizPlayer } from "@/app/quizzes/Quizplayer";
import { findChapterById, getAllQuizzes } from "@/app/content/_data/modules";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function QuizStartPage() {
  const searchParams = useSearchParams();
  const quizId = searchParams.get("quizId");
  const chapterId = searchParams.get("chapterId");
  const [hasStarted, setHasStarted] = useState(false);

  // Find quiz by ID
  let quiz = null;
  let chapterTitle = "";
  let moduleTitle = "";

  if (chapterId) {
    const chapterResult = findChapterById(chapterId);
    if (chapterResult && chapterResult.chapter.quiz) {
      quiz = chapterResult.chapter.quiz;
      chapterTitle = chapterResult.chapter.title;
      moduleTitle = chapterResult.module.title;
    }
  } else if (quizId) {
    const allQuizzes = getAllQuizzes();
    const quizData = allQuizzes.find((q) => q.quiz.id === quizId);
    if (quizData) {
      quiz = quizData.quiz;
      chapterTitle = quizData.chapter.title;
      moduleTitle = quizData.module.title;
    }
  }

  if (!quiz) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1 py-12 w-full">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Quiz Not Found</h2>
              <p className="text-gray-600 mb-4">
                The quiz you're looking for doesn't exist or has been removed.
              </p>
              <Link
                href="/modules"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Modules
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleQuizComplete = (score: number, totalQuestions: number, answers: number[]) => {
    // You can add logic here to save results, show analytics, etc.
    console.log("Quiz completed:", { score, totalQuestions, answers });
  };

  if (!hasStarted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={chapterId ? `/subtopics/${chapterId}` : "/modules"}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>

            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{quiz.title}</h1>
              {quiz.description && (
                <p className="text-gray-600 mb-6">{quiz.description}</p>
              )}

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h2 className="font-semibold text-gray-900 mb-4">Quiz Information</h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Questions:</span>
                    <span className="font-medium">{quiz.questions.length}</span>
                  </div>
                  {quiz.passingScore && (
                    <div className="flex justify-between">
                      <span>Passing Score:</span>
                      <span className="font-medium">{quiz.passingScore}%</span>
                    </div>
                  )}
                  {quiz.timeLimit && (
                    <div className="flex justify-between">
                      <span>Time Limit:</span>
                      <span className="font-medium">{quiz.timeLimit} minutes</span>
                    </div>
                  )}
                  {moduleTitle && (
                    <div className="flex justify-between">
                      <span>Module:</span>
                      <span className="font-medium">{moduleTitle}</span>
                    </div>
                  )}
                  {chapterTitle && (
                    <div className="flex justify-between">
                      <span>Chapter:</span>
                      <span className="font-medium">{chapterTitle}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Once you start the quiz, you cannot go back. Make sure you're ready before beginning.
                </p>
              </div>

              <button
                onClick={() => setHasStarted(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
              >
                Start Quiz
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-1 py-12 w-full">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuizPlayer quiz={quiz} onComplete={handleQuizComplete} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
