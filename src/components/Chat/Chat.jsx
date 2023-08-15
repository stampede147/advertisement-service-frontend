import './Chat.css'
import ChatHeader from "./ChatHeader";
import ChatMessagesContainer from "./ChatMessagesContainer";

const Chat = ({state}) => {
    return (
        <div className="main-chat-root">
            <ChatHeader state={state}/>
            <ChatMessagesContainer state={state}/>
            <div className="dialog-actions">
                <div className="actions-row">
                    <div className="user-input-message-text-container">
                        <form>
                            <textarea className="send-message-textarea" placeholder="send a message" rows="1"/>
                        </form>
                    </div>
                    <div className="send-message-button-container">
                        <button title="send" type="submit" className="send-message-button">
                            send
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Chat;