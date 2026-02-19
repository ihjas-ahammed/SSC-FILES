import React, { useEffect, useRef, useMemo } from 'react';
import { parse } from 'marked';

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
      // 1. Tokenize Math: Replace LaTeX patterns with placeholders to prevent Markdown parser from mangling them
      const mathSegments: string[] = [];
      const placeholderPrefix = "MATH_SEGMENT_PLACEHOLDER_";
      
      // Matches $...$, $$...$$, \[...\], \(...\)
      // Note: We use a non-greedy match for content inside delimiters
      const regex = /\$\$([\s\S]*?)\$\$|\$([\s\S]*?)\$|\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g;
      

      
      const textWithPlaceholders = content.replace(regex, (match) => {
        const index = mathSegments.length;
        mathSegments.push(match);
        return `${placeholderPrefix}${index}`;
      });

    

      // 2. Parse Markdown
      // Convert line breaks to <br> if needed, though markdown paragraphs usually handle this.
      // We enable 'breaks: true' to treat single newlines as <br> (GitHub flavor-ish) which is good for this app's data content.
      let parsedHtml = parse(textWithPlaceholders, { breaks: true, async: false }) as string;

      // 3. Restore Math
      mathSegments.forEach((segment, i) => {
        // Use a global replace in case the placeholder appears multiple times (unlikely but safe)
        parsedHtml = parsedHtml.replace(new RegExp(`${placeholderPrefix}${i}`, 'g'), segment);
      });



        

      return parsedHtml;
    } catch (e) {
      console.error("Error parsing markdown", e);
      return content; // Fallback to raw content
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
    <div 
      ref={containerRef} 
      className={`math-content text-lg leading-relaxed prose prose-slate max-w-none ${className || ''}`}
      // 'prose' class comes from tailwind typography plugin usually, but we haven't included it.
      // We'll rely on base styles, but adding 'prose' is a good habit if we had the plugin.
      // Since we don't have typography plugin in the index.html setup, we rely on standard styling.
      style={{  }}
    />
  );
};

export default MathRenderer;