import './ChatHeader.css'
import ChatAdvertisementAuthorImg from "../../AdvertisementAuthorImg/AdvertisementAuthorImg";
import AdvertisementAuthorInfo from "../../ChatPage/AdvertisementAuthorInfo/AdvertisementAuthorInfo";

const ChatHeader = ({state}) => {

    return (
        <div className='chat-header-root'>
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