import React from 'react';
import { InvestmentSnapshot as SnapshotType } from '../../types';
import SnapshotHeader from './SnapshotHeader';
import MetricsSection from './MetricsSection';
import StrengthsSection from './StrengthsSection';
import RisksSection from './RisksSection';
import RecommendationSection from './RecommendationSection';

interface InvestmentSnapshotProps {
  data: SnapshotType;
}

const InvestmentSnapshot: React.FC<InvestmentSnapshotProps> = ({ data }) => {
  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 h-fit animate-in slide-in-from-right duration-700">
      <SnapshotHeader 
        companyName={data.company_name} 
        thesis={data.one_line_thesis} 
      />
      <MetricsSection metrics={data.top_metrics} />
      <StrengthsSection strengths={data.strengths} />
      <RisksSection risks={data.risks} />
      <RecommendationSection recommendation={data.recommendation} />
    </div>
  );
};

export default InvestmentSnapshot;