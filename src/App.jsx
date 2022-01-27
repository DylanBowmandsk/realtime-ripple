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
      photoURL: res.user.photoURL}
      setUname(u)
      console.log(u)
    }) 
  }

  return (
    <div className="App">
        <div className="h-screen w-1/3 flex flex-col justify-end mx-auto">
          <button onClick={signIn} className="p-4 rounded bg-slate-50">
          <img className="inline h-6 w-6 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"></img>
          <span>Login with Google</span>
          </button>
          <Messages/>
          <SendBar user={user}/>
        </div>
    </div>
  );
}



export default App;
