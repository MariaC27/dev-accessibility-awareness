import { useState } from 'react'

function Suggestions () {
    const [code, setCode] = useState("");
    const [apiOutput, setApiOutput] = useState("");
    const [diff, setDiff] = useState([])

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
        "messages": [{"role": "user", "content": "Fix the accessibility issues in this code: " + code } ],
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
        // Extract and store the highlighted sections
        // const regex = /<<(\d+)>>/g;
        // const matches = [...processedCode.matchAll(regex)].map(match => parseInt(match[1]));
        
        const d = compareCode(code, processedCode);
        console.log("diff: ", d)
        setDiff(d);
        
      
        });
    }

  const renderHighlightedCode = (output, diffList) => { 

    return output.split('\n').map((line, index) => {
      const diffLine = diffList.find(d => d.lineIndex === index);
      console.log("diffLine: ", diffLine)
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
        <div className="suggestions">
        <div>
            <textarea 
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste code here"
            cols = {50}
            rows = {10}
            />
        </div>
        <div>
            <button onClick={callOpenAIAPI}>Get analysis from OpenAI API</button>
        
        </div>
        {diff.length !== 0?
            // <p>The output is: {apiOutput}</p>
            <div className="code-diff">
                {renderHighlightedCode(apiOutput, diff)} 
            </div>
            : null
            }
        </div>
    )
}

export default Suggestions;