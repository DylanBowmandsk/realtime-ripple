import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth"

const Login = ({setUser}) => {

    //authenticates user and stores dependent data in state object
    const signIn = () => {
    const auth = getAuth()
    const gProvider = new GoogleAuthProvider()
    signInWithPopup(auth, gProvider).then(res => {
      let u = {username: res.user.displayName,
      email: res.user.email,
      photoURL: res.user.photoURL}
      setUser(u)
      console.log(u)
      console.log(res.user)
    }) 
  }
    return (
        <div>
            <button onClick={signIn} className="p-4 w-full rounded bg-slate-50">
                <img className="inline h-6 w-6 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"></img>
                <span>Login with Google</span>
          </button>
        </div>
    )
}

export default Login