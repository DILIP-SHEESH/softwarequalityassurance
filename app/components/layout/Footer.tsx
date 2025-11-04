import Link from 'next/link';
import { BookOpen, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Section: Branding & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">StudyHub</h2>
                  <p className="text-xs text-gray-400">SQA Learning Platform</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400 max-w-md">
                A collaborative platform for Software Quality Assurance — built by students, for students.
              </p>
            </div>

            {/* Right Section: Institution Info */}
            <div className="space-y-3 md:text-right">
              <div className="space-y-1">
                <p className="font-semibold text-white text-sm">
                  Department of Information Science & Engineering
                </p>
                <p className="text-sm text-gray-400">
                  Under the guidance of Prof. Asma Ma'am
                </p>
              </div>
              <p className="text-xs text-gray-500">
                Semester 7 • © {currentYear} StudyHub
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            
            {/* Left: Credit */}
            <div className="flex items-center gap-1.5 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>by ISE Students</span>
            </div>

            {/* Right: Links */}
            <div className="flex items-center gap-6">
              <Link 
                href="/contributor/login" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contribute
              </Link>
              <Link 
                href="/admin/login" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}