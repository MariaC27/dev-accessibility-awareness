
export async function separate_OpenAIAPI(code) {
    console.log("Calling the OpenAI API");

    const APIBody = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Modify this code to add ARIA labels where necessary, returning only the code" + code } ],
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
        return processedCode;
        
    
    });
}