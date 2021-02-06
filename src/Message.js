function Message(props) {
    
    if (props.name === "Jeremy") {
        return <div className="message-row" >
            <div className="self-user">
                <div className="message-user" > {props.name} </div>
                <div className="message" > {props.text} </div>
            </div>
        </div>
    }

    return <div className="message-row" >
            <div className="other-user">
                <div className="message-user" > {props.name} </div>
                <div className="message" > {props.text} </div>
            </div>
        </div>
}

export default Message