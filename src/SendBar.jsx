import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore"

const SendBar = ({messages, setMessages}) => {

    const [messageInput, setMessageInput] = useState()
    const db = getFirestore();

    const sendMessage = () => {
        addDoc(collection(db, "chats"), {message: messageInput})

        let temp = [...messages,messageInput]
        setMessages(temp)
        setMessageInput("")
        let input = document.getElementById("messageInput")
        input.value = ""
    }

    return(
        <div className="">
            <input id="messageInput" onChange={(e) => setMessageInput(e.target.value)} className="w-2/3" type="text"/>
            <button onClick={sendMessage} className="">Send</button>
        </div>
    )
}

export default SendBar