import React from "react";

const ChatMessage = ({message}) => {

    let createdAt = message.createdAt;

    let formattedTime = new Date(message.createdAt).toLocaleTimeString()
        .substring(0,5);

    return (
        <div className={message.senderId == localStorage.getItem("USER_ID")
            ? "right-opponent-message"
            : "left-opponent-message"}>
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