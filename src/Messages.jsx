import { collection,getFirestore } from "firebase/firestore"; 
import { useCollection } from 'react-firebase-hooks/firestore';

const Messages = () => {
    //retrieves firebase database
    const db = getFirestore();
    //loads chat collection with realtime hooks
    const [messages, loading, error] = useCollection(collection(db, 'chats'))

    return(
        <div>
            {messages && messages.docs.map((doc, key) => {
                return(
                    <div key={key}>
                        <p>{doc.data().message}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Messages