/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Box, Center, Code, Text, Popover, PopoverTrigger, 
  PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';
import Diff from 'react-stylable-diff';

const CodeExample = (props) => {

  const [code1, setCode1] = useState()  
  const [code2, setCode2] = useState()

  // returns tuple of original code and highlighted code to render
  const renderChangedCode = (d) => {
    const highlightedText = d.map((obj, index) => {
        const { lineIndex, isMod, modifiedLine, originalLine, reason} = obj;
        if (isMod) { 
            return (
            <div key={index}>
                <Popover key={index} placement="top-start">
                <PopoverTrigger>
                    <span key={index} style={{ backgroundColor: 'yellow', cursor: 'pointer' }}>
                    <Diff inputA={originalLine} inputB={modifiedLine}  />
                    </span>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Changes Made</PopoverHeader>
                    <PopoverBody>{reason}</PopoverBody>
                </PopoverContent>
                </Popover>
            </div>
            );
        } 
        else{
            return (
                <span key={index}>
                    <Diff inputA={originalLine} inputB={modifiedLine}  />
                </span>
            )
        }
    })

    const originalText = d.map((obj, index) => {
      const { lineIndex, isMod, modifiedLine, originalLine, reason} = obj;
       return (
        <span key={index}>
          <Diff inputA={originalLine} inputB={originalLine}  />
        </span>
       )
    })

    return [originalText, highlightedText];
}

useEffect(() =>{
  const [c1, c2] = renderChangedCode(props.diff)
  setCode1(c1)
  setCode2(c2)

}, [props.diff]);
 
  return (
    <Center width={"100vw"} overflowY="auto" display="flex" flexDirection="row">
      <Box
        p={0.5}
        m={2}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box display="flex" flexDirection="column">
          <Text mb={"2vh"}>Original Code</Text>
          <Code 
            width={"40vw"} 
            height={"20vw"}
            overflow="auto"
            fontSize="md" 
            borderRadius="md"
            border="2px"
            p={5} 
            textAlign="left" 
            className="language-javascript">
              {code1}
          </Code>
        </Box>
    </Box>

    <Box
      p={0.5}
      m={2}
      display={"flex"}
      justifyContent={"center"}
    >
        <Box display="flex" flexDirection="column">
          <Text mb={"2vh"}>Modified (Accessible) Code</Text>
          <Code 
            width={"40vw"} 
            height={"20vw"}
            overflow="auto"
            fontSize="md" 
            borderRadius="md"
            border="2px"
            p={5} 
            textAlign="left" 
            className="language-javascript">
              {code2}
          </Code>
        </Box>
      </Box>
    </Center>
  );
};

export default CodeExample;
