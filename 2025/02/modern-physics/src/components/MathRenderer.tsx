import React, { useEffect, useRef, useMemo } from 'react';
import { parse } from 'marked';

interface Props {
  content: string;
  className?: string;
  inline?: boolean; // New prop to control rendering mode
}

declare global {
  interface Window {
    MathJax: any;
  }
}

const MathRenderer: React.FC<Props> = ({ content, className, inline = false }) => {
  const containerRef = useRef<HTMLDivElement | HTMLSpanElement>(null);

  // Parse markdown while protecting LaTeX syntax
  const htmlContent = useMemo(() => {
    try {
      // 1. Tokenize Math: Replace LaTeX patterns with placeholders
      const mathSegments: string[] = [];
      const placeholderPrefix = "MATH_SEGMENT_PLACEHOLDER_";
      
      const regex = /\$\$([\s\S]*?)\$\$|\$([\s\S]*?)\$|\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g;
      
      const textWithPlaceholders = content.replace(regex, (match) => {
        const index = mathSegments.length;
        mathSegments.push(match);
        return `${placeholderPrefix}${index}`;
      });

      // 2. Parse Markdown
      let parsedHtml = parse(textWithPlaceholders, { breaks: true, async: false }) as string;

      // 3. Handle Inline Mode (Strip <p> tags added by marked)
      if (inline) {
        // Remove the outer <p>...</p> if it exists (marked wraps simple text in p)
        parsedHtml = parsedHtml.replace(/^<p>([\s\S]*)<\/p>\n?$/, '$1');
      }

      // 4. Restore Math
      mathSegments.forEach((segment, i) => {
        parsedHtml = parsedHtml.replace(new RegExp(`${placeholderPrefix}${i}`, 'g'), segment);
      });

      return parsedHtml;
    } catch (e) {
      console.error("Error parsing markdown", e);
      return content; 
    }
  }, [content, inline]);

  useEffect(() => {
    if (containerRef.current && window.MathJax) {
      containerRef.current.innerHTML = htmlContent;
      window.MathJax.typesetPromise([containerRef.current])
        .catch((err: any) => console.error('MathJax typeset failed: ', err));
    }
  }, [htmlContent]);

  // Dynamically choose tag based on inline prop
  const Tag = inline ? 'span' : 'div';

  return (
    <Tag 
      ref={containerRef as any} 
      className={`math-content leading-relaxed ${!inline ? 'prose prose-slate max-w-none' : ''} ${className || ''}`}
      style={{ overflowWrap: 'break-word', display: inline ? 'inline' : 'block' }}
    />
  );
};

export default MathRenderer;