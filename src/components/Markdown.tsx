import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

type Props = {
  content: string;
};

const Code = (props: any) => {
  const { children, className, node, ...rest } = props;
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

const Markdown = ({ content }: Props) => {
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
