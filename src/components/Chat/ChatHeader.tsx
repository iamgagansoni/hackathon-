import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

interface ChatHeaderProps {
  onStartDemo: () => void;
  demoStarted: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onStartDemo, demoStarted }) => {
  return (
    <div className="sticky top-0 z-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white p-6 rounded-t-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <Bot className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Investment Analyst AI</h2>
              <p className="text-indigo-100 text-sm">Powered by Advanced Analytics</p>
            </div>
          </div>
          <button
            onClick={onStartDemo}
            className="group flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/20"
          >
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            <span className="font-semibold text-sm">{demoStarted ? 'Restart Demo' : 'Start Demo'}</span>
          </button>
        </div>
        <p className="text-indigo-100/80 text-sm">
          Get instant startup insights from Salesforce data and web intelligence
        </p>
      </div>
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"></div>
    </div>
  );
};
export default ChatHeader