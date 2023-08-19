import React from "react";
import './ChatPreviewInfo.css'

const ChatPreviewInfo = ({state: chat}) => {

    let message = "Привет мой друг, как ддела?!";
    let advertisement = chat.advertisement;

    return (
        <div className='chat-preview-info-root'>
            <div className='chat-advertisement-author-name'>
                {advertisement.owner.name}
            </div>
            <div className='chat-advertisement-info-root'>
                <div className='chat-advertisement-info-title'>
                    {advertisement.title}
                </div>
                <div className='chat-advertisement-info-price price'>
                    {advertisement.price}
                </div>
            </div>
            <div className='chat-message-info-root'>
                <div className='chat-message-info-content'>
                    {message}
                </div>
            </div>
        </div>
    );
}

export default ChatPreviewInfo;