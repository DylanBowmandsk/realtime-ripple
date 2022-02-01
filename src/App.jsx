import SendBar from "./SendBar";
import Messages from "./Messages";
import Header from "./Header"
import Login from "./Login"
import { useState } from "react";
import { firebaseConfig }  from "./firebaseConfig";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

function App() {

  const [user, setUser] = useState()

  return (
    <div className="App">
        <div className="h-screen w-1/3 flex flex-col justify-end mx-auto">
          <Header />
          {user ? <Messages/> :<Login setUser={setUser}/>}
          <SendBar user={user}/>
        </div>
    </div>
  );
}



export default App;
