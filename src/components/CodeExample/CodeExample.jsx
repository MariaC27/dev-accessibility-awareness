/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Box, Center, Code, Text } from '@chakra-ui/react';

const CodeExample = (props) => {
 
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
            width={"30vw"} 
            fontSize="md" 
            borderRadius="md"
            border="2px"
            p={5} 
            textAlign="left" 
            className="language-javascript">
              {props.originalCode}
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
          <Text mb={"2vh"}>Original Code</Text>
          <Code 
            width={"30vw"} 
            fontSize="md" 
            borderRadius="md"
            border="2px"
            p={5} 
            textAlign="left" 
            className="language-javascript">
              {props.originalCode}
          </Code>
        </Box>
      </Box>
    </Center>
  );
};

export default CodeExample;
