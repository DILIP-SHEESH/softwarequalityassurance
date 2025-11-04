"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { findChapterById } from "@/app/content/_data/modules";
import { 
  ArrowLeft, 
  FileText, 
  PlayCircle, 
  FileCheck, 
  Download, 
  ExternalLink, 
  Video,
  File,
  BookOpen
} from "lucide-react";
export default function SubtopicPage() {
  const params = useParams();
  const chapterId = params.subtopicsId as string;
  const result = findChapterById(chapterId);

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1 py-12 w-full">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Chapter Not Found</h1>
              <p className="text-gray-600 mb-4">The chapter you're looking for doesn't exist.</p>
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

  const { module, chapter } = result;
  const materials = chapter.materials || [];
  const hasQuiz = !!chapter.quiz;
  const hasQuestionnaire = !!chapter.questionnaire;

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="w-5 h-5" />;
      case "VIDEO":
        return <Video className="w-5 h-5" />;
      case "LINK":
        return <ExternalLink className="w-5 h-5" />;
      case "NOTE":
        return <File className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getMaterialColor = (type: string) => {
    switch (type) {
      case "PDF":
        return "bg-red-100 text-red-700";
      case "VIDEO":
        return "bg-purple-100 text-purple-700";
      case "LINK":
        return "bg-blue-100 text-blue-700";
      case "NOTE":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      <main className="flex-1 py-8 sm:py-12 w-full">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/modules" className="hover:text-gray-900 transition">
                Modules
              </Link>
              <span>/</span>
              <Link 
                href={`/modules/${module.slug}`} 
                className="hover:text-gray-900 transition"
              >
                {module.title}
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{chapter.title}</span>
            </nav>
          </div>

          {/* Back Button */}
          <Link
            href={`/modules/${module.slug}`}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Module
          </Link>

          {/* Chapter Header */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {chapter.title}
                </h1>
                {chapter.content && (
                  <p className="text-gray-600 leading-relaxed">{chapter.content}</p>
                )}
              </div>
            </div>
          </div>

          {/* Materials Section */}
          {materials.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                Study Materials
              </h2>
              <div className="space-y-3">
                {materials.map((material) => (
                  <a
                    key={material.id}
                    href={material.url}
                    target={material.type === "LINK" ? "_blank" : undefined}
                    rel={material.type === "LINK" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-indigo-300 transition-all group"
                  >
                    <div className={`flex-shrink-0 p-2 rounded-lg ${getMaterialColor(material.type)}`}>
                      {getMaterialIcon(material.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                        {material.title}
                      </h3>
                      {material.description && (
                        <p className="text-sm text-gray-600 mt-1">{material.description}</p>
                      )}
                      <span className="inline-block mt-2 text-xs text-gray-500">
                        {material.type}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      {material.type === "LINK" ? (
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition" />
                      ) : (
                        <Download className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition" />
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Quiz Section */}
          {hasQuiz && chapter.quiz && (
            <section className="mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                    <PlayCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {chapter.quiz.title}
                    </h2>
                    {chapter.quiz.description && (
                      <p className="text-gray-600 mb-4">{chapter.quiz.description}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <span>{chapter.quiz.questions.length} Questions</span>
                      {chapter.quiz.passingScore && (
                        <span>Passing Score: {chapter.quiz.passingScore}%</span>
                      )}
                      {chapter.quiz.timeLimit && (
                        <span>Time Limit: {chapter.quiz.timeLimit} minutes</span>
                      )}
                    </div>
                    <Link
                      href={`/quizzes/start?quizId=${chapter.quiz.id}&chapterId=${chapter.id}`}
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
                    >
                      <PlayCircle className="w-5 h-5 mr-2" />
                      Start Quiz
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Questionnaire Section */}
          {hasQuestionnaire && chapter.questionnaire && (
            <section className="mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <FileCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {chapter.questionnaire.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Complete this self-assessment questionnaire to track your learning progress.
                    </p>
                    <div className="text-sm text-gray-600 mb-4">
                      {chapter.questionnaire.questions.length} Questions
                    </div>
                    <Link
                      href={`/questionnaire/${chapter.questionnaire.id}?chapterId=${chapter.id}`}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                    >
                      <FileCheck className="w-5 h-5 mr-2" />
                      Start Questionnaire
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Empty State */}
          {materials.length === 0 && !hasQuiz && !hasQuestionnaire && (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No materials or activities available for this chapter yet.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
