'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X } from 'lucide-react'
import { Message } from '@/types/TelegramChatType'

const TelegramChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to the bottom of the chat when new messages are added
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() === '') return

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
    }

    setMessages((prevMessages) => [...prevMessages, newMessage])
    setInputMessage('')

    // Send message to the server
    try {
      const response = await fetch('/api/telegram-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            chat: { id: '599696334' }, // Replace with actual user ID
            text: inputMessage,
          },
        }),
      })

      if (response.ok) {
        const data = await response.json()
        // Add bot's response to the chat
        const botResponse: Message = {
          id: Date.now(),
          text: data.message,
          sender: 'bot',
        }
        setMessages((prevMessages) => [...prevMessages, botResponse])
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label="Open Chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">SpringOps Chat</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close chat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
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