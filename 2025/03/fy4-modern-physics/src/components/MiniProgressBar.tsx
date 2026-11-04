import React from 'react';
import '../styles/progress.css';

interface Props {
  percentage: number;
  height?: string;
  className?: string;
  showText?: boolean;
}

const MiniProgressBar: React.FC<Props> = ({ 
  percentage, 
  height = 'h-2', 
  className = '',
  showText = true 
}) => {
  const safePercentage = Math.max(0, Math.min(100, percentage));
  const isCompleted = safePercentage === 100;

  return (
    <div className={`w-full ${className}`}>
      {showText && (
        <div className="flex justify-between items-end mb-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Progress</span>
          <span className={`text-xs font-black ${isCompleted ? 'text-amber-400' : 'text-slate-200'}`}>
            {safePercentage}%
          </span>
        </div>
      )}
      <div className={`w-full ${height} rounded-full mini-progress-bg`}>
        <div 
          className={`mini-progress-fill ${isCompleted ? 'completed' : ''}`}
          style={{ width: `${safePercentage}%` }}
        />
      </div>
    </div>
  );
};

export default MiniProgressBar;