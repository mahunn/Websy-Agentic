"use client";

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { MessageCircle, X, Send } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  
  const { messages, setMessages, sendMessage, status } = useChat();
  
  const isLoading = status === 'submitted' || status === 'streaming';
  
  const getMessageText = (m: any) => {
    if (typeof m.content === 'string' && m.content) return m.content;
    if (Array.isArray(m.parts) && m.parts.length > 0) {
      return m.parts
        .filter((p: any) => p.type === 'text' && p.text)
        .map((p: any) => p.text)
        .join('');
    }
    return '';
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    // Send the message via useChat API using the new v4 signature
    sendMessage({ text: input });
    setInput('');
  };
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Load from local storage or set initial message
  useEffect(() => {
    const savedMessages = localStorage.getItem('websy-chat-history');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        if (parsed.length > 0) {
          setMessages(parsed);
          return;
        }
      } catch (e) {}
    }
    
    // If no history, set welcome message
    setMessages([
      {
        id: 'welcome-message',
        role: 'assistant',
        parts: [{ type: 'text', text: 'Hi there! I am Mahin Ahmad from Team Websy. How can I help you today?' }]
      } as any
    ]);
  }, [setMessages]);

  // Save to local storage
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('websy-chat-history', JSON.stringify(messages));
    }
  }, [messages]);

  // Prevent background scrolling on mobile when chat is open
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key to close chat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop blur overlay */}
            <motion.div
              key="chat-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 sm:hidden"
              aria-label="Close chat overlay"
            />

            {/* Chatbox Window */}
            <motion.div
              key="chat-window"
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-16 right-4 sm:bottom-20 sm:right-6 w-[calc(100vw-2rem)] max-w-[310px] sm:w-[350px] sm:max-w-[350px] h-[440px] max-h-[75vh] sm:h-[500px] sm:max-h-[80vh] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden z-50 font-sans border border-gray-200"
            >
              {/* Header */}
              <div className="bg-black p-3.5 sm:p-4 flex items-center justify-between z-10 shadow-md">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="relative">
                    <Image src="/mahin.jpg" alt="Mahin Ahmad" width={40} height={40} className="rounded-full object-cover object-[center_30%] w-9 h-9 sm:w-10 sm:h-10 border-2 border-black shadow-sm" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-display font-bold text-white tracking-tight text-[14px] sm:text-[15px] leading-none mb-1">Mahin Ahmad</h3>
                    <p className="text-[10.5px] sm:text-[11px] text-gray-400 font-medium leading-none">Replies typically in minutes</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-gray-400 hover:text-white transition-colors rounded-full p-1 sm:p-1.5 hover:bg-gray-800"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3 sm:space-y-4 bg-[#F9FAFB]">
                {messages.map((m) => {
                  const text = getMessageText(m);
                  if (!text && m.role === 'assistant') return null;
                  return (
                    <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {m.role === 'assistant' && (
                        <Image src="/mahin.jpg" alt="Avatar" width={28} height={28} className="rounded-full mr-1.5 sm:mr-2 self-end mb-1 w-6 h-6 sm:w-7 sm:h-7 object-cover object-[center_30%]" />
                      )}
                      <div className={`max-w-[85%] px-3.5 py-2.5 sm:px-4 sm:py-3 text-[12.5px] sm:text-[13px] leading-relaxed shadow-sm ${
                        m.role === 'user' 
                          ? 'bg-[#E11D48] text-white rounded-2xl rounded-br-sm' 
                          : 'bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-sm whitespace-pre-wrap'
                      }`}>
                        {text}
                      </div>
                    </div>
                  );
                })}
                {isLoading && (
                  <div className="flex justify-start">
                    <Image src="/mahin.jpg" alt="Avatar" width={28} height={28} className="rounded-full mr-1.5 sm:mr-2 self-end mb-1 w-6 h-6 sm:w-7 sm:h-7 object-cover object-[center_30%]" />
                    <div className="bg-white border border-gray-200 shadow-sm rounded-2xl rounded-bl-sm px-3.5 py-2 sm:px-4 sm:py-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 sm:p-4 bg-white border-t border-gray-200">
                <form onSubmit={handleSubmit} className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type in English / বাংলা..."
                    className="w-full bg-[#F3F4F6] text-black border-transparent rounded-full py-2.5 sm:py-3 pl-4 sm:pl-5 pr-11 sm:pr-14 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-300 focus:border-gray-300 text-[12.5px] sm:text-[13px] transition-all placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    disabled={!input?.trim() || isLoading}
                    className="absolute right-1 sm:right-1.5 p-1.5 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
                    aria-label="Send message"
                  >
                    <Send size={14} className="ml-0.5" />
                  </button>
                </form>
                <div className="text-center mt-2 sm:mt-3">
                  <span className="text-[8.5px] sm:text-[9px] font-medium tracking-wide text-gray-400 uppercase">Powered by AI</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] bg-black rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center justify-center text-white z-50 hover:scale-105 transition-transform border border-gray-800 group"
          >
            <Image src="/mahin.jpg" alt="Chat with us" width={60} height={60} className="rounded-full object-cover object-[center_30%] w-full h-full" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
