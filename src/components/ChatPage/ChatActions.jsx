import './ChatActions.css'
const ChatActions = () => {
    return (
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
    )
}

export default ChatActions;