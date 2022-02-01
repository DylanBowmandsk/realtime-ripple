import { useState } from "react"
import { collection, addDoc,getFirestore} from "firebase/firestore"; 

const SendBar = ({user}) => {
    //state for chat text input field
    const [messageInput, setMessageInput] = useState()
    //retrieves firebase database
    const db = getFirestore();

    //adds document to chat collection and rests input field
    const sendMessage = () => {
        
        addDoc(collection(db, "chats"), {message: messageInput,
            username: user.username,
            email: user.email,
            photoURL: user.photoURL,
            datetime: Date()})
        let input = document.getElementById("messageInput")
        input.value = ""
    }

        return(
            <div id="sendbar" className="bg-sendbar px-6 py-3">
                <input id="messageInput" onChange={(e) => setMessageInput(e.target.value)} className="w-3/4 px-6 py-3 rounded-full mr-4" type="text" placeholder="Enter message"/>
                <button onClick={sendMessage} className="rounded-full bg-primary text-white px-10 py-3">Send</button>
            </div>
        )
}

export default SendBar