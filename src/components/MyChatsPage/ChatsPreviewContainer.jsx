import "./ChatsPreviewContainer.css"
import {Link} from "react-router-dom";
import ChatPreview from "./ChatPreview";

const ChatsPreviewContainer = ({state, ...props}) => {

    const CURRENT_URL = window.location.pathname + '/';

    let chatsContent = state.chatsPage.content;
    const mappedChats = chatsContent.map(chat => {
        return (
            <Link key={chat.chatId}
                  className='chat-card-link'
                  to={CURRENT_URL + chat.chatId}>
                <ChatPreview chat={chat}/>
            </Link>
        )
    })
    return (
        <div className="chats-content-root">
            <div className="chat-list">
                <div className="chat-list-header">
                    <h1>Messages</h1>
                </div>
                <div className="chat-list-content">
                    {mappedChats}
                </div>

            </div>
        </div>
    )
        ;
}

export default ChatsPreviewContainer;