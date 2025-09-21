import React from 'react';
import { CheckCircle, TrendingUp } from 'lucide-react';

interface StrengthsSectionProps {
  strengths: string[];
}

const StrengthsSection: React.FC<StrengthsSectionProps> = ({ strengths }) => {
  return (
    <div className="mb-8">
      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
        Strengths
      </h4>
      <div className="space-y-3">
        {strengths.map((strength, index) => (
          <div key={index} className="group bg-gradient-to-r from-green-50 to-emerald-50/50 border border-green-200/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-800 font-medium leading-relaxed">{strength}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StrengthsSection;