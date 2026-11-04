import React, { useEffect, useRef, useMemo } from 'react';
import { parse } from 'marked';
import '../styles/math-scroll.css';

interface Props {
  content: string;
  className?: string;
}

declare global {
  interface Window {
    MathJax: any;
  }
}

const MathRenderer: React.FC<Props> = ({ content, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse markdown while protecting LaTeX syntax
  const htmlContent = useMemo(() => {
    try {
      // 1. Tokenize Math
      const mathSegments: string[] =[];
      const placeholderPrefix = "MATH_SEGMENT_PLACEHOLDER_";
      
      const regex = /\$\$([\s\S]*?)\$\$|\$([\s\S]*?)\$|\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g;
      
      const textWithPlaceholders = content.replace(regex, (match) => {
        const index = mathSegments.length;
        mathSegments.push(match);
        return `${placeholderPrefix}${index}`;
      });

      // 2. Parse Markdown
      let parsedHtml = parse(textWithPlaceholders, { breaks: true, async: false }) as string;

      // 3. Restore Math
      const restoreRegex = new RegExp(`${placeholderPrefix}(\\d+)`, 'g');
      
      parsedHtml = parsedHtml.replace(restoreRegex, (match, id) => {
        const index = parseInt(id, 10);
        return mathSegments[index] || match;
      });

      return parsedHtml;
    } catch (e) {
      console.error("Error parsing markdown", e);
      return content;
    }
  }, [content]);

  useEffect(() => {
    if (containerRef.current && window.MathJax) {
      // Inject HTML
      containerRef.current.innerHTML = htmlContent;
      
      // Tell MathJax to process the new content
      window.MathJax.typesetPromise([containerRef.current])
        .catch((err: any) => console.error('MathJax typeset failed: ', err));
    }
  }, [htmlContent]);

  return (
    <div className={`math-scroll-container ${className || ''}`}>
      <div 
        ref={containerRef} 
        className="math-content text-lg leading-relaxed prose prose-slate max-w-none"
        style={{ overflowWrap: 'break-word' }}
      />
    </div>
  );
};

export default MathRenderer;