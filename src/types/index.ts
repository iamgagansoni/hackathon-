export interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
  link?: string;
  timestamp: Date;
}

export interface InvestmentSnapshot {
  company_name: string;
  one_line_thesis: string;
  top_metrics: Array<{
    name: string;
    value: string;
  }>;
  strengths: string[];
  risks: string[];
  recommendation: {
    verdict: string;
    confidence: number;
  };
}

export interface ChatState {
  messages: Message[];
  inputValue: string;
  currentMessageIndex: number;
  isTyping: boolean;
  showSnapshot: boolean;
  isDemoMode: boolean;
  demoStarted: boolean;
}