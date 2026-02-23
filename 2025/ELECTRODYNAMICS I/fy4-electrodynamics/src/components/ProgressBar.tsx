import React from 'react';

interface Props {
  percentage: number;
  color?: string;
}

const ProgressBar: React.FC<Props> = ({ percentage, color = 'bg-duo-green' }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div 
        className={`${color} h-4 rounded-full transition-all duration-500 ease-out`} 
        style={{ width: `${Math.max(5, Math.min(100, percentage))}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
