import SendBar from "./SendBar";
import Messages from "./Messages";
import { useState } from "react";
import { firebaseConfig }  from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth"


initializeApp(firebaseConfig);

function App() {

  const [user, setUname] = useState()

  //authenticates user and stores dependent data in state object
  const signIn = () => {
    const auth = getAuth()
    const gProvider = new GoogleAuthProvider()
    signInWithPopup(auth, gProvider).then(res => {
      let u = {username: res.user.displayName,
      email: res.user.email,
      verified: res.user.emailVerified}
      setUname(u)
    }) 
  }

  return (
    <div className="App">
        <div className="h-screen w-1/3 flex flex-col justify-end mx-auto">
          <button onClick={signIn}>sing in</button>
          <Messages/>
          <SendBar user={user}/>
        </div>
    </div>
  );
}



export default App;
