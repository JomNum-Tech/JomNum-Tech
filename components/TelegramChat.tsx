'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X } from 'lucide-react'
import MaintenanceModal from '@/components/MaintenanceModal'; 

export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai'; 
}

const TelegramChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState<boolean>(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() === '') return

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])
    setInputMessage('')

    try {
      setLoading(true)

      // Retry logic with exponential backoff
      let retries = 5
      let delay = 1000 // Start with 1 second

      while (retries > 0) {
        const response = await fetch('/api/chatgpt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: inputMessage }),
        })

        if (response.ok) {
          const data = await response.json()
          if (data && data.reply) {
            const aiMessage: Message = {
              id: Date.now() + 1,
              text: data.reply,
              sender: 'ai',
            }
            setMessages((prevMessages) => [...prevMessages, aiMessage])
            break // Exit loop on success
          } else {
            throw new Error('Invalid response from ChatGPT API')
          }
        } else if (response.status === 429) {
          console.warn('Rate limit exceeded. Retrying...')
          retries--
          await new Promise((resolve) => setTimeout(resolve, delay))
          delay *= 2 // Exponential backoff
        } else {
          throw new Error('Failed to fetch response from ChatGPT')
        }
      }

      if (retries === 0) {
        throw new Error('Maximum retries reached')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: Date.now() + 2,
        text: "Sorry, I couldn't process your request.",
        sender: 'ai',
      }
      setMessages((prevMessages) => [...prevMessages, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsMaintenanceOpen(true)} 
        className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label="Open Chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      </button>
      <MaintenanceModal 
        isOpen={isMaintenanceOpen} 
        onClose={() => setIsMaintenanceOpen(false)} 
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed right-8 bottom-16 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <h2 className="text-lg font-semibold dark:text-white">SpringOps-GPT</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                aria-label="Close chat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="max-w-[70%] p-3 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white">
                    Typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-700">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-600 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground p-2 rounded-r-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  aria-label="Send message"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default TelegramChat