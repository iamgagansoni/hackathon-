// src/App.tsx

import React from 'react';
import { Sparkles } from 'lucide-react';
import MainLayout from './components/Layout/MainLayout';
import ChatWindow from './components/Chat/ChatWindow';
import InvestmentSnapshot from './components/Snapshot/InvestmentSnapshot';
import { useChatbot } from './hooks/useChatbot';
import { snapshotData } from './data/conversationFlow';
import './App.css';

function App() {
  const {
    messages,
    inputValue,
    currentMessageIndex,
    isTyping,
    showSnapshot,
    demoStarted,
    setInputValue,
    startDemo,
    handleSendMessage,
  } = useChatbot();

  const isDisabled = currentMessageIndex >= 7; // Adjust based on conversation length

  return (
    <div className="relative">
      <MainLayout showSnapshot={showSnapshot}>
        <ChatWindow
          messages={messages}
          inputValue={inputValue}
          onInputChange={setInputValue}
          onSendMessage={handleSendMessage}
          onStartDemo={startDemo}
          isTyping={isTyping}
          isDisabled={isDisabled}
          showSnapshot={showSnapshot}
          demoStarted={demoStarted}
        />
        
        {showSnapshot && (
          <InvestmentSnapshot data={snapshotData} />
        )}
      </MainLayout>

      {/* Floating Start Demo Button - Only show when demo hasn't started */}
      {!demoStarted && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={startDemo}
            className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center space-x-3 animate-pulse hover:animate-none"
          >
            <Sparkles className="w-6 h-6 group-hover:animate-spin" />
            <span className="font-bold text-lg">Start Demo</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;