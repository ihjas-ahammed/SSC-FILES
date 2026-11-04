import React, { useMemo } from 'react';
import { splitSentences } from '../utils/tts';
import MathRenderer from './MathRenderer';

interface Props {
  content: string;
  activeIdx: number;
  className?: string;
  highlightClassName?: string;
}

const SpokenText: React.FC<Props> = ({
  content,
  activeIdx,
  className,
  highlightClassName = 'bg-yellow-300/25 text-yellow-100 rounded-md px-0.5 -mx-0.5',
}) => {
  const sentences = useMemo(() => splitSentences(content), [content]);

  if (activeIdx < 0) {
    return <MathRenderer content={content} className={className} />;
  }

  return (
    <div className={className}>
      {sentences.map((s, i) => (
        <span
          key={i}
          className={i === activeIdx ? `transition-colors duration-200 ${highlightClassName}` : 'transition-colors duration-200'}
        >
          {s}{' '}
        </span>
      ))}
    </div>
  );
};

export default SpokenText;
