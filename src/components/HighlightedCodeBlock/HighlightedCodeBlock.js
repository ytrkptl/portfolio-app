import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', js);

const HighlightedCodeBlock = ({ showLineNumbers = false, codeString }) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={dracula}
      wrapLines={true}
      showLineNumbers={showLineNumbers}
      lineNumberStyle={{ minWidth: 'unset', paddingRight: '1.2em' }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default HighlightedCodeBlock;
