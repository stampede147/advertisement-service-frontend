import React from "react";
import './ChatHeader.css'
import ChatAdvertisementAuthorImg from "../../common/AdvertisementAuthorImg/AdvertisementAuthorImg";
import AdvertisementAuthorInfo from "../AdvertisementAuthorInfo/AdvertisementAuthorInfo";
import {useNavigate} from "react-router-dom";
import BackIcon from "../../common/BackIcon/BackIcon";
import BackButton from "../../common/BackButton/BackButton";
import State from "../../../constants/state";

const ChatHeader = (props) => {

    const ownerDetails = props.chat.participants
        .filter(participant => participant.id === props.chat.advertisement.userId)[0];

    let navigateFunction = useNavigate();

    let onClickButton = () => {
        navigateFunction(-1);
    }


    return (
        <div className='chat-header-root'>
            <div className='chat-button-back'>
                <BackButton onClickButton={onClickButton}/>
            </div>

            <div className='left-block-content'>
                <ChatAdvertisementAuthorImg advertisementImg={State.imgSourceUrl}
                                            ownerImg={State.imgSourceUrl}/>
            </div>

            <div className='right-block-content'>
                <AdvertisementAuthorInfo authorName={ownerDetails.firstName}
                                         title={props.chat.advertisement.title}
                                         price={props.chat.advertisement.price}
                />
            </div>

        </div>
    )

}

export default ChatHeader;