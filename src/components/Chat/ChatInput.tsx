import React from 'react';
import { Send, Lock } from 'lucide-react';

interface ChatInputProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isTyping: boolean;
  isDisabled: boolean;
  demoStarted: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  inputValue,
  onInputChange,
  onSendMessage,
  onKeyPress,
  isTyping,
  isDisabled,
  demoStarted
}) => {
  return (
    <div className="p-6 bg-white/50 backdrop-blur-sm rounded-b-2xl border-t border-gray-200/50">
      <div className="flex space-x-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={onKeyPress}
          className="flex-1 border-2 border-gray-200/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/70 backdrop-blur-sm placeholder-gray-400 transition-all duration-300 disabled:opacity-50"
          placeholder={demoStarted ? "Type your message..." : "Start demo to begin chatting..."}
          disabled={isTyping || isDisabled || !demoStarted}
        />
        <button
          onClick={onSendMessage}
          disabled={!inputValue.trim() || isTyping || isDisabled || !demoStarted}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-xl hover:from-indigo-600 hover:to-purple-600 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {demoStarted ? <Send className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
        </button>
      </div>
      
      {!demoStarted && (
        <p className="text-xs text-gray-500 mt-2 text-center flex items-center justify-center">
          <Lock className="w-3 h-3 mr-1" />
          Demo mode required to start conversation
        </p>
      )}
    </div>
  );
};

export default ChatInput;