import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdSend } from 'react-icons/io';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { initializeThread, processMessage } from '../../openai/openaiService';


const ASSISTANT_ID = import.meta.env.VITE_ASSISTANT_ID;


const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hello! I'm your My Field Service assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [hasUnread, setHasUnread] = useState(true);


  useEffect(() => {
    const initChat = async () => {
      try {
        await initializeThread();
      } catch (error) {
        console.error('Error initializing chat:', error);
      }
    };


    if (isOpen) {
      initChat();
    }
  }, [isOpen]);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const handleSend = async () => {
    if (!input.trim() || isLoading) return;


    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);


    try {
      const response = await processMessage(input, ASSISTANT_ID);
      const botMessage = { text: response, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        text: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  const handleChatOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };


  return (
    <div className="fixed bottom-5 right-5 z-50 font-fontPoppins">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] rounded-xl bg-white shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-xl bg-palletteColor1 p-4 text-white">
              <span className="font-fontOpen font-semibold">Chat Support</span>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-1 transition-colors hover:bg-white/20">
                <AiOutlineClose size={20} />
              </button>
            </div>


            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] whitespace-pre-line rounded-xl px-4 py-2 ${
                      message.isUser ? 'bg-palletteColor1 text-white' : 'bg-palletteColor10 text-palletteColor5'
                    }`}>
                    {message.text.split('**').map((part, i) => (
                      <span key={i} className={i % 2 === 1 ? 'font-bold' : ''}>
                        {part.split('\n').map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                            {lineIndex > 0 && <br />}
                            {line}
                          </React.Fragment>
                        ))}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-xl bg-palletteColor10 px-4 py-2 text-palletteColor5">
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      Typing...
                    </motion.div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>


            {/* Input */}
            <div className="border-t border-palletteColor12 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-palletteColor12 px-4 py-2 outline-none focus:border-palletteColor1"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-palletteColor1 text-white transition-colors hover:bg-opacity-90 disabled:bg-opacity-50">
                  <IoMdSend size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Updated Chat Button with notification */}
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleChatOpen}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-palletteColor1 text-white shadow-lg">
          <BsChatDots size={24} />
        </motion.button>


        {/* Notification Animation */}
        {!isOpen && hasUnread && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-500">
            <motion.div
              className="absolute inset-0 rounded-full bg-red-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};


export default ChatWidget;
