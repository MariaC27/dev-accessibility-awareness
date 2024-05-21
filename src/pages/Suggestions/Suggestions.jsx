/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Button, Code, Center, Textarea, Spacer, Box, Heading, Text, Popover, PopoverTrigger, 
    PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody} from '@chakra-ui/react';

function Suggestions () {
    const [code, setCode] = useState(""); // user input code
    const [apiOutput, setApiOutput] = useState(""); // code output from api
    const [difference, setDifference] = useState([]) // list of changed lines 

    // given original code and modified code, return a list with changed line indices
    const compareCode = (originalCode, modifiedCode) => {
        const originalLines = originalCode.split('\n');
        const modifiedLines = modifiedCode.split('\n');
        const tempDiff = [];

        // Compare each line and detect changes
        originalLines.forEach((line, index) => {
        if (line !== modifiedLines[index]) {
            // If line is different, add to diffLines array
            tempDiff.push({
            lineIndex: index,
            originalLine: line,
            modifiedLine: modifiedLines[index],
            });
        }
        });

        return tempDiff;
    };

    async function callOpenAIAPI() {
        console.log("Calling the OpenAI API");

        const APIBody = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Modify this code to add ARIA labels, alt text, and accessibility fixes where necessary: " + code } ],
        "temperature": 0,
        "max_tokens": 60,
        "top_p": 1.0,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.0
        }

        await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify(APIBody)

        }).then((data) => {
        return data.json();

        }).then((data) => {
            const processedCode = data.choices[0].message.content;
            console.log("processed code: ", processedCode)

            // Set the output code with the processed code
            setApiOutput(processedCode);
            
            const d = compareCode(code, processedCode); // get diff between old code and new code
            console.log("diff: ", d)
            setDifference(d);
        
        });
    }

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
                <Popover key={end} placement="top-start">
                <PopoverTrigger>
                    <span key={end} style={{ backgroundColor: 'yellow', cursor: 'pointer' }}>
                    {modifiedLine.slice(start, end)}
                    </span>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Changed Part</PopoverHeader>
                  <PopoverBody>test</PopoverBody>
                </PopoverContent>
              </Popover>
              );
            }
      
            // Move to the next character
            start = end;
          }
      
          // Add the remaining part of the line
          parts.push(originalLine.slice(start));
      
          return (
            <div key={index}>
              {parts}
            </div>
          );
        };
      
        return (
          <div>
            {diff.map((line, index) => renderLine(line, index))}
          </div>
        );
    };

    // Function to handle click on highlighted sections
    // const handlePopupClick = (lineIndex) => {
    //     // Logic to show popup with additional information about highlighted section
    //     // You can implement your own popup component or library here
    //     alert(`Additional information about line ${lineIndex + 1}`);
    // };


    return (
        <Center width={"100vw"} height={"100vh"} overflowY="auto"display="flex" flexDirection="column">
            <Box p={4} textAlign={'center'} width={"70vw"} marginBottom="5vh">
                <Heading as="h1" size="xl" mb={4}>
                    Welcome to the DAA Code Editor
                </Heading>
                <Text fontSize="lg">
                    Paste in any code and click Analyze to see areas where accessibility improvements could be made and why. 
                    You can hover over different highlighted areas in the output to learn why certain changes were made.
                </Text>
            </Box>
            <Box textAlign={'center'}>
            <Textarea 
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste code here"
                cols = {50}
                rows = {10}
                marginBottom="3vh"
            />
            <Button onClick={callOpenAIAPI} marginBottom="3vh">Analyze</Button>

            <Spacer/>
        
            {difference.length !== 0?
                <Box
                    bg="gray.800"
                    color="white"
                    borderRadius="md"
                    p={6}
                    overflow="auto"
                    css={{
                    '& pre': {
                        margin: 0,
                    },
                    }}
                >
                    <Code
                        fontSize="md"
                        p={20}
                        textAlign="left" // Left-align the code
                        className="language-javascript" // Apply syntax highlighting for JavaScript
                    >
                        {renderHighlightedCode(difference)} 
                    </Code>
                </Box>
                : <p>No suggestions for now!</p>
            }
            </Box>
        </Center>
        
    )
}

export default Suggestions;