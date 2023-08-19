import React  from "react";
import "./ChatsPreviewList.css"
import {Link} from "react-router-dom";
import ChatPreview from "./ChatPreview";

const ChatPreviewList = ({state, ...props}) => {

    const CURRENT_URL = window.location.pathname + '/';

    let chatsContent = state.chatsPage.content;
    const mappedChats = chatsContent.map(chat => {
        return (
            <Link key={chat.chatId}
                  className='chat-preview-link'
                  to={CURRENT_URL + chat.chatId}>
                <ChatPreview chat={chat}/>
            </Link>
        )
    })
    return (
            <div className="chat-preview-list-root">
                <div className="chat-preview-list-header">
                    <h1>Messages</h1>
                </div>
                <div className="chat-preview-list-content">
                    {mappedChats}
                </div>

            </div>
    )
        ;
}

export default ChatPreviewList;