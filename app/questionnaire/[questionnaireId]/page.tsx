"use client";

import { useSearchParams, useParams } from "next/navigation";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { findChapterById } from "@/app/content/_data/modules";
import { ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function QuestionnairePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const questionnaireId = params.questionnaireId as string;
  const chapterId = searchParams.get("chapterId");

  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  let questionnaire = null;
  let chapterTitle = "";
  let moduleTitle = "";

  if (chapterId) {
    const chapterResult = findChapterById(chapterId);
    if (chapterResult && chapterResult.chapter.questionnaire) {
      questionnaire = chapterResult.chapter.questionnaire;
      chapterTitle = chapterResult.chapter.title;
      moduleTitle = chapterResult.module.title;
    }
  }

  if (!questionnaire) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1 py-12 w-full">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Questionnaire Not Found</h2>
              <p className="text-gray-600 mb-4">
                The questionnaire you're looking for doesn't exist or has been removed.
              </p>
              <Link
                href={chapterId ? `/subtopics/${chapterId}` : "/modules"}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAnswerChange = (questionId: string, value: string | number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    // You can add logic here to save responses
    console.log("Questionnaire submitted:", answers);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1 py-12 w-full">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                Your responses have been submitted successfully.
              </p>
              <Link
                href={chapterId ? `/subtopics/${chapterId}` : "/modules"}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Link>
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
          <Link
            href={chapterId ? `/subtopics/${chapterId}` : "/modules"}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>

          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {questionnaire.title}
            </h1>
            {moduleTitle && (
              <p className="text-sm text-gray-600 mb-1">Module: {moduleTitle}</p>
            )}
            {chapterTitle && (
              <p className="text-sm text-gray-600 mb-4">Chapter: {chapterTitle}</p>
            )}
            <p className="text-gray-600">
              Please answer all questions honestly to help us understand your learning progress.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="space-y-6"
          >
            {questionnaire.questions.map((question, index) => (
              <div
                key={question.id}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  {index + 1}. {question.q}
                </label>

                {question.type === "likert" && question.scale && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>Strongly Disagree</span>
                      <span>Strongly Agree</span>
                    </div>
                    <div className="flex gap-2">
                      {Array.from({ length: question.scale }, (_, i) => i + 1).map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => handleAnswerChange(question.id, value)}
                          className={`flex-1 py-3 px-2 rounded-lg border-2 transition-all ${
                            answers[question.id] === value
                              ? "border-indigo-600 bg-indigo-50 text-indigo-900 font-medium"
                              : "border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50"
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>1</span>
                      <span>{question.scale}</span>
                    </div>
                  </div>
                )}

                {question.type === "text" && (
                  <textarea
                    value={(answers[question.id] as string) || ""}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={4}
                    placeholder="Enter your answer here..."
                    required
                  />
                )}

                {question.type === "multiple" && question.options && (
                  <div className="space-y-2">
                    {question.options.map((option, optIndex) => (
                      <label
                        key={optIndex}
                        className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition"
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          checked={answers[question.id] === option}
                          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                          required
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex justify-end gap-4 pt-4">
              <Link
                href={chapterId ? `/subtopics/${chapterId}` : "/modules"}
                className="px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
              >
                Submit Questionnaire
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
