import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyHub - SQA Learning Platform",
  description: "A collaborative platform for Software Quality Assurance learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full overflow-x-hidden">
      <body className="antialiased h-full w-full bg-gray-50 m-0 p-0 overflow-x-hidden">
        <div className="min-h-full w-full flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
