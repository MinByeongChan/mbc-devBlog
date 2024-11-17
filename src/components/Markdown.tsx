import React from 'react';
import ReactMarkdown, { ExtraProps } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface MarkdownProps {
  content: string;
}

const Code = ({
  children,
  className,
  ...rest
}: React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & ExtraProps) => {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter PreTag="div" language={match[1]}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};

const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      components={{
        code: Code,
      }}>
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
