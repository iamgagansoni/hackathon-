import React from 'react';
import { AlertTriangle, AlertCircle } from 'lucide-react';

interface RisksSectionProps {
  risks: string[];
}

const RisksSection: React.FC<RisksSectionProps> = ({ risks }) => {
  return (
    <div className="mb-8">
      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
        Risk Factors
      </h4>
      <div className="space-y-3">
        {risks.map((risk, index) => (
          <div key={index} className="group bg-gradient-to-r from-red-50 to-orange-50/50 border border-red-200/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-800 font-medium leading-relaxed">{risk}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RisksSection;