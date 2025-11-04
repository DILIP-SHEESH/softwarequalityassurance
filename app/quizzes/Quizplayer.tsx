"use client";

import { useState, useEffect } from "react";
import { Quiz, Question } from "@/app/content/_data/modules";
import { CheckCircle2, XCircle, Clock, ArrowRight, ArrowLeft, Trophy, RotateCcw } from "lucide-react";

interface QuizPlayerProps {
  quiz: Quiz;
  onComplete?: (score: number, totalQuestions: number, answers: number[]) => void;
}

export function QuizPlayer({ quiz, onComplete }: QuizPlayerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [startTime] = useState(Date.now());

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;

  // Initialize timer if time limit exists
  useEffect(() => {
    if (quiz.timeLimit) {
      setTimeRemaining(quiz.timeLimit * 60); // Convert minutes to seconds
      const interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev === null || prev <= 1) {
            clearInterval(interval);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz.timeLimit]);

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
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctCount++;
      }
    });
    const score = Math.round((correctCount / totalQuestions) * 100);
    setShowResults(true);
    if (onComplete) {
      onComplete(score, totalQuestions, selectedAnswers);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (showResults) {
    const correctCount = quiz.questions.filter(
      (q, i) => selectedAnswers[i] === q.answer
    ).length;
    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = !quiz.passingScore || score >= quiz.passingScore;

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
            passed ? "bg-green-100" : "bg-red-100"
          }`}>
            {passed ? (
              <Trophy className="w-10 h-10 text-green-600" />
            ) : (
              <XCircle className="w-10 h-10 text-red-600" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {passed ? "Congratulations!" : "Keep Learning!"}
          </h2>
          <p className="text-gray-600 mb-6">
            {passed
              ? "You passed the quiz!"
              : `You need ${quiz.passingScore || 70}% to pass. Keep studying!`}
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6 max-w-md mx-auto">
            <div className="text-4xl font-bold text-indigo-600 mb-2">{score}%</div>
            <div className="text-sm text-gray-600">
              {correctCount} out of {totalQuestions} questions correct
            </div>
          </div>

          {/* Detailed Results */}
          <div className="text-left max-w-2xl mx-auto space-y-4 mb-6">
            {quiz.questions.map((question, index) => {
              const isCorrect = selectedAnswers[index] === question.answer;
              return (
                <div
                  key={question.id}
                  className={`border rounded-lg p-4 ${
                    isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 mb-2">
                        Q{index + 1}: {question.text}
                      </p>
                      <div className="space-y-1">
                        <div className="text-sm">
                          <span className="font-medium">Your answer: </span>
                          <span className={isCorrect ? "text-green-700" : "text-red-700"}>
                            {question.options[selectedAnswers[index] || 0]}
                          </span>
                        </div>
                        {!isCorrect && (
                          <div className="text-sm">
                            <span className="font-medium">Correct answer: </span>
                            <span className="text-green-700">
                              {question.options[question.answer]}
                            </span>
                          </div>
                        )}
                        {question.explanation && (
                          <div className="text-sm text-gray-600 mt-2 italic">
                            {question.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">{quiz.title}</h2>
          {timeRemaining !== null && (
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Clock className="w-4 h-4" />
              {formatTime(timeRemaining)}
            </div>
          )}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
        <div className="text-sm text-gray-600 mt-2">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {currentQuestion.text}
        </h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestionIndex] === index;
            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  isSelected
                    ? "border-indigo-600 bg-indigo-50 text-indigo-900"
                    : "border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      isSelected
                        ? "border-indigo-600 bg-indigo-600"
                        : "border-gray-300"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </button>
        <button
          onClick={handleNext}
          className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
        >
          {currentQuestionIndex === totalQuestions - 1 ? "Submit" : "Next"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}
