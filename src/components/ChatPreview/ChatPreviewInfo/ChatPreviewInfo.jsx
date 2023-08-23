import React from "react";
import './ChatPreviewInfo.css'

const ChatPreviewInfo = (chat) => {

    return (
        <div className='chat-preview-info-root'>
            <div className='chat-advertisement-author-name'>
                {chat.authorName}
            </div>
            <div className='chat-advertisement-info-root'>
                <div className='chat-advertisement-info-title'>
                    {chat.title}
                </div>
                <div className='chat-advertisement-info-price price'>
                    {chat.price}
                </div>
            </div>
            <div className='chat-message-info-root'>
                <div className='chat-message-info-content'>
                    {chat.message}
                </div>
            </div>
        </div>
    );
}

export default ChatPreviewInfo;