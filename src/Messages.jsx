import { collection,getFirestore, query, orderBy } from "firebase/firestore"; 
import { useCollection } from 'react-firebase-hooks/firestore';

const Messages = () => {
    //retrieves firebase database
    const db = getFirestore();
    //loads chat collection with realtime hooks

    let q = query(collection(db, 'chats'),orderBy("datetime","asc"))
    const [messages, loading, error] = useCollection(q)

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