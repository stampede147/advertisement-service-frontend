import Message from "../Message/Message";
import './MessageContainer.css'

const MessageContainer = ({state: messages}) => {

    const mappedMessages = messages.map(message => {
        return (
            <div key={message.id}>
                <Message message={message}/>
            </div>);
    });

    return (
        <div className="dialog-container">
            {mappedMessages}
        </div>
    );
}

export default MessageContainer;

