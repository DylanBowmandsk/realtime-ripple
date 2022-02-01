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
    <div className="App bg-pink-100">
        <div className="h-screen w-1/3 flex flex-col py-10 mx-auto">
          <Header />
          {user ? <Messages user={user}/> :<Login setUser={setUser}/>}
          <SendBar user={user}/>
        </div>
    </div>
  );
}



export default App;
