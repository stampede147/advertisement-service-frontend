import React from "react";
import './ChatHeader.css'
import ChatAdvertisementAuthorImg from "../../common/AdvertisementAuthorImg/AdvertisementAuthorImg";
import AdvertisementAuthorInfo from "../AdvertisementAuthorInfo/AdvertisementAuthorInfo";
import {useNavigate} from "react-router-dom";
import BackIcon from "../../common/BackIcon/BackIcon";
import BackButton from "../../common/BackButton/BackButton";
import State from "../../../constants/state";

const ChatHeader = (props) => {

    const navigateFunction = useNavigate();

    const {title, price, advertisementImage} = props

    const {firstName, sellerImage} = props

    let onClickButton = () => {
        navigateFunction(-1);
    }

    return (
        <div className='chat-header-root'>
            <div className='chat-button-back'>
                <BackButton onClickButton={onClickButton}/>
            </div>

            <div className='left-block-content'>
                <div className='advertisement-author-block-root'>
                    <div className='advertisement-image'>
                        <img src={advertisementImage} alt={"item image"}/>
                    </div>
                    <div className='advertisement-author-image'>
                        <img src={sellerImage} alt={"author image"}/>
                    </div>
                </div>
            </div>

            <div className='right-block-content'>
                <AdvertisementAuthorInfo authorName={firstName}
                                         title={title}
                                         price={price}
                />
            </div>

        </div>
    )

}

export default ChatHeader;