import React from 'react';
import { BarChart3 } from 'lucide-react';

interface Metric {
  name: string;
  value: string;
}

interface MetricsSectionProps {
  metrics: Metric[];
}

const MetricsSection: React.FC<MetricsSectionProps> = ({ metrics }) => {
  return (
    <div className="mb-8">
      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <BarChart3 className="w-5 h-5 text-indigo-600 mr-3" />
        Key Metrics
        <div className="w-2 h-2 bg-indigo-600 rounded-full ml-3"></div>
      </h4>
      <div className="grid gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="group bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl p-4 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-sm font-semibold text-gray-600 mb-1">{metric.name}</div>
            <div className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
              {metric.value}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1 rounded-full transition-all duration-1000 ease-out" 
                   style={{width: `${Math.min(80 + index * 10, 100)}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MetricsSection;