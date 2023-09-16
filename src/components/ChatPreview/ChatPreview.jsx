import React from "react";
import ChatAdvertisementAuthorImg from "../common/AdvertisementAuthorImg/AdvertisementAuthorImg";
import ChatPreviewInfo from "./ChatPreviewInfo/ChatPreviewInfo";
import './ChatPreview.css'
import State from "../../constants/state";

const ChatPreview = ({chat}) => {

    const advertisement = chat.advertisement;
    const ownerId = advertisement.userId;

    if (!chat.lastMessage) {
        chat.lastMessage = {}
    }

    console.log(chat)
    return (
        <div className='chat-preview-root'>
            <div className='left-block-content'>
                <ChatAdvertisementAuthorImg advertisementImg={State.imgSourceUrl} ownerImg={State.imgSourceUrl}/>
            </div>
            <div className='right-block-content'>
                <ChatPreviewInfo authorName={chat.advertisement.seller.firstName}
                                 title={chat.advertisement.title}
                                 price={chat.advertisement.price}
                                 message={chat.lastMessage.body}/>
            </div>
        </div>
    )
}

export default ChatPreview;

