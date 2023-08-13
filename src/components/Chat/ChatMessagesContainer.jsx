import React from "react";
import RightAlignChatMessage from "../ChatMessage/RightAlignChatMessage";
import LeftAlignChatMessage from "../ChatMessage/LeftAlignChatMessage";

const ChatMessagesContainer = (messages) => {
    const mappedMessages = messages.map(message => {
        return (
            <li>message.ownerId === 1
                ? <RightAlignChatMessage message={message}/>
                : <LeftAlignChatMessage message={message}/>
            </li>);
    });

    return (
        <div className="dialog-container">
            {mappedMessages}
        </div>
    );
}

export default ChatMessagesContainer;

