import GenericChatHeader from "../GenericChatHeader/GenericChatHeader";
import ChatAdvertisementAuthorImg from "../AdvertisementAuthorImg/AdvertisementAuthorImg";
import ChatAdvertisementAuthorInfo from "./ChatAdvertisementAuthorInfo";
import './ChatHeader1.css'

const ChatHeader1 = ({state}) => {
    return (
            <GenericChatHeader left={ChatAdvertisementAuthorImg}
                               right={ChatAdvertisementAuthorInfo}
                               state={state}
            />
    );
}

export default ChatHeader1;