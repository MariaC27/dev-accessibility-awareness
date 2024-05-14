/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

function App() {
  const [code, setCode] = useState("");
  const [apiOutput, setApiOutput] = useState("");

  async function callOpenAIAPI() {
    console.log("Calling the OpenAI API");

    const APIBody = {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": "What does this code do? " + code,}],
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
      console.log(data);
      setApiOutput(data.choices[0].message.content); // Positive or negative
    });
  }


  return (
    <div className="App">
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
        {apiOutput !== ""?
          <p>The output is: {apiOutput}</p>
          : null
        }
      </div>
    </div>
  )
}

export default App
