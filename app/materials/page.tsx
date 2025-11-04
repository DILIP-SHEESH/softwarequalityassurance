"use client";

import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { modules as allModules } from "@/app/content/_data/modules";
import { FileText, Video, ExternalLink, File, Download, BookOpen, ArrowRight } from "lucide-react";

export default function MaterialsPage() {
  // Collect all materials from all modules
  const allMaterials: Array<{
    material: any;
    chapter: any;
    module: any;
  }> = [];

  allModules.forEach((module) => {
    module.chapters.forEach((chapter) => {
      if (chapter.materials) {
        chapter.materials.forEach((material) => {
          allMaterials.push({
            material,
            chapter,
            module,
          });
        });
      }
    });
  });

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

  // Group materials by type
  const materialsByType = {
    PDF: allMaterials.filter((m) => m.material.type === "PDF"),
    VIDEO: allMaterials.filter((m) => m.material.type === "VIDEO"),
    LINK: allMaterials.filter((m) => m.material.type === "LINK"),
    NOTE: allMaterials.filter((m) => m.material.type === "NOTE"),
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      <main className="flex-1 py-8 sm:py-12 w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">All Materials</h1>
            <p className="text-sm text-gray-600 mt-2">
              Browse all study materials across all modules
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">{allMaterials.length}</div>
              <div className="text-xs text-gray-600">Total Materials</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">{materialsByType.PDF.length}</div>
              <div className="text-xs text-gray-600">PDFs</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">{materialsByType.VIDEO.length}</div>
              <div className="text-xs text-gray-600">Videos</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{materialsByType.LINK.length}</div>
              <div className="text-xs text-gray-600">Links</div>
            </div>
          </div>

          {/* All Materials List */}
          <div className="space-y-4">
            {allMaterials.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No materials available at the moment.</p>
              </div>
            ) : (
              allMaterials.map(({ material, chapter, module }) => (
                <a
                  key={material.id}
                  href={material.url}
                  target={material.type === "LINK" ? "_blank" : undefined}
                  rel={material.type === "LINK" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-indigo-300 transition-all group"
                >
                  <div className={`flex-shrink-0 p-3 rounded-lg ${getMaterialColor(material.type)}`}>
                    {getMaterialIcon(material.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition mb-1">
                      {material.title}
                    </h3>
                    {material.description && (
                      <p className="text-sm text-gray-600 mb-2 line-clamp-1">
                        {material.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {module.title}
                      </span>
                      <span>•</span>
                      <span>{chapter.title}</span>
                      <span>•</span>
                      <span className="font-medium">{material.type}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {material.type === "LINK" ? (
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition" />
                    ) : (
                      <Download className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition" />
                    )}
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
