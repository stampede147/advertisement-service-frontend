import ChatHeader from "../generic/GenericChatHeader/ChatHeader";
import AdvertisementAuthorImg from "../AdvertisementAuthorImg/AdvertisementAuthorImg";
import AdvertisementInfo from "../AdvertisementInfo/AdvertisementInfo";

const ChatPreview = ({chat}) => {
    return (
        <ChatHeader state={chat}
                    left={AdvertisementAuthorImg}
                    right={AdvertisementInfo}
        />
    )
}

export default ChatPreview;

