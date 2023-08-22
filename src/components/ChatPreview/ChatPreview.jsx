import React  from "react";
import ChatAdvertisementAuthorImg from "../common/AdvertisementAuthorImg/AdvertisementAuthorImg";
import ChatPreviewInfo from "./ChatPreviewInfo/ChatPreviewInfo";
import './ChatPreview.css'
const ChatPreview = ({chat}) => {

    findOwnerImgSourceUrl(){
        const ownerId = chat.advertisement.userId;
        chat.participants.
    }


    return (
        <div className='chat-preview-root'>
            <div className='left-block-content'>
                <ChatAdvertisementAuthorImg state={chat}/>
            </div>
            <div className='right-block-content'>
                <ChatPreviewInfo state={chat}/>
            </div>
        </div>
    )
}

export default ChatPreview;

