import GenericChatHeader from "../GenericChatHeader/GenericChatHeader";
import AdvertisementAuthorImg from "../AdvertisementAuthorImg/AdvertisementAuthorImg";
import AdvertisementInfo from "../AdvertisementInfo/AdvertisementInfo";

const ChatHeader1 = ({state}) => {
    return (
        <GenericChatHeader state={state}
                           left={AdvertisementAuthorImg}
                           right={AdvertisementInfo}
        />
    )
}

export default ChatHeader1;


const ChatHeader1_RightBlock = () => {

}