"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { findModuleBySlug } from "@/app/content/_data/modules";
import { BookOpen, FileText, HelpCircle, FileCheck, ArrowLeft, ChevronRight, PlayCircle } from "lucide-react";

export default function ModuleDetailPage() {
  const params = useParams();
  const moduleSlug = params.modulesId as string;
  const module = findModuleBySlug(moduleSlug);

  if (!module) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1 py-12 w-full">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Module Not Found</h1>
              <p className="text-gray-600 mb-4">The module you're looking for doesn't exist.</p>
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

  const sortedChapters = [...module.chapters].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      <main className="flex-1 py-8 sm:py-12 w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/modules"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Modules
          </Link>

          {/* Module Header */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-indigo-100 p-4 rounded-lg">
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="inline-block bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded mb-2">
                      Module #{module.order}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {module.title}
                    </h1>
                    {module.description && (
                      <p className="text-gray-600">{module.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {module.chapters.length} {module.chapters.length === 1 ? "Chapter" : "Chapters"}
                  </span>
                  {module.totalMaterials && (
                    <span>{module.totalMaterials} Materials</span>
                  )}
                  {module.totalQuizzes && (
                    <span className="flex items-center gap-1">
                      <HelpCircle className="w-4 h-4" />
                      {module.totalQuizzes} Quizzes
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Chapters List */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Chapters</h2>
            <div className="space-y-4">
              {sortedChapters.map((chapter, index) => {
                const hasQuiz = !!chapter.quiz;
                const hasQuestionnaire = !!chapter.questionnaire;
                const materialCount = chapter.materials?.length || 0;

                return (
                  <div
                    key={chapter.id}
                    className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:shadow-md hover:border-indigo-300 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-semibold">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {chapter.title}
                        </h3>
                        {chapter.content && (
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {chapter.content}
                          </p>
                        )}
                        
                        {/* Resources */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          {materialCount > 0 && (
                            <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              <FileText className="w-3 h-3" />
                              {materialCount} {materialCount === 1 ? "Material" : "Materials"}
                            </span>
                          )}
                          {hasQuiz && (
                            <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              <PlayCircle className="w-3 h-3" />
                              Quiz Available
                            </span>
                          )}
                          {hasQuestionnaire && (
                            <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              <FileCheck className="w-3 h-3" />
                              Questionnaire
                            </span>
                          )}
                        </div>

                        {/* Action Button */}
                        <Link
                          href={`/subtopics/${chapter.id}`}
                          className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition"
                        >
                          View Chapter
                          <ChevronRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Empty State */}
          {sortedChapters.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No chapters available in this module.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
