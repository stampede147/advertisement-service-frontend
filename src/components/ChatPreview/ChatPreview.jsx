import React, {useEffect} from "react";
import ChatAdvertisementAuthorImg from "../common/AdvertisementAuthorImg/AdvertisementAuthorImg";
import ChatPreviewInfo from "./ChatPreviewInfo/ChatPreviewInfo";
import './ChatPreview.css'
import State from "../../redux/state";

const ChatPreview = ({chat}) => {

    const advertisement = chat.advertisement;
    const ownerId = advertisement.userId;
    const ownerDetails = chat.participants.filter(participant => participant.id === ownerId)[0];

    return (
        <div className='chat-preview-root'>
            <div className='left-block-content'>
                <ChatAdvertisementAuthorImg advertisementImg={State.imgSourceUrl} ownerImg={State.imgSourceUrl}/>
            </div>
            <div className='right-block-content'>
                <ChatPreviewInfo authorName={ownerDetails.firstName}
                                 title={advertisement.title}
                                 price={advertisement.price}
                                 message={"Привет мой друг, как ддела?!"}/>
            </div>
        </div>
    )
}

export default ChatPreview;

