import React from "react";
import './ChatHeader.css'
import ChatAdvertisementAuthorImg from "../../common/AdvertisementAuthorImg/AdvertisementAuthorImg";
import AdvertisementAuthorInfo from "../AdvertisementAuthorInfo/AdvertisementAuthorInfo";
import {useNavigate} from "react-router-dom";
import BackIcon from "../../common/BackIcon/BackIcon";
import BackButton from "../../common/BackButton/BackButton";
import State from "../../../constants/state";

const ChatHeader = (props) => {

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
                <AdvertisementAuthorInfo authorName={props.chat.advertisement.seller.firstName}
                                         title={props.chat.advertisement.title}
                                         price={props.chat.advertisement.price}
                />
            </div>

        </div>
    )

}

export default ChatHeader;