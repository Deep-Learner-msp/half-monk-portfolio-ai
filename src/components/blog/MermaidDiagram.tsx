import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  caption?: string;
}

export const MermaidDiagram = ({ chart, caption }: MermaidDiagramProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#3B82F6',
        primaryTextColor: '#E5E7EB',
        primaryBorderColor: '#60A5FA',
        lineColor: '#6B7280',
        secondaryColor: '#1F2937',
        tertiaryColor: '#111827',
        background: '#0F1419',
        mainBkg: '#1F2937',
        secondBkg: '#111827',
        fontFamily: 'ui-monospace, monospace',
      },
    });

    if (elementRef.current) {
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      mermaid.render(id, chart).then(({ svg }) => {
        if (elementRef.current) {
          elementRef.current.innerHTML = svg;
        }
      });
    }
  }, [chart]);

  return (
    <div className="my-8">
      <div className="rounded-lg border border-gray-700/50 bg-gray-900/60 p-6 overflow-x-auto">
        <div ref={elementRef} className="flex justify-center" />
      </div>
      {caption && (
        <p className="text-center text-sm text-gray-400 mt-2 italic">{caption}</p>
      )}
    </div>
  );
};
