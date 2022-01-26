import SendBar from "./SendBar";
import Messages from "./Messages";
import { useState } from "react";
import {firebaseConfig}  from "./firebaseConfig";
import { initializeApp } from "firebase/app";


initializeApp(firebaseConfig);

function App() {

  return (
    <div className="App">
        <div className="h-screen w-1/3 flex flex-col justify-end mx-auto">
          <Messages/>
          <SendBar/>
        </div>
        
    </div>
  );
}



export default App;
