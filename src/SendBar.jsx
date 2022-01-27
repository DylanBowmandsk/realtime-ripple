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
            datetime: Date()})
        let input = document.getElementById("messageInput")
        input.value = ""
    }

        return(
            <div className="">
                <input id="messageInput" onChange={(e) => setMessageInput(e.target.value)} className="w-2/3" type="text" placeholder="Enter message"/>
                <button onClick={sendMessage} className="">Send</button>
            </div>
        )
}

export default SendBar