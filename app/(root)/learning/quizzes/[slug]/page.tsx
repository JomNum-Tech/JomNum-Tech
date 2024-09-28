"use client";

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { quizzes } from '../page';

const QuizPage = ({ params }: { params: { slug: string } }) => {
  const quiz = quizzes.find((q) => q.slug === params.slug);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // Total time for the quiz (300 seconds)
  const [isTimeUp, setIsTimeUp] = useState(false);

  if (!quiz) {
    notFound(); 
  }

  const questions = [
    {
      question: "What is the output of `console.log(typeof NaN)`?",
      answers: ["number", "NaN", "undefined", "object"],
      correctAnswer: "number",
    },
    {
      question: "Which keyword is used to define a variable in JavaScript?",
      answers: ["let", "var", "const", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      question: "What is the output of `console.log(2 + '2')`?",
      answers: ["4", "22", "undefined", "NaN"],
      correctAnswer: "22",
    },
    {
      question: "Which array method creates a new array with the result of calling a function on every element?",
      answers: ["map()", "forEach()", "filter()", "reduce()"],
      correctAnswer: "map()",
    },
    {
      question: "What does the `isNaN()` function do?",
      answers: ["Checks if a value is null", "Checks if a value is NaN", "Checks if a value is an array", "Checks if a value is a string"],
      correctAnswer: "Checks if a value is NaN",
    },
    {
      question: "What is the purpose of `setTimeout()`?",
      answers: ["To execute a function immediately", "To repeat a function at intervals", "To execute a function after a delay", "To stop a function"],
      correctAnswer: "To execute a function after a delay",
    },
    {
      question: "Which method converts a JSON string into a JavaScript object?",
      answers: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
      correctAnswer: "JSON.parse()",
    },
    {
      question: "Which keyword is used to check if a property exists in an object?",
      answers: ["has", "in", "of", "find"],
      correctAnswer: "in",
    },
    {
      question: "What is the output of `console.log(Boolean(0))`?",
      answers: ["true", "false", "undefined", "NaN"],
      correctAnswer: "false",
    },
    {
      question: "Which method is used to merge two or more arrays?",
      answers: ["concat()", "push()", "splice()", "unshift()"],
      correctAnswer: "concat()",
    },
    {
      question: "What does `this` refer to in a JavaScript function?",
      answers: ["The global object", "The object that owns the method", "The function itself", "The last object called"],
      correctAnswer: "The object that owns the method",
    },
    {
      question: "What is the purpose of the `reduce()` method in an array?",
      answers: [
        "To filter the elements of an array",
        "To reduce the array size",
        "To execute a reducer function on each element and return a single value",
        "To sort the array",
      ],
      correctAnswer: "To execute a reducer function on each element and return a single value",
    },
    {
      question: "What is the output of `console.log([] == ![])`?",
      answers: ["true", "false", "undefined", "TypeError"],
      correctAnswer: "true",
    },
    {
      question: "What does the `bind()` method do in JavaScript?",
      answers: [
        "Creates a new function that, when called, has its `this` keyword set to the provided value",
        "Immediately invokes a function",
        "Attaches an event listener",
        "Adds a method to an object",
      ],
      correctAnswer: "Creates a new function that, when called, has its `this` keyword set to the provided value",
    },
    {
      question: "What is the output of `console.log('5' - 3)`?",
      answers: ["2", "8", "53", "NaN"],
      correctAnswer: "2",
    },
    {
      question: "Which operator is used to check strict equality in JavaScript?",
      answers: ["==", "!=", "===", "!=="],
      correctAnswer: "===",
    },
    {
      question: "Which method can be used to add one or more elements to the beginning of an array?",
      answers: ["push()", "pop()", "unshift()", "shift()"],
      correctAnswer: "unshift()",
    },
    {
      question: "What is the difference between `==` and `===`?",
      answers: [
        "`==` compares values, `===` compares values and types",
        "`==` compares types, `===` compares values",
        "`==` is for strings, `===` is for numbers",
        "They are the same",
      ],
      correctAnswer: "`==` compares values, `===` compares values and types",
    },
    {
      question: "What is the output of `typeof []`?",
      answers: ["object", "array", "undefined", "null"],
      correctAnswer: "object",
    },
    {
      question: "Which method is used to return a shallow copy of a portion of an array into a new array?",
      answers: ["splice()", "slice()", "concat()", "map()"],
      correctAnswer: "slice()",
    },
  ];

  // Timer effect for overall quiz
  useEffect(() => {
    if (timeLeft > 0 && !isTimeUp) {
      const timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      setIsTimeUp(true);
      // Handle quiz submission or transition to results
    }
  }, [timeLeft, isTimeUp]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setIsTimeUp(true); // Mark time up if it's the last question
    }
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
        <p className="mb-4">{quiz.description}</p>

        {/* Timer Progress Bar */}
        <div className="relative mb-4">
          <div style={{ width: `${(timeLeft / 300) * 100}%`, height: '22px', backgroundColor: 'green', transition: 'width 0.5s' }} />
          <p className="absolute top-0 left-0 text-white">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} minutes left</p>
        </div>

        {/* Quiz Questions */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <p className="mt-4">{questions[currentQuestion].question}</p>
          {isTimeUp && <p className="text-red-500">Time is up! Submitting your answers...</p>}
          <div className="mt-4 space-y-2">
            {questions[currentQuestion].answers.map((answer) => (
              <button
                key={answer}
                onClick={() => handleAnswerSelect(answer)}
                className={`w-full p-3 rounded-md transition-transform transform ${selectedAnswer === answer ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {answer}
              </button>
            ))}
          </div>
          {currentQuestion < questions.length - 1 && (
            <button
              onClick={handleNextQuestion}
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded transition-transform transform hover:scale-105"
            >
              Next Question
            </button>
          )}
          {currentQuestion === questions.length - 1 && (
            <p className="mt-4">
              Your score: {score} out of {questions.length}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default QuizPage;