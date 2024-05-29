/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef} from 'react'
import { Button, Code, Center, Textarea, Spacer, Box, Heading, Text, Popover, PopoverTrigger, 
    PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, useMediaQuery} from '@chakra-ui/react';
import { OpenAIAPI_Code, OpenAIAPI_Popup } from '../../services/ApiCalls';
import Diff from 'react-stylable-diff';
import './Suggestions.css'

function Suggestions () {
    const [code, setCode] = useState(""); // user input code
    const [difference, setDifference] = useState([]) // list of changed lines 
    const [highlights, setHighlights] = useState() // stores highlighted lines to render
    const [isLoading, setIsLoading] = useState(false);

    const [isWeb] = useMediaQuery("(min-width: 760px)");

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
                        <span key={index} style={{ cursor: 'pointer' }}>
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
        setIsLoading(true);
        let res = await getData();
        compareCode(code, res).then((d) => {
            setDifference(d);
            setIsLoading(false);
        })
        
    }

    // re-renders the page whenever "difference" is updated after API calls
    useEffect(() =>{
        let highlighted_return = wrapper(difference)
        setHighlights(highlighted_return);
    }, [difference]);

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <Center className="gradient" width={"100%"} height={"100vh"} overflowY="auto" display="flex" flexDirection="column">
            <Box p={4} textAlign={'center'} width={"70%"} marginBottom="5vh">
                <Heading as="h1" size="xl" m={"2vh"}>
                    Welcome to the DAA Code Editor
                </Heading>
                <Text fontSize="lg" mb={"2vh"}>
                    Paste in any code and click Analyze to see areas where accessibility improvements could be made and why. 
                    You can click over highlighted areas in the output to learn why certain changes were made.
                </Text>
                <Text fontSize="sn">
                    If you do not see any highlighted areas, nice job! This means that the model was not able to detect any issues - however this does not mean your code is issue-free! Please check other accessibility resources and documentation as well.
                </Text>
            </Box>
            <Box textAlign={'center'} width={"80vw"} mb={"5vh"} display="flex" flexDirection={isWeb ? "row" : "column"} gap="3vw">
                <Box>
                    <Textarea 
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Paste code here"
                        cols = {40}
                        rows = {8}
                        marginBottom="3vh"
                    />
                    <Button onClick={handleClick} marginBottom="3vh" marginRight="2vw">Analyze</Button>
                    <Button alignContent={"right"} onClick={handleRefresh} variant="outline" marginBottom="3vh">Reset</Button>
                    <Spacer/>
                </Box>

                {isLoading ? <p>Loading...</p> : null}
            
                {difference.length !== 0?
                    <Box
                        color="white"
                        borderRadius="md"
                        border="3px solid black"
                        p={4}
                        overflow="auto"
                    >
                        <Code width={isWeb ? "40vw" : "80vw"} fontSize="md" p={5} textAlign="left" className="language-javascript">
                            {highlights}
                        </Code>
                    </Box>
                    : 
                    <Box
                        width={isWeb ? "40vw" : "80vw"}
                        color="white"
                        borderRadius="md"
                        border="3px solid black"
                        p={4}
                        overflow="auto"
                    >
                    </Box>
                } 
            </Box>
        </Center>
        
    )
}

export default Suggestions;