
export const OpenAIAPI_Code = async (code) => {
    console.log("Calling the OpenAI API for CODE");

    const APIBody = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Rewrite this code to meet WCAG AA compliance, adding ARIA tags and alt text only where necessary. Return only the code." + code } ],
    "temperature": 0,
    "max_tokens": 60,
    "top_p": 1.0,
    "frequency_penalty": 0.0,
    "presence_penalty": 0.0
    }

    return await fetch("https://api.openai.com/v1/chat/completions", {
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
        // Set the output code with the processed code
        return processedCode;
        
    
    });
}

export const OpenAIAPI_Popup = async (list) => {
    console.log("Calling the OpenAI API for REASON");

    const APIBody = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "This list contains the original code snippet and then the  modified version. Explain why the accessibility modification was necessary in two sentences or less:" + list } ],
    "temperature": 0,
    "max_tokens": 60,
    "top_p": 1.0,
    "frequency_penalty": 0.0,
    "presence_penalty": 0.0
    }

    return await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    },
    body: JSON.stringify(APIBody)

    }).then((data) => {
        return data.json();

    }).then((data) => {
        const processedResponse = data.choices[0].message.content;
        return processedResponse;
        
    
    });
}