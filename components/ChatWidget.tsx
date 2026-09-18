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
    if (m.content) return m.content;
    if (m.parts && m.parts.length > 0) {
      const textPart = m.parts.find((p: any) => p.type === 'text');
      if (textPart) return textPart.text;
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

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:right-6 w-[350px] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden z-50 font-sans border border-gray-200"
          >
            {/* Header */}
            <div className="bg-black p-4 flex items-center justify-between z-10 shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image src="/mahin.jpg" alt="Mahin Ahmad" width={40} height={40} className="rounded-full object-cover object-[center_30%] w-10 h-10 border-2 border-black shadow-sm" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display font-bold text-white tracking-tight text-[15px] leading-none mb-1">Mahin Ahmad</h3>
                  <p className="text-[11px] text-gray-400 font-medium leading-none">Replies typically in minutes</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors rounded-full p-1 hover:bg-gray-800">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-[#F9FAFB]">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.role === 'assistant' && (
                    <Image src="/mahin.jpg" alt="Avatar" width={28} height={28} className="rounded-full mr-2 self-end mb-1 w-7 h-7 object-cover object-[center_30%]" />
                  )}
                  <div className={`max-w-[85%] px-4 py-3 text-[13px] leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-[#E11D48] text-white rounded-2xl rounded-br-sm' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-sm whitespace-pre-wrap'
                  }`}>
                    {getMessageText(m)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <Image src="/mahin.jpg" alt="Avatar" width={28} height={28} className="rounded-full mr-2 self-end mb-1 w-7 h-7 object-cover object-[center_30%]" />
                  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type in English / বাংলা..."
                  className="w-full bg-[#F3F4F6] text-black border-transparent rounded-full py-3 pl-5 pr-14 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-300 focus:border-gray-300 text-[13px] transition-all placeholder-gray-500"
                />
                <button
                  type="submit"
                  disabled={!input?.trim() || isLoading}
                  className="absolute right-1.5 p-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
                >
                  <Send size={15} className="ml-0.5" />
                </button>
              </form>
              <div className="text-center mt-3">
                <span className="text-[9px] font-medium tracking-wide text-gray-400 uppercase">Powered by AI</span>
              </div>
            </div>
          </motion.div>
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
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[60px] h-[60px] bg-black rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center justify-center text-white z-50 hover:scale-105 transition-transform border border-gray-800 group"
          >
            <Image src="/mahin.jpg" alt="Chat with us" width={60} height={60} className="rounded-full object-cover object-[center_30%] w-full h-full" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
