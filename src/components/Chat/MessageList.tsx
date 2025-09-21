import React, { useEffect, useRef } from 'react';
import { Bot, MessageSquare } from 'lucide-react';
import { Message as MessageType } from '../../types';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

interface MessageListProps {
  messages: MessageType[];
  isTyping: boolean;
  demoStarted: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isTyping, demoStarted }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current && containerRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "end"
      });
    }
  };

  useEffect(() => {
    // Only scroll when there are messages, not on initial load
    if (messages.length > 0) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isTyping]);

  return (
    <div 
      ref={containerRef}
      className="flex-1 overflow-y-auto px-6 py-4 space-y-1 scroll-smooth"
      style={{ maxHeight: 'calc(100% - 140px)' }} // Account for header and input
    >
      {messages.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          <div className="mb-6 relative">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center shadow-lg">
              <Bot className="w-10 h-10 text-indigo-600" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <MessageSquare className="w-3 h-3 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-700 mb-3">Ready to Analyze Startups</h3>
          <p className="text-gray-500 mb-2 max-w-md mx-auto">
            I can fetch data from Salesforce and websites to provide comprehensive startup analysis
          </p>
          {!demoStarted && (
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl max-w-sm mx-auto">
              <p className="text-amber-800 text-sm font-medium">
                👆 Click "Start Demo" to begin the conversation
              </p>
            </div>
          )}
        </div>
      )}

      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}

      {isTyping && <TypingIndicator />}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;