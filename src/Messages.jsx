const Messages = ({messages}) => {
    return(
        <div>
            {console.log(messages)}
            {messages && messages.map((messages, key) => {
                return(
                    <div key={key}>
                        <p>{messages}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Messages