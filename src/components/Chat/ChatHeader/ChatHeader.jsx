import React  from "react";
import './ChatHeader.css'
import ChatAdvertisementAuthorImg from "../../common/AdvertisementAuthorImg/AdvertisementAuthorImg";
import AdvertisementAuthorInfo from "../AdvertisementAuthorInfo/AdvertisementAuthorInfo";
import {useNavigate} from "react-router-dom";
import BackIcon from "../../common/BackIcon/BackIcon";

const ChatHeader = ({state}) => {

    let navigateFunction = useNavigate();

    let onClickButton = () => {
        navigateFunction(-1);
    }

    return (
        <div className='chat-header-root'>
            <div className='chat-button-back'>
            <span className='clickable-button' role={"button"} onClick={onClickButton}>
                <span className='clickable-button-area'>
                    <BackIcon/>
                </span>
            </span>
            </div>

            <div className='left-block-content'>
                <ChatAdvertisementAuthorImg state={state}/>
            </div>

            <div className='right-block-content'>
                <AdvertisementAuthorInfo state={state}/>
            </div>

        </div>
    )

}

export default ChatHeader;