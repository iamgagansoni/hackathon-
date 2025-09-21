import { useState, useCallback } from 'react';
import { Message, ChatState } from '../types';
import { conversationFlow } from '../data/conversationFlow';

export const useChatbot = () => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    inputValue: "",
    currentMessageIndex: 0,
    isTyping: false,
    showSnapshot: false,
    isDemoMode: false,
    demoStarted: false,
  });

  const addMessage = useCallback((message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now() + Math.random(),
      timestamp: new Date()
    };
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  }, []);

  const setInputValue = useCallback((value: string) => {
    setState(prev => ({ ...prev, inputValue: value }));
  }, []);

  const setIsTyping = useCallback((isTyping: boolean) => {
    setState(prev => ({ ...prev, isTyping }));
  }, []);

  const setShowSnapshot = useCallback((show: boolean) => {
    setState(prev => ({ ...prev, showSnapshot: show }));
  }, []);

  const startDemo = useCallback(() => {
    setState(prev => ({
      ...prev,
      messages: [],
      currentMessageIndex: 0,
      showSnapshot: false,
      isDemoMode: true,
      demoStarted: true,
      inputValue: "Can you fetch information from Salesforce and the website about the startup StartupXYZ?"
    }));
  }, []);

  const handleSendMessage = useCallback(() => {
    if (!state.inputValue.trim() || state.currentMessageIndex >= conversationFlow.length || !state.demoStarted) return;

    const currentMessage = conversationFlow[state.currentMessageIndex];
    if (currentMessage.sender === "user") {
      addMessage({
        sender: "user",
        text: state.inputValue
      });
      
      setState(prev => ({
        ...prev,
        inputValue: "",
        currentMessageIndex: prev.currentMessageIndex + 1
      }));

      // Handle bot responses
      let botMessageCount = 0;
      let nextIndex = state.currentMessageIndex + 1;
      
      while (nextIndex + botMessageCount < conversationFlow.length && 
             conversationFlow[nextIndex + botMessageCount].sender === "bot") {
        botMessageCount++;
      }

      for (let i = 0; i < botMessageCount; i++) {
        const botMessage = conversationFlow[nextIndex + i];
        const delay = (i + 1) * 1500;
        
        setTimeout(() => setIsTyping(true), delay - 200);
        
        setTimeout(() => {
          setIsTyping(false);
          addMessage(botMessage);
          
          if (nextIndex + i === 4) {
            setTimeout(() => setShowSnapshot(true), 800);
          }
          
          if (i === botMessageCount - 1) {
            const userMsgIndex = nextIndex + botMessageCount;
            setState(prev => ({ ...prev, currentMessageIndex: userMsgIndex }));
            
            if (userMsgIndex < conversationFlow.length && 
                conversationFlow[userMsgIndex].sender === "user") {
              setTimeout(() => {
                setInputValue(conversationFlow[userMsgIndex].text);
              }, 1000);
            }
          }
        }, delay);
      }
    }
  }, [state.inputValue, state.currentMessageIndex, state.demoStarted, addMessage, setIsTyping, setShowSnapshot, setInputValue]);

  return {
    ...state,
    setInputValue,
    startDemo,
    handleSendMessage,
  };
};