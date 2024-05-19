import { useState } from 'react'
import { Button, Code, Center, Textarea, Spacer } from '@chakra-ui/react';
import './Suggestions.css'

function Suggestions () {
    const [code, setCode] = useState(""); // user input code
    const [apiOutput, setApiOutput] = useState(""); // code output from api
    const [diff, setDiff] = useState([]) // list of changed lines 

    // given original code and modified code, return a list with changed line indices
    const compareCode = (originalCode, modifiedCode) => {
        const originalLines = originalCode.split('\n');
        const modifiedLines = modifiedCode.split('\n');
        const diffLines = [];

        // Compare each line and detect changes
        originalLines.forEach((line, index) => {
        if (line !== modifiedLines[index]) {
            // If line is different, add to diffLines array
            diffLines.push({
            lineIndex: index,
            originalLine: line,
            modifiedLine: modifiedLines[index],
            });
        }
        });

        return diffLines;
    };

    async function callOpenAIAPI() {
        console.log("Calling the OpenAI API");

        const APIBody = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Modify this code to add ARIA labels: " + code } ],
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
            setDiff(d);
        
        });
    }

    // takes new code and list of diff lines and highlights areas that changed 
    const renderHighlightedCode = (output, diffList) => { 
        return output.split('\n').map((line, index) => {
        const diffLine = diffList.find(d => d.lineIndex === index);
        if (diffLine) {
            // If line has changed, render with highlight
            return (
            <div key={index}>
                {/* <span className="deleted">{diffLine.originalLine}</span> */}
                <span className="added">{diffLine.modifiedLine}</span>
            </div>
            );
        } else {
            // If line has not changed, render normally
            return <div key={index}>{line}</div>;
        }
        });
    };

    // Function to handle click on highlighted sections
    // const handlePopupClick = (lineIndex) => {
    //     // Logic to show popup with additional information about highlighted section
    //     // You can implement your own popup component or library here
    //     alert(`Additional information about line ${lineIndex + 1}`);
    // };


    return (
        <Center width={"100vw"} height={"100vh"}>
            <div className="suggestions">
            <Textarea 
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste code here"
                cols = {50}
                rows = {10}
            />
            <Button onClick={callOpenAIAPI}>Get analysis from OpenAI API</Button>

            <Spacer/>
        
            {diff.length !== 0?
                <Code className="code-diff">
                    {renderHighlightedCode(apiOutput, diff)} 
                </Code>
                : <p>No suggestions for now!</p>
            }
            </div>
        </Center>
        
    )
}

export default Suggestions;