import { useState } from "react"

const SendBar = ({messages, setMessages}) => {

    const [messageInput, setMessageInput] = useState()

    const sendMessage = () => {
        let temp = [...messages,messageInput]
        setMessages(temp)
        setMessageInput("")
        
    }

    return(
        <div className="">
            <input id="messageInput" onChange={(e) => setMessageInput(e.target.value)} className="w-2/3" type="text"/>
            <button onClick={sendMessage} className="">Send</button>
        </div>
    )
}



export default SendBar