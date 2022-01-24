import SendBar from "./SendBar";
import Messages from "./Messages";
import { useState } from "react";
import {firebaseConfig}  from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
initializeApp(firebaseConfig);

const db = getFirestore();

const docRef = addDoc(collection(db, "users"), {
  first: "Ada",
  last: "Lovelace",
  born: 1815
});



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
