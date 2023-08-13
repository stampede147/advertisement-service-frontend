import ChatMessage from "./ChatMessage";


const RightAlignChatMessage = (message) => {
    return (
        <div className="right-opponent-message">
            <ChatMessage message={message}/>
        </div>
    );
}

export  default RightAlignChatMessage;