import React  from "react";

const ChatMessage = ({message}) => {

    let createdAt = message.createdAt;

    let formattedTime = new Date(createdAt).toLocaleTimeString()
        .substring(0,5);

    return (
        <div className={message.senderId === 0
            ? "left-opponent-message"
            : "right-opponent-message"}>
            <div className='message-container'>
                <div>
                    <div className="message-author-img">

                    </div>
                    <div className="message-content">
                        {message.body}
                    </div>
                </div>
                <div className="message-time">
                    <span>{formattedTime}</span>
                </div>
            </div>
        </div>

    )
}

export default ChatMessage;