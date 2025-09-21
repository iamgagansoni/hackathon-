import React from 'react';
import { Target, Star } from 'lucide-react';

interface RecommendationSectionProps {
  recommendation: {
    verdict: string;
    confidence: number;
  };
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({ recommendation }) => {
  const getRecommendationColor = (verdict: string) => {
    switch (verdict.toLowerCase()) {
      case "follow": return "from-yellow-400 to-orange-500";
      case "invest": return "from-green-400 to-emerald-500";
      case "pass": return "from-red-400 to-rose-500";
      default: return "from-gray-400 to-gray-500";
    }
  };

  const getRecommendationBg = (verdict: string) => {
    switch (verdict.toLowerCase()) {
      case "follow": return "from-yellow-50 to-orange-50";
      case "invest": return "from-green-50 to-emerald-50";
      case "pass": return "from-red-50 to-rose-50";
      default: return "from-gray-50 to-gray-100";
    }
  };

  const getTextColor = (verdict: string) => {
    switch (verdict.toLowerCase()) {
      case "follow": return "text-yellow-800";
      case "invest": return "text-green-800";
      case "pass": return "text-red-800";
      default: return "text-gray-800";
    }
  };

  return (
    <div className="border-t border-gray-200/50 pt-8">
      <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <Target className="w-5 h-5 text-indigo-600 mr-3" />
        Investment Recommendation
      </h4>
      
      <div className={`bg-gradient-to-r ${getRecommendationBg(recommendation.verdict)} rounded-2xl p-6 border-2 border-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300`}>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 bg-gradient-to-r ${getRecommendationColor(recommendation.verdict)} rounded-xl flex items-center justify-center shadow-lg`}>
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className={`text-2xl font-bold ${getTextColor(recommendation.verdict)}`}>
                  {recommendation.verdict}
                </div>
                <div className="text-sm font-medium text-gray-600">Investment Decision</div>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className={`text-4xl font-bold ${getTextColor(recommendation.verdict)}`}>
              {recommendation.confidence}%
            </div>
            <div className="text-sm font-medium text-gray-600">Confidence Level</div>
            
            {/* Confidence meter */}
            <div className="w-24 bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className={`bg-gradient-to-r ${getRecommendationColor(recommendation.verdict)} h-2 rounded-full transition-all duration-1000 ease-out`}
                style={{width: `${recommendation.confidence}%`}}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecommendationSection;