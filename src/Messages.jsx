import { collection,getFirestore, query, orderBy } from "firebase/firestore"; 
import { useCollection } from 'react-firebase-hooks/firestore';

const Messages = () => {
    //retrieves firebase database
    const db = getFirestore();
    //loads chat collection with realtime hooks

    const [messages] = useCollection(query(collection(db, 'chats'),orderBy("datetime","asc")))
    
        return(
            <div>
                {messages && messages.docs.map((doc, key) => {
                    return(
                        <div key={key} className="flex flex-row justify-between">
                            <span>{doc.data().datetime.slice(16,21)}</span>
                            <div className="h-10 px-4 py-2 my-1 rounded-full bg-blue-500 text-white">{doc.data().message}</div>
                        </div>
                    )
                })}
            </div>
        )
}
export default Messages