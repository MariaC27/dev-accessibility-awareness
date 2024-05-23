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
    const [highlights, setHighlights] = useState() 

    // given original code and modified code, return a list with changed line indices
    const compareCode = async (originalCode, modifiedCode) => {
        const originalLines = originalCode.split('\n');
        const modifiedLines = modifiedCode.split('\n');
        const tempDiff = [];

        // Compare each line and detect changes
        originalLines.forEach(async (line, index) => {
        if (line !== modifiedLines[index]) {
            // If line is different, add to diffLines array
            let temp_list = [line, modifiedLines[index]]; // has original and modified code to pass to api 
            const output_reason = await getPopupData(temp_list);
            tempDiff.push({
                lineIndex: index,
                isMod: true,
                originalLine: line,
                modifiedLine: modifiedLines[index],
                reason: output_reason,
            });
        } else{
            tempDiff.push({
                lineIndex: index,
                isMod: false,
                originalLine: line,
                modifiedLine: line,
                reason: '',
            })
        }
        });

        return tempDiff;
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
            console.log("obj: ", obj)
            const { lineIndex, isMod, modifiedLine, originalLine, reason} = obj;
            console.log("lineIndex and isMod: ", lineIndex, isMod)
            if (isMod) { 
                console.log("reached isMod test") 
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
            } else{
                console.log("reached else")
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
        const d = await compareCode(code, res); // get diff between old code and new code
        setDifference(d)
        console.log(Object.keys(d).length)
    }

    useEffect(() =>{
        console.log("rerender") // ISSUE: THIS ISN'T RE-RENDERING WHEN DIFFERENCE CHANGES
        console.log("difference in useEffect: ", difference)
        let highlighted_return = wrapper(difference)
        console.log("high return: " , highlighted_return)
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
        
            {highlights?
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