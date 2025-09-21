import React from 'react';
import { User, Bot, ExternalLink } from 'lucide-react';
import { Message as MessageType } from '../../types';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
      <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
        isUser ? 'flex-row-reverse space-x-reverse' : ''
      }`}>
        {/* Avatar */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
          isUser 
            ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
            : 'bg-gradient-to-r from-gray-600 to-gray-700'
        }`}>
          {isUser ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
        </div>

        {/* Message Bubble */}
        <div className={`px-5 py-4 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
          isUser
            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-br-md'
            : 'bg-white/90 text-gray-800 rounded-bl-md border border-gray-200/50'
        }`}>
          <p className="text-sm leading-relaxed">{message.text}</p>
          {message.link && (
            <a
              href={message.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium underline decoration-2 underline-offset-2 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Google Slides
            </a>
          )}
          <div className={`text-xs mt-2 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;