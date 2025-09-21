import React from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { Message } from '../../types';

interface ChatWindowProps {
  messages: Message[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onStartDemo: () => void;
  isTyping: boolean;
  isDisabled: boolean;
  showSnapshot: boolean;
  demoStarted: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  inputValue,
  onInputChange,
  onSendMessage,
  onStartDemo,
  isTyping,
  isDisabled,
  showSnapshot,
  demoStarted
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className={`bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl h-[750px] flex flex-col transition-all duration-700 relative ${
      !showSnapshot ? 'w-full max-w-2xl' : ''
    }`}>
      <ChatHeader onStartDemo={onStartDemo} demoStarted={demoStarted} />
      <div className="flex-1 overflow-hidden flex flex-col">
        <MessageList messages={messages} isTyping={isTyping} demoStarted={demoStarted} />
        <ChatInput
          inputValue={inputValue}
          onInputChange={onInputChange}
          onSendMessage={onSendMessage}
          onKeyPress={handleKeyPress}
          isTyping={isTyping}
          isDisabled={isDisabled}
          demoStarted={demoStarted}
        />
      </div>
    </div>
  );
};

export default ChatWindow;