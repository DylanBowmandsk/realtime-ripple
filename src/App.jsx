import SendBar from "./SendBar";
import Messages from "./Messages";
import { useState } from "react";

function App() {

  const [messages, setMessages] = useState([])

  return (
    <div className="App">
        <div className="h-screen w-1/3 flex flex-col justify-end mx-auto">
          <Messages messages={messages}/>
          <SendBar messages={messages} setMessages = {setMessages}/>
        </div>
        
    </div>
  );
}

export default App;
