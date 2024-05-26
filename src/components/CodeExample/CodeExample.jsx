/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeExamples = (props) => {
  const [codeDiff, setCodeDiff] = useState(props.diff);


  return (
    <div>test</div>
  );
};

export default CodeExamples;
