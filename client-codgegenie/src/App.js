import './normalize.css'
import './App.css'
// import setState
import { useState } from 'react'


function App() {

  // add state for input and chat log
  const [input, setInput] = useState("")
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "Hello, I am a chatbot."
  }, {
    user: "me",
    message: "I want to use ChatGPT today."
  }])

  async function handleSubmit(e) {
    e.preventDefault()
    setChatLog([...chatLog, {user: "me", message: `${input}`} ])
    setInput("")
    // fetch response to the api combining the chat log array of messages
    // and sending it as a message to localhost:3000 as a post
    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: chatLog.map((message) => message.message).join("")
      })
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">

      <aside className="side-menu"> 
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message}/>
          ))}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input className="chat-input-textarea"
                   rows="1"
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
            >
            </input>
          </form>
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="center-chat-message">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>

        </div>
        <div className="message">
          {message.message}
        </div>
      </div>
    </div>
  )
}

export default App
