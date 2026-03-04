import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const InterviewScreen = ({ onExit }) => {
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const totalQuestions = 5;

    // Timer logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const progressPercentage = (currentQuestion / totalQuestions) * 100;

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#d2f0fa] via-[#dbeef9] to-[#e8f4fc] overflow-x-hidden">

            {/* Header */}
            <header className="relative bg-white/40 backdrop-blur-sm px-6 py-4 flex justify-between items-center border-b-2 border-blue-100 shadow-sm">
                <div className="flex items-center">
                    {/* Logo Image */}
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 object-contain"
                    />
                </div>

                <div className="flex items-center space-x-6">
                    {/* Timer */}
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md border border-blue-100">
                        <svg className="w-5 h-5 text-[#0056b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className={`text-xl font-bold font-mono ${timeLeft < 60 ? 'text-red-500' : 'text-gray-700'}`}>
                            {formatTime(timeLeft)}
                        </span>
                    </div>

                    {/* Exit Button */}
                    <button
                        onClick={onExit}
                        className="flex items-center gap-2 px-4 py-2 text-red-500 font-semibold hover:bg-red-50 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-red-200"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Exit Interview
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-6xl mx-auto w-full p-6 sm:p-8 flex flex-col min-h-[calc(100vh-100px)]">

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-600">
                            Question {currentQuestion} of {totalQuestions}
                        </span>
                        <span className="text-sm font-semibold text-[#0056b3]">
                            {Math.round(progressPercentage)}% Complete
                        </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                        <div
                            className="h-full bg-gradient-to-r from-[#003380] to-[#0056b3] transition-all duration-500 ease-out rounded-full"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>

                {/* Question Section */}
                <div className="mb-auto">
                    <div className="flex flex-wrap gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-sm font-bold px-4 py-2 rounded-xl border-2 border-blue-300 shadow-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            Q{currentQuestion}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm font-bold px-4 py-2 rounded-xl border-2 border-green-300 shadow-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                            </svg>
                            L2 - Understand
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 text-sm font-bold px-4 py-2 rounded-xl border-2 border-purple-300 shadow-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            Medium
                        </span>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl flex flex-col justify-center items-center shadow-lg border-2 border-blue-100 min-h-[350px] hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-start gap-4 w-full max-w-3xl">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#003380] to-[#0056b3] flex items-center justify-center shadow-md">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-relaxed">
                                What is the difference between array and linked list?
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-8 bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-blue-100 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Take your time to think through your answer. You can always come back to edit it.
                        </p>

                        <div className="flex items-center gap-4">
                            {/* Progress Dots */}
                            <div className="flex gap-2">
                                {[...Array(totalQuestions)].map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index < currentQuestion
                                                ? 'bg-gradient-to-r from-[#003380] to-[#0056b3] scale-110 shadow-md'
                                                : index === currentQuestion - 1
                                                    ? 'bg-[#0056b3] scale-125 shadow-lg ring-2 ring-blue-300'
                                                    : 'bg-gray-300'
                                            }`}
                                    ></div>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-2">
                                {currentQuestion > 1 && (
                                    <button className="px-4 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center gap-2 shadow-sm">
                                        <span>←</span>
                                        Previous
                                    </button>
                                )}

                                <button
                                    onClick={() => setCurrentQuestion(prev => Math.min(prev + 1, totalQuestions))}
                                    className="px-6 py-2.5 bg-gradient-to-r from-[#003380] to-[#0056b3] hover:from-[#002260] hover:to-[#003d82] text-white rounded-xl font-bold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    {currentQuestion === totalQuestions ? 'Submit Interview' : 'Next Question'}
                                    <span>→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InterviewScreen;