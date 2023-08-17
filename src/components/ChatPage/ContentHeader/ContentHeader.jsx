import GenericChatHeader from "../../generic/GenericChatHeader/GenericChatHeader";
import ChatAdvertisementAuthorImg from "../../AdvertisementAuthorImg/AdvertisementAuthorImg";
import AdvertisementAuthorInfo from "../AdvertisementAuthorInfo/AdvertisementAuthorInfo";
import './ContentHeader.css'

const ContentHeader = ({state}) => {
    return (
            <GenericChatHeader left={ChatAdvertisementAuthorImg}
                               right={AdvertisementAuthorInfo}
                               state={state}
            />
    );
}

export default ContentHeader;