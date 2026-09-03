"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Loader2, Maximize2, Minimize2 } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "model";
  text: string;
};

const BotAvatar = ({ isAnimating }: { isAnimating: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl overflow-visible">
    <defs>
      <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
      <radialGradient id="thrusterGrad">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Thruster / Hover Aura */}
    <motion.ellipse cx="50" cy="92" rx="15" ry="4" fill="url(#thrusterGrad)"
      animate={isAnimating ? { scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] } : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: isAnimating ? 1 : 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ filter: "blur(2px)" }}
    />

    {/* Main Floating Group */}
    <motion.g 
      animate={isAnimating ? { y: [0, -5, 0] } : { y: [0, -3, 0], rotate: [0, -1, 1, 0] }}
      transition={{ duration: isAnimating ? 1.5 : 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Antenna Group */}
      <motion.g
        style={{ transformOrigin: "50px 20px" }}
        animate={isAnimating ? { rotate: [0, -15, 15, -10, 10, 0] } : { rotate: [0, -5, 5, 0] }}
        transition={{ duration: isAnimating ? 2 : 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="50" y1="20" x2="50" y2="4" stroke="#10b981" strokeWidth="3" />
        <motion.circle cx="50" cy="4" r="4.5" fill="#10b981" 
          animate={{ fill: ["#10b981", "#fbbf24", "#38bdf8", "#10b981"], scale: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Body */}
      <motion.path 
        d="M 30 50 Q 50 60 70 50 L 75 75 Q 50 95 25 75 Z" 
        fill="url(#bodyGrad)"
        animate={isAnimating ? { scaleX: [1, 1.05, 1] } : { scaleX: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Chest Core Pulse */}
      <motion.circle cx="50" cy="65" r="6" fill="#ffffff" opacity="0.8"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle cx="50" cy="65" r="3" fill="#38bdf8" />

      {/* Head Group */}
      <motion.g
        animate={isAnimating ? { rotate: [0, -8, 8, 0] } : { rotate: [0, 2, -2, 0] }}
        transition={{ duration: isAnimating ? 1.5 : 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50px 40px" }}
      >
        <motion.rect x="15" y="32" width="6" height="16" rx="3" fill="#0f172a" 
          animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.rect x="79" y="32" width="6" height="16" rx="3" fill="#0f172a" 
          animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <rect x="20" y="20" width="60" height="40" rx="20" fill="url(#headGrad)" />
        <rect x="25" y="30" width="50" height="20" rx="10" fill="#0f172a" />
        
        <motion.line x1="28" y1="32" x2="72" y2="32" stroke="#38bdf8" strokeWidth="1" opacity="0.6"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />

        <motion.circle cx="38" cy="40" r="4" fill="#38bdf8" 
          animate={isAnimating ? { scaleY: [1, 0.2, 1], scaleX: [1, 1.2, 1] } : { scaleY: [1, 0, 1, 1, 1], cx: [38, 38, 35, 41, 38] }}
          transition={isAnimating ? { duration: 1, repeat: Infinity } : { duration: 6, repeat: Infinity, times: [0, 0.05, 0.1, 0.5, 1] }}
        />
        <motion.circle cx="62" cy="40" r="4" fill="#38bdf8" 
          animate={isAnimating ? { scaleY: [1, 0.2, 1], scaleX: [1, 1.2, 1] } : { scaleY: [1, 0, 1, 1, 1], cx: [62, 62, 59, 65, 62] }}
          transition={isAnimating ? { duration: 1, repeat: Infinity } : { duration: 6, repeat: Infinity, times: [0, 0.05, 0.1, 0.5, 1] }}
        />

        <motion.rect
          x="44" y="45" width="12" height="3" rx="1.5" fill="#38bdf8"
          style={{ transformOrigin: "50px 46.5px" }}
          animate={isAnimating ? { scaleY: [1, 2.5, 1, 1.8, 1], scaleX: [1, 0.8, 1, 0.9, 1] } : { scaleX: [1, 1.2, 1] }}
          transition={isAnimating ? { duration: 0.6, repeat: Infinity, ease: "easeInOut" } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Arms */}
      <motion.path d="M 72 55 Q 85 60 80 75" fill="none" stroke="url(#bodyGrad)" strokeWidth="8" strokeLinecap="round" 
        style={{ transformOrigin: "72px 55px" }}
        animate={!isAnimating ? { rotate: [0, 8, -3, 0] } : { rotate: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path d="M 28 55 Q 15 60 20 75" fill="none" stroke="url(#bodyGrad)" strokeWidth="8" strokeLinecap="round"
        style={{ transformOrigin: "28px 55px" }}
        animate={!isAnimating ? { rotate: [0, -8, 3, 0] } : { rotate: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.g>
  </svg>
);

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isGreeting, setIsGreeting] = useState(false);
  const [greetingText, setGreetingText] = useState("Hello! 👋");
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "model",
      text: "Hi there! I'm your AI Assistant. How can I help you today?",
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        chatRef.current && 
        !chatRef.current.contains(target) &&
        !(target as Element).closest('[aria-label="Toggle AI Assistant"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ai-chat-history");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.length > 0) setMessages(parsed);
        } catch (e) {}
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ai-chat-history", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const hour = new Date().getHours();
    let text = "Hello! 👋";
    if (hour >= 5 && hour < 12) text = "Good morning! 👋";
    else if (hour >= 12 && hour < 17) text = "Good afternoon! 👋";
    else if (hour >= 17 && hour < 21) text = "Good evening! 👋";
    else text = "Good night! 👋";
    setGreetingText(text);

    const timer1 = setTimeout(() => setIsGreeting(true), 1500);
    const timer2 = setTimeout(() => setIsGreeting(false), 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleOpenClick = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setIsGreeting(true);
    setTimeout(() => {
      setIsGreeting(false);
      setIsOpen(true);
    }, 500);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", text: inputValue.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg.text,
          history: messages.map(m => ({ role: m.role, text: m.text })),
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");
      
      // Handle non-streaming JSON response from Next.js API
      const data = await response.json();
      const botMsgId = (Date.now() + 1).toString();

      setMessages((prev) => [
        ...prev,
        { id: botMsgId, role: "model", text: data.text }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "model", text: "Sorry, I'm having trouble connecting right now." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed z-[100000] bg-white dark:bg-slate-900 flex flex-col overflow-hidden shadow-2xl ${
              isFullScreen
                ? "inset-0 w-full h-full rounded-none"
                : "bottom-[85px] md:bottom-[90px] left-3 md:left-[30px] w-[300px] sm:w-[350px] border border-slate-200 dark:border-white/10 rounded-2xl"
            }`}
            style={{ 
              transformOrigin: "bottom left",
              ...(isFullScreen ? {} : { maxHeight: "calc(100vh - 140px)", height: "450px" })
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-4 text-white flex items-center justify-between shadow-md z-10 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 p-1">
                  <BotAvatar isAnimating={false} />
                </div>
                <span className="font-bold">AI Assistant</span>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setIsFullScreen(!isFullScreen)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                  {isFullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                <button onClick={() => { setIsOpen(false); setIsFullScreen(false); }} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-transparent dark:bg-slate-950/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-sm' 
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 rounded-bl-sm shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <Loader2 size={16} className="animate-spin text-blue-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 shrink-0">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-full pr-1 pl-4 py-1 border border-slate-200 dark:border-white/5">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 dark:text-slate-200 py-2"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[99999] flex flex-col items-center gap-1">
        <AnimatePresence>
          {isGreeting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-10 left-2 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-bold px-3 py-1.5 text-xs md:text-sm rounded-2xl rounded-bl-none shadow-lg border border-emerald-100 dark:border-emerald-900 whitespace-nowrap z-10"
            >
              {greetingText}
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          onClick={handleOpenClick}
          aria-label="Toggle AI Assistant"
          className="relative w-14 h-14 flex items-center justify-center hover:scale-110 active:scale-95 transition-all outline-none"
          animate={{ 
            filter: ["drop-shadow(0px 0px 8px rgba(16, 185, 129, 0.4))", "drop-shadow(0px 0px 16px rgba(59, 130, 246, 0.6))", "drop-shadow(0px 0px 8px rgba(16, 185, 129, 0.4))"],
            y: [0, -8, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full">
            <BotAvatar isAnimating={isGreeting} />
          </div>
        </motion.button>
      </div>
    </>
  );
};
