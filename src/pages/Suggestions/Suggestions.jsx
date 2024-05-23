/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Button, Code, Center, Textarea, Spacer, Box, Heading, Text, Popover, PopoverTrigger, 
    PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody} from '@chakra-ui/react';
import { OpenAIAPI_Code } from '../../components/ApiCalls';
import Diff from 'react-stylable-diff';
import './Suggestions.css'

function Suggestions () {
    const [code, setCode] = useState(""); // user input code
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
                isMod: true,
                originalLine: line,
                modifiedLine: modifiedLines[index],
            });
        } else{
            tempDiff.push({
                lineIndex: index,
                isMod: false,
                originalLine: line,
                modifiedLine: line,
            })
        }
        });

        return tempDiff;
    };

    // renders text with highlights on areas that changed 
    const highlightedText = difference.map((obj, index) => {
        const { modifiedLine, originalLine, isMod} = obj;

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
                    <PopoverHeader>Changed Part</PopoverHeader>
                    <PopoverBody>test</PopoverBody>
                </PopoverContent>
                </Popover>
            </div>
            );
        } else{
            return (
                <span key={index}>
                    <Diff inputA={originalLine} inputB={modifiedLine}  />
                </span>
            )
        }
    })

    // calls function from ApiCalls file
    const getData = async () => {
        try {
            const result = await OpenAIAPI_Code(code); // Call the fetchData function
            return result;
          } catch (error) {
            console.error('Error:', error);
        }
   
    }

    const handleClick = async () =>{
        let res = await getData();
        const d = compareCode(code, res); // get diff between old code and new code
        console.log("got difference")
        setDifference(d)
        
    }


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
            <Button onClick={handleClick} marginBottom="3vh">Analyze</Button>
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
                        
                        {highlightedText}
                    </Code>
                </Box>
                 : <p>No suggestions for now!</p> 
            }
            </Box>
        </Center>
        
    )
}

export default Suggestions;