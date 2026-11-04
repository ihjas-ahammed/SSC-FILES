import React from 'react';

interface Props {
  ready: number;
  total: number;
  className?: string;
}

const TtsLoadBar: React.FC<Props> = ({ ready, total, className }) => {
  if (total <= 0) return null;
  const pct = Math.max(0, Math.min(100, (ready / total) * 100));
  const isDone = ready >= total;
  return (
    <div className={`h-1 rounded-full bg-white/10 overflow-hidden ${className || ''}`}>
      <div
        className={`h-full transition-all duration-300 ${isDone ? 'bg-emerald-400/70' : 'bg-blue-400'}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

export default TtsLoadBar;
