import React, {useEffect, useState} from "react";
import "./ChatPreviewList.css"
import {Link, useLocation} from "react-router-dom";
import ChatPreview from "./ChatPreview";
import {getChatsByUserId} from "../../api/chatApi";
import PATHNAMES from "../../constants/PATHNAMES";

const ChatPreviewList = ({state, ...props}) => {

    const {chatPreviews} = state;

    debugger
    const mappedChats = chatPreviews.map(chat => {
        return (
            <Link key={chat.id}
                  className='chat-preview-link'
                  state={chat}
                  to={PATHNAMES.CHATS + '/' + chat.id}>
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
}

export default ChatPreviewList;