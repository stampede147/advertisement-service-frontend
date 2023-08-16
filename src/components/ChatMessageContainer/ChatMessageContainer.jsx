import ChatMessage from "../ChatMessage/ChatMessage";
import './ChatMessageContainer.css'

const ChatMessageContainer = ({state: messages}) => {

    debugger

    const mappedMessages = messages.map(message => {
        return (
            <div key={message.id}>
                <ChatMessage message={message}/>
            </div>);
    });

    return (
        <div className="dialog-container">
            {mappedMessages}
        </div>
    );
}

export default ChatMessageContainer;

