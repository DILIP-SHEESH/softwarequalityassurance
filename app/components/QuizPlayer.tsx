"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, Trophy, RotateCcw } from "lucide-react";

interface QuizPlayerProps {
  quiz: any;
}

export default function QuizPlayer({ quiz }: QuizPlayerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    quiz.questions.forEach((q: any, i: number) => {
      if (selectedAnswers[i] === q.answer) correctCount++;
    });
    const score = Math.round((correctCount / totalQuestions) * 100);
    setShowResults(true);

    // Show result immediately
    setTimeout(() => {
      alert(`🎯 Your Final Score: ${score}% (${correctCount}/${totalQuestions} correct)`);
    }, 300);
  };

  if (showResults) {
    const correctCount = quiz.questions.filter((q: any, i: number) => selectedAnswers[i] === q.answer).length;
    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = score >= (quiz.passingScore || 70);

    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-4xl mx-auto shadow-xl">
        <div className="text-center">
          <div className={`inline-flex w-24 h-24 rounded-full items-center justify-center mb-6 ${passed ? "bg-green-100" : "bg-red-100"}`}>
            {passed ? <Trophy className="w-14 h-14 text-green-600" /> : <XCircle className="w-14 h-14 text-red-600" />}
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-2">{score}%</h2>
          <p className="text-xl text-gray-600">{correctCount} out of {totalQuestions} correct</p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="mt-10 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 rounded-xl text-lg flex items-center justify-center gap-3"
        >
          <RotateCcw className="w-5 h-5" />
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-4xl mx-auto shadow-xl">
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-bold">{quiz.title}</h2>
        <p className="text-gray-500">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
      </div>

      <h3 className="text-xl font-medium mb-8">{currentQuestion.text}</h3>

      <div className="space-y-4 mb-10">
        {currentQuestion.options.map((option: string, index: number) => {
          const isSelected = selectedAnswers[currentQuestionIndex] === index;
          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-6 rounded-2xl border-2 text-lg transition-all ${
                isSelected ? "border-indigo-600 bg-indigo-50" : "border-gray-200 hover:border-gray-400"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="flex-1 py-4 border border-gray-300 rounded-2xl font-medium disabled:opacity-50"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-medium hover:bg-indigo-700"
        >
          {currentQuestionIndex === totalQuestions - 1 ? "Submit Quiz" : "Next →"}
        </button>
      </div>
    </div>
  );
}