/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeEditor = (props) => {
  const [codeDiff, setCodeDiff] = useState(props.diff);

  const handleChange = (event) => {
    // setCode(event.target.textContent);
  };

  // takes new code and list of diff lines and highlights areas that changed 
  const renderHighlightedCode = (diff) => {
    console.log("diff parameter: ", diff)
    const renderLine = ({ originalLine, modifiedLine }, index) => {
      const parts = [];
  
      let start = 0;
      let end = 0;
  
      // Iterate over each character in the line
      while (end < originalLine.length) {
        // Find the first character where the lines differ
        while (end < originalLine.length && originalLine[end] === modifiedLine[end]) {
          end++;
        }
  
        // If there's a change, add it to the parts array
        if (start !== end) {
          parts.push(originalLine.slice(start, end));
        }
  
        // Move to the next character
        start = end;
  
        // Find the end of the changed part
        while (end < originalLine.length && originalLine[end] !== modifiedLine[end]) {
          end++;
        }
  
        // If there's a change, add it to the parts array with a different color
        if (start !== end) {
          parts.push(
            `<span key={end} style={{ backgroundColor: 'yellow' }}>
              {modifiedLine.slice(start, end)}
            </span>`
          );
        }
  
        // Move to the next character
        start = end;
      }
  
      // Add the remaining part of the line
      parts.push(originalLine.slice(start));
  
      return parts;
    };
  
    return (
    
        diff.map((line, index) => renderLine(line, index))
      
    );
  };

//   <div
//   contentEditable
//   onBlur={handleChange}
//   style={{ whiteSpace: 'pre-wrap', outline: 'none' }}
// >


  return (
    <Box borderWidth="1px" borderRadius="md" p={4} overflow="hidden">
      <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
         
          {"<p>HTML links are defined with the a tag.</p>"}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeEditor;
