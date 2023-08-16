import ChatMessage from "../ChatMessage/ChatMessage";
import './ChatMessagesContainer.css'

const ChatMessagesContainer = ({state}) => {
    let messagesPage = state.messagesPage;

    const mappedMessages = messagesPage.content.map(message => {
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

export default ChatMessagesContainer;

