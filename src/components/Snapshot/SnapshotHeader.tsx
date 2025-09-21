import React from 'react';
import { TrendingUp, Sparkles } from 'lucide-react';

interface SnapshotHeaderProps {
  companyName: string;
  thesis: string;
}

const SnapshotHeader: React.FC<SnapshotHeaderProps> = ({ companyName, thesis }) => {
  return (
    <div className="relative border-b border-gray-200/50 pb-6 mb-8">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Investment Snapshot
          </h2>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Sparkles className="w-4 h-4" />
            <span>AI-Generated Analysis</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-3xl font-bold text-gray-800">{companyName}</h3>
        <p className="text-lg text-gray-600 italic leading-relaxed">{thesis}</p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-50 -translate-y-2 translate-x-2"></div>
    </div>
  );
};
export default SnapshotHeader;