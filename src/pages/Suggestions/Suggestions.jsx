/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Button, Code, Center, Textarea, Spacer, Box, Heading, Text, Popover, PopoverTrigger, 
    PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody} from '@chakra-ui/react';
import { OpenAIAPI_Code, OpenAIAPI_Popup } from '../../components/ApiCalls';
import Diff from 'react-stylable-diff';
import './Suggestions.css'

function Suggestions () {
    const [code, setCode] = useState(""); // user input code
    const [difference, setDifference] = useState([]) // list of changed lines 
    const [highlights, setHighlights] = useState() // stores highlighted lines to render

    // given original code and modified code, return a list with changed line indices
    const compareCode = async (originalCode, modifiedCode) => {
        const originalLines = originalCode.split('\n');
        const modifiedLines = modifiedCode.split('\n');
        let tempDiff = [];

        // Compare each line and detect changes
        tempDiff = originalLines.map(async (line, index) => {
        if (line !== modifiedLines[index]) {
            // If line is different, add to diffLines array
            let temp_list = [line, modifiedLines[index]]; // has original and modified code to pass to api 
            const output_reason = await getPopupData(temp_list);
            return {
                lineIndex: index,
                isMod: true,
                originalLine: line,
                modifiedLine: modifiedLines[index],
                reason: output_reason,
            };
        } else{
            return {
                lineIndex: index,
                isMod: false,
                originalLine: line,
                modifiedLine: line,
                reason: '',
            };
        }
        });

        // "resolve" the promises before returning
        return Promise.all(tempDiff);
    };

    // calls function from ApiCalls file
    const getData = async () => {
        try {
            const result = await OpenAIAPI_Code(code); // Call the fetchData function
            return result;
          } catch (error) {
            console.error('Error:', error);
        }
   
    }

    // eventually takes list as a parameter that has two string elements: original and mod code
    const getPopupData = async(list) => {
        try {
            const result = await OpenAIAPI_Popup(list); // Call the fetchData function
            return result;
          } catch (error) {
            console.error('Error:', error);
        }
    }

    const wrapper = (d) => {
        const highlightedText = d.map((obj, index) => {
            const { lineIndex, isMod, modifiedLine, originalLine, reason} = obj;
            // console.log("lineIndex and isMod: ", index, isMod)
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

        return highlightedText;
    }

    const handleClick = async () =>{
        let res = await getData();
        compareCode(code, res).then((d) => {
            setDifference(d)
        })
        
    }

    // re-renders the page whenever "difference" is updated after API calls
    useEffect(() =>{
        let highlighted_return = wrapper(difference)
        setHighlights(highlighted_return);
    }, [difference]);

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
                        
                        {highlights}
                    </Code>
                </Box>
                 : <p>No suggestions for now!</p> 
             } 
            </Box>
        </Center>
        
    )
}

export default Suggestions;