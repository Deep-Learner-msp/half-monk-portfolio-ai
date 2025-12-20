import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  highlights?: number[];
  annotations?: {
    line: number;
    text: string;
  }[];
}

export const CodeBlock = ({ code, language, filename, highlights = [], annotations = [] }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const customStyle = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: 'transparent',
      margin: 0,
      padding: '1rem',
    },
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      background: 'transparent',
    },
  };

  return (
    <div className="my-6 rounded-lg border border-gray-700/50 bg-gray-900/60 overflow-hidden">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700/50 bg-gray-800/40">
          <span className="text-sm text-gray-400 font-mono">{filename}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      <div className="relative">
        <SyntaxHighlighter
          language={language}
          style={customStyle}
          customStyle={{
            background: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
          showLineNumbers
          lineNumberStyle={{
            minWidth: '3em',
            paddingRight: '1em',
            color: '#6B7280',
            textAlign: 'right',
            userSelect: 'none',
          }}
          wrapLines
          lineProps={(lineNumber) => {
            const style: any = { display: 'block' };
            if (highlights.includes(lineNumber)) {
              style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
              style.borderLeft = '3px solid rgb(59, 130, 246)';
              style.paddingLeft = '0.5rem';
            }
            return { style };
          }}
        >
          {code}
        </SyntaxHighlighter>

        {/* Annotations */}
        {annotations.map((annotation, index) => (
          <div
            key={index}
            className="absolute right-4 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs px-2 py-1 rounded"
            style={{ top: `${annotation.line * 1.5 + 0.5}rem` }}
          >
            {annotation.text}
          </div>
        ))}
      </div>
    </div>
  );
};
