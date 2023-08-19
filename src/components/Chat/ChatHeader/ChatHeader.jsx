import './ChatHeader.css'
import ChatAdvertisementAuthorImg from "../../AdvertisementAuthorImg/AdvertisementAuthorImg";
import AdvertisementAuthorInfo from "../../Chat/AdvertisementAuthorInfo/AdvertisementAuthorInfo";
import {useNavigate} from "react-router-dom";

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
                    <div className='back-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m7.414 13 5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 1 1 1.414 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414Z"
                            fill="currentColor">
                        </path>
                    </svg>
                    </div>
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