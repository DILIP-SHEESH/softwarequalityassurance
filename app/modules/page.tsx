"use client";

import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { modules as allModules } from "@/app/content/_data/modules";
import { BookOpen, ChevronRight } from "lucide-react";

export default function ModulesPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-50">
      <Header />
      
      <main className="flex-1 py-10 sm:py-12 w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Modules</h1>
            <p className="text-gray-600">
              Five curated modules for BIS714B — browse materials, quizzes and more.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {allModules.map((m) => (
              <article
                key={m.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {m.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {m.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 bg-indigo-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                        #{m.order ?? 0}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                      <span>{m.chapters.length} chapters</span>
                      {m.totalMaterials && (
                        <span>• {m.totalMaterials} materials</span>
                      )}
                      {m.totalQuizzes && (
                        <span>• {m.totalQuizzes} quizzes</span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-gray-100">
                      <Link
                        href={`/modules/${m.slug}`}
                        className="inline-flex items-center w-full justify-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition"
                      >
                        Explore Module
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {allModules.length === 0 && (
            <div className="mt-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600">No modules available at the moment.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}