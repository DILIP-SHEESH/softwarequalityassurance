"use client";
import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";

export default function StudentMaterialsPage() {
  const materials = [
    { topic: "Software Quality Metrics - Entire Chapter (Module 4)", link: "https://drive.google.com/drive/u/0/folders/1wl8JHo-deojCFWzFUynDOYaE3uvY4b9W" },
    { topic: "Chapter 20.3 - Implementation of Project Progress Control Regimes (Module 4)", link: "https://drive.google.com/drive/folders/1ArJjWw_oK3OpYV3KhZFN6xuobFGfiZD9?usp=sharing" },
    { topic: "Chapter 24.1-24.4 + Chapter 9.1-9.5 (Module 5)", link: "https://drive.google.com/drive/folders/1ABJTaUy2mcBHWBzh2rgETIliQlpOoSr1?usp=sharing" },
    { topic: "SPICE Project (Module 5)", link: "https://docs.google.com/document/d/1kBAlLm_8GjUXcNll8ds7KlnvmCP977gL/edit?usp=drivesdk" },
    { topic: "Module 4 & Module 5 Full Materials", link: "https://docs.google.com/document/d/1FprAHP6pEzyeZDDgYalSpWeAy4MblQfMIpkYqhN0rmQ/edit?usp=drivesdk" },
    { topic: "Structure and Content of IEEE Software Engineering Standards (Module 5)", link: "https://forms.gle/2LXcBB3ocKMrBTx17" },
    { topic: "Spice Project (Module 5)", link: "https://docs.google.com/document/d/19vAosoVThaiJ1sAWXB6Sv0TY6N4C7_WX/edit?usp=drivesdk" },
    { topic: "24.1 & 24.2 IEEE Standards (Module 5)", link: "https://drive.google.com/drive/folders/1_aiKIONOIDKyFOfeG5A_Ne-6zCtdsbUp" },
    { topic: "Scope of Quality Management Standards (Module 5)", link: "https://forms.gle/39sYUMqibGjPhUgM9" },
    { topic: "Spice, Certification, CMMI (Module 5)", link: "https://docs.google.com/document/d/1wpGJ3mWkOBL-G7oCjBlR1Y_Uy0KqGIlG/edit?usp=drivesdk" },
    { topic: "Digital Twin (Module 4)", link: "https://drive.google.com/drive/folders/1P1B7eArrqb1tozRGYvGKlPXJEy1UzQQv" },
    { topic: "Management Components + Metrics + IEEE + ISO (Module 4 & 5)", link: "https://drive.google.com/drive/folders/11zJLNtXq5bWwPAvNCumy5rxGt3l86qLd" },
    { topic: "Software Quality Metrics", link: "https://drive.google.com/file/d/1AG4bZqwO8m1izodnhPiZpARCjZVz_C77/view?usp=sharing" },
    { topic: "Capability Maturity Model (Module 5)", link: "https://docs.google.com/presentation/d/18K1OWHbUUalR42u56ZMZX9x25c0r-QNG/edit?usp=sharing" },
    { topic: "Software Quality Metrics Study Materials", link: "https://drive.google.com/file/d/1ZQQpHE5TgfK6baJiFAKbN28uAHK2I4bj/view?usp=sharing" },
    { topic: "SQA Components in Project Lifecycle (Module 3)", link: "https://docs.google.com/document/d/1zJeGuvJJKk64iADZ6vR6L5XJVQplmQue/edit?usp=sharing" },
    { topic: "Computerized Tools for Software Progress Control", link: "https://drive.google.com/drive/folders/11R4uBAlm1fNtKLIorxPTylgmQS0f_VyE?usp=sharing" },
    { topic: "IEEE Std 1012 - Verification and Validation (Module 5)", link: "https://docs.google.com/presentation/d/1tsmOm9jKUaEvqtfCw2d2z5jaPwpBjiSP/edit?usp=drivesdk" },
    { topic: "Project Progress Control + Assessment + IEEE + ISO (Module 4 & 5)", link: "https://drive.google.com/drive/folders/1QTd4pCEGMkG20zFdVLa25sbV2E7rA_hP?usp=sharing" },
    { topic: "Spice Project (Module 5)", link: "https://docs.google.com/presentation/d/18v4OgUbxZ93xpjZ7ToLSluA9vam4nn52/edit?usp=drivesdk" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-3">Student Submitted Materials</h1>
          <p className="text-center text-gray-600 mb-10">All Drive Links from Assignment Submissions</p>

          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="p-5 text-left">Topic / Chapter</th>
                  <th className="p-5 text-center">Drive Link</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((item, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-5 font-medium">{item.topic}</td>
                    <td className="p-5 text-center">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium"
                      >
                        Open Drive →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}