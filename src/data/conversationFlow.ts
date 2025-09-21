import { Message, InvestmentSnapshot } from '../types';

export const conversationFlow: Omit<Message, 'id' | 'timestamp'>[] = [
  {
    sender: "user",
    text: "Can you fetch information from Salesforce and the website about the startup StartupXYZ?"
  },
  {
    sender: "bot",
    text: "From Salesforce: StartupXYZ has 3 pilot contracts totaling $120k. From the website: StartupXYZ is an AI workflow automation startup claiming ~25% efficiency improvement."
  },
  {
    sender: "bot",
    text: "Would you like me to create an investment snapshot for StartupXYZ based on this data?"
  },
  {
    sender: "user",
    text: "Yes, please create the investment snapshot."
  },
  {
    sender: "bot",
    text: "Perfect! I've generated a comprehensive investment snapshot for StartupXYZ. You can see the analysis in the panel on the right."
  },
  {
    sender: "user",
    text: "Great, can you also create a pitch deck for me?"
  },
  {
    sender: "bot",
    text: "Here's your deck:",
    link: "https://docs.google.com/presentation/d/1SampleDeckId/view"
  }
];

export const snapshotData: InvestmentSnapshot = {
  company_name: "StartupXYZ",
  one_line_thesis: "AI-driven workflow automation for enterprises with early pilot traction.",
  top_metrics: [
    { name: "Pilot contracts", value: "3 contracts, $120k total" },
    { name: "Efficiency improvement", value: "~25% (claimed)" }
  ],
  strengths: ["Early enterprise traction with paying pilots"],
  risks: ["Metrics are unverified; dependent on marketing claims"],
  recommendation: { verdict: "Follow", confidence: 60 }
};