/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

// process.env.REACT_APP_OPENAI_API_KEY

function App() {
  const [code, setCode] = useState("")
  const [apiOutput, setApiOutput] = useState("")

  function callOpenAIAPI(){
    console.log("calling open ai api")
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
