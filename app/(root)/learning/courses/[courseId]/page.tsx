"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, BookOpen, HelpCircle, FileText, Code, Play } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const courseData = {
    'devops-terminology': {
        title: 'DevOps Terminology',
        description: 'Learn the key terms and concepts in DevOps',
        lessons: [
            {
                title: 'I. Story of DevOps',
                content: 'The story of DevOps began in the late 2000s, as software development teams started to recognize the need for better collaboration between developers and operations teams...',
                video: {
                    url: "https://www.youtube.com/embed/kBV8gPVZNEE?si=vQPB49wPAvehYa90",
                },
                coding: {
                    language: 'python',
                    code: `def hello_devops():
      print("Welcome to DevOps!")
  
  hello_devops()`,
                    description: 'A simple Python function to welcome you to DevOps.'
                },
                quiz: [
                    {
                        question: 'What year did Patrick Debois notice the disconnect between Dev and Ops?',
                        options: [
                            '2005',
                            '2007',
                            '2010',
                            '2012'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'What was the focus of the "birds of a feather" meeting created by Andrew Shafer?',
                        options: [
                            'Agile Infrastructure',
                            'DevOps Practices',
                            'Software Testing',
                            'Cloud Computing'
                        ],
                        correctAnswer: 0
                    }
                ],
                test: [
                    {
                        question: 'Describe how the DevOps movement began and its significance.',
                        type: 'essay'
                    }
                ]
            },
            {
                title: 'II. What and Why DevOps?',
                content: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality...',
                video: {
                    url: "https://www.youtube.com/embed/kBV8gPVZNEE?si=vQPB49wPAvehYa90",
                },
                coding: {
                    language: 'bash',
                    code: `#!/bin/bash
  echo "Welcome to the world of DevOps!"`,
                    description: 'A simple Bash script that welcomes users to DevOps.'
                },
                quiz: [
                    {
                        question: 'What does the term "continuous delivery" refer to?',
                        options: [
                            'Releasing software continuously without testing',
                            'Releasing software frequently with automated testing',
                            'Releasing software only once a year',
                            'Releasing software only after manual approval'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: 'Which of the following is a key benefit of adopting DevOps?',
                        options: [
                            'Increased silos between teams',
                            'Faster time to market for new features',
                            'Higher failure rates in production',
                            'Less collaboration between teams'
                        ],
                        correctAnswer: 1
                    }
                ],
                test: [
                    {
                        question: 'Explain how DevOps practices can lead to improved collaboration between teams.',
                        type: 'essay'
                    }
                ]
            },
            {
                title: "III. Continuous Integration and Continuous Deployment (CI/CD)",
                content:
                    "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development...",
                video: {
                    url: "https://www.youtube.com/embed/CI_CD_Example",
                },
                coding: {
                    language: "yaml",
                    code: `# Example GitHub Actions CI/CD pipeline
  name: CI/CD Pipeline
  
  on:
    push:
      branches:
        - main
  
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout code
          uses: actions/checkout@v2
  
        - name: Set up Node.js
          uses: actions/setup-node@v2
          with:
            node-version: 14
  
        - name: Install dependencies
          run: npm install
  
        - name: Run tests
          run: npm test`,
                    description:
                        "An example CI/CD pipeline using GitHub Actions.",
                },
                quiz: [
                    {
                        question:
                            "What is a primary goal of Continuous Integration?",
                        options: [
                            "To deploy applications every hour",
                            "To integrate code changes frequently",
                            "To reduce collaboration among developers",
                            "To automate manual testing"
                        ],
                        correctAnswer: 1,
                    },
                    {
                        question:
                            "Which tool is commonly used for CI/CD?",
                        options: [
                            "Jenkins",
                            "Photoshop",
                            "Slack",
                            "Trello"
                        ],
                        correctAnswer: 0,
                    },
                ],
                test: [
                    {
                        question:
                            "Discuss how CI/CD practices can enhance software delivery speed and quality.",
                        type: "essay",
                    },
                ],
            },
            {
                title: "IV. Infrastructure as Code (IaC)",
                content:
                    "Infrastructure as Code is a key practice in DevOps that allows you to manage infrastructure through code rather than manual processes...",
                video: {
                    url: "https://www.youtube.com/embed/IaC_Example"
                },
                coding: {
                    language: "json",
                    code: `{
               "version": "3.8",
               "services": {
                 "web": {
                   "image": "nginx",
                   "ports": ["80"]
                 }
               }
             }`,
                    description: "An example Docker Compose file for deploying a web service."
                },
                quiz: [
                    {
                        question: "Which tool is commonly used for Infrastructure as Code?",
                        options: [
                            "Docker",
                            "Terraform",
                            "Kubernetes",
                            "Ansible"
                        ],
                        correctAnswer: 1,
                    },
                    {
                        question: "What is one benefit of using IaC?",
                        options: [
                            "Increased manual configuration",
                            "Faster deployment times",
                            "Higher costs",
                            "More human error"
                        ],
                        correctAnswer: 1,
                    }
                ],
                test: [
                    {
                        question: "Explain how Infrastructure as Code can improve collaboration between development and operations teams.",
                        type: "essay"
                    }
                ]
            },
            {
                title: "V. Monitoring and Logging",
                content: "Monitoring and logging are essential practices in DevOps that help teams understand application performance and diagnose issues...",
                video: {
                    url: "https://www.youtube.com/embed/Monitoring_Logging_Example"
                },
                coding: {
                    language: "python",
                    code: `import logging
  
  logging.basicConfig(level=logging.INFO)
  logging.info("Monitoring application started")`,
                    description: "A simple Python script demonstrating logging."
                },
                quiz: [
                    {
                        question: "Which tool is often used for monitoring applications?",
                        options: [
                            "Grafana",
                            "Photoshop",
                            "Visual Studio Code",
                            "Slack"
                        ],
                        correctAnswer: 0,
                    },
                    {
                        question: "Why is logging important in a DevOps environment?",
                        options: [
                            "To increase application size",
                            "To track user activity only",
                            "To diagnose issues quickly",
                            "To slow down performance"
                        ],
                        correctAnswer: 2,
                    }
                ],
                test: [
                    {
                        question: "Discuss the importance of monitoring and logging in maintaining application health.",
                        type: "essay"
                    }
                ]
            }
        ]
    },
    // Add more courses here...
}

export default function CourseContent({ params }: { params: { courseId: string } }) {
    const [activeLesson, setActiveLesson] = useState(0)
    const [activeTab, setActiveTab] = useState('lesson')
    const [quizAnswers, setQuizAnswers] = useState<number[]>([])
    const [testAnswers, setTestAnswers] = useState<string[]>([])
    const [codeOutput, setCodeOutput] = useState<string>('')

    const course = courseData[params.courseId as keyof typeof courseData]
    const lesson = course.lessons[activeLesson]

    const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
        const newAnswers = [...quizAnswers]
        newAnswers[questionIndex] = answerIndex
        setQuizAnswers(newAnswers)
    }

    const handleTestAnswer = (questionIndex: number, answer: string) => {
        const newAnswers = [...testAnswers]
        newAnswers[questionIndex] = answer
        setTestAnswers(newAnswers)
    }

    const calculateProgress = () => {
        const totalQuestions = lesson.quiz.length + lesson.test.length
        const answeredQuestions = quizAnswers.filter(a => a !== undefined).length + testAnswers.filter(a => a !== '').length
        return (answeredQuestions / totalQuestions) * 100
    }

    const runCode = () => {
        // This is a mock implementation. In a real-world scenario, you'd send the code to a backend for execution.
        setCodeOutput('Hello, DevOps!')
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-600 mb-6">{course.description}</p>

            <div className="mb-6">
                <Progress value={calculateProgress()} className="w-full" />
                <p className="text-sm text-gray-600 mt-2">Progress: {Math.round(calculateProgress())}% complete</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="md:col-span-1">
                    <CardHeader>
                        <CardTitle>Table of Contents</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {course.lessons.map((lessonItem, index) => (
                                <li key={index}>
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start ${index === activeLesson ? 'bg-primary/10' : ''}`}
                                        onClick={() => setActiveLesson(index)}
                                    >
                                        {lessonItem.title}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <div className="md:col-span-3">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid w-full grid-cols-4 mb-6">
                            <TabsTrigger value="lesson" className="flex items-center justify-center">
                                <BookOpen className="w-4 h-4 mr-2" />
                                Lesson
                            </TabsTrigger>
                            <TabsTrigger value="coding" className="flex items-center justify-center">
                                <Code className="w-4 h-4 mr-2" />
                                Coding
                            </TabsTrigger>
                            <TabsTrigger value="quiz" className="flex items-center justify-center">
                                <HelpCircle className="w-4 h-4 mr-2" />
                                Quiz
                            </TabsTrigger>
                            <TabsTrigger value="test" className="flex items-center justify-center">
                                <FileText className="w-4 h-4 mr-2" />
                                Test
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="lesson">
                            <Card>
                                <CardHeader>
                                    <CardTitle>{lesson.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">{lesson.content}</p>
                                    {lesson.video && (
                                        <div className="aspect-w-16 aspect-h-9">
                                            <iframe
                                                src={lesson.video.url}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full rounded-lg"
                                            ></iframe>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="coding">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Coding Exercise</CardTitle>
                                    <CardDescription>{lesson.coding.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <SyntaxHighlighter language={lesson.coding.language} style={tomorrow}>
                                        {lesson.coding.code}
                                    </SyntaxHighlighter>
                                    <Button className="mt-4" onClick={runCode}>
                                        <Play className="w-4 h-4 mr-2" />
                                        Run Code
                                    </Button>
                                    {codeOutput && (
                                        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                                            <h4 className="font-semibold mb-2">Output:</h4>
                                            <pre>{codeOutput}</pre>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="quiz">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quiz</CardTitle>
                                    <CardDescription>Test your knowledge with these multiple-choice questions.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {lesson.quiz.map((question, index) => (
                                        <div key={index} className="mb-6">
                                            <h3 className="font-semibold mb-2">{question.question}</h3>
                                            <div className="space-y-2">
                                                {question.options.map((option, optionIndex) => (
                                                    <Button
                                                        key={optionIndex}
                                                        variant={quizAnswers[index] === optionIndex ? "default" : "outline"}
                                                        className="w-full justify-start"
                                                        onClick={() => handleQuizAnswer(index, optionIndex)}
                                                    >
                                                        {option}
                                                        {quizAnswers[index] === optionIndex && (
                                                            <CheckCircle className="w-4 h-4 ml-2" />
                                                        )}
                                                    </Button>
                                                ))}
                                            </div>
                                            {quizAnswers[index] !== undefined && (
                                                <p className={`mt-2 ${quizAnswers[index] === question.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                                                    {quizAnswers[index] === question.correctAnswer ? 'Correct!' : 'Incorrect. Try again!'}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="test">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Test</CardTitle>
                                    <CardDescription>Apply your knowledge with these open-ended questions.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {lesson.test.map((question, index) => (
                                        <div key={index} className="mb-6">
                                            <h3 className="font-semibold mb-2">{question.question}</h3>
                                            <textarea
                                                className="w-full p-2 border rounded-md"
                                                rows={4}
                                                value={testAnswers[index] || ''}
                                                onChange={(e) => handleTestAnswer(index, e.target.value)}
                                                placeholder="Type your answer here..."
                                            />
                                        </div>
                                    ))}
                                    <Button className="mt-4">Submit Test</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="mt-6 flex justify-between">
                        <Button
                            variant="outline"
                            onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))}
                            disabled={activeLesson === 0}
                        >
                            Previous Lesson
                        </Button>
                        <Button
                            onClick={() => setActiveLesson(Math.min(course.lessons.length - 1, activeLesson + 1))}
                            disabled={activeLesson === course.lessons.length - 1}
                        >
                            Next Lesson
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}