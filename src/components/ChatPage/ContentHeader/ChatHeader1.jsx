import ChatHeader from "../../generic/GenericChatHeader/ChatHeader";
import ChatAdvertisementAuthorImg from "../../AdvertisementAuthorImg/AdvertisementAuthorImg";
import AdvertisementAuthorInfo from "../AdvertisementAuthorInfo/AdvertisementAuthorInfo";
import './ContentHeader.css'

const ChatHeader1 = ({state}) => {
    return (
            <ChatHeader left={ChatAdvertisementAuthorImg}
                        right={AdvertisementAuthorInfo}
                        state={state}
            />
    );
}

export default ChatHeader1;