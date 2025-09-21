import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start mb-6">
      <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 shadow-lg">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div className="px-5 py-4 rounded-2xl bg-white/90 backdrop-blur-sm rounded-bl-md shadow-lg border border-gray-200/50">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TypingIndicator;