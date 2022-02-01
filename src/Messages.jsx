import { collection,getFirestore, query, orderBy } from "firebase/firestore"; 
import { useCollection } from 'react-firebase-hooks/firestore';

const Messages = ({user}) => {
    //retrieves firebase database
    const db = getFirestore();
    //loads chat collection with realtime hooks

    const [messages] = useCollection(query(collection(db, 'chats'),orderBy("datetime","asc")))
    
        return(
            <div>
                {messages && messages.docs.map((doc, key) => {
                    let direction = doc.data().email === user.email ? "justify-end" : "justify-start" 
                    return(
                        <div key={key} className={`flex flex-row ${direction} bg-backdrop`}>
                            <span>{doc.data().datetime.slice(16,21)}</span>
                            <div>
                                <div className="h-10 px-4 py-2 my-1 rounded-full bg-blue-500 text-white inline-block">{doc.data().message}</div>
                                <img className="h-10 w-10 ml-2 rounded-full inline-block" src={doc.data().photoURL}></img>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
}
export default Messages