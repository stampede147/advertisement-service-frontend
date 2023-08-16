import GenericChatHeader from "../GenericChatHeader/GenericChatHeader";
import AdvertisementAuthorImg from "../AdvertisementAuthorImg/AdvertisementAuthorImg";
import AdvertisementInfo from "../AdvertisementInfo/AdvertisementInfo";

const ChatPreview = ({chat}) => {
    return (
        <GenericChatHeader state={chat}
                           left={AdvertisementAuthorImg}
                           right={AdvertisementInfo}
        />
    )
}

export default ChatPreview;

