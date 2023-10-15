import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import React, {useEffect, useState} from "react";
import ChatPreviewList from "../../components/ChatPreview/ChatPreviewList";
import StubComponent from "../../components/StubComponent/StubComponent";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import {getChats} from "../../api/chatApi";
import chat from "../../components/Chat/Chat";
import * as chatApi from "../../api/chatApi";
import {getLastChatMessageByChatIds} from "../../api/chatMessageApi";
import * as chatMessageApi from "../../api/chatMessageApi";
import chatPreview from "../../components/ChatPreview/ChatPreview";
import LOCALSTORAGE_KEYS from "../../constants/LOCALSTORAGE_KEYS";
import * as userApi from "../../api/userApi";
import NavigationPanel from "../../components/IndexNavigationPanel/NavigationPanel";
import SemiComponent from "../../components/SemiComponent/SemiComponent";
import MyAdvertisementPreviewList from "../../components/AdvertisementPreview/MyAdvertisementPreviewList";
import FooterPanel from "../../components/FooterPanel/FooterPanel";

const MyChatsPage = ({state}) => {

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userApi.getUserDetails()
            .then(userDetails => {
                setUserDetails(userDetails);
            })
    }, [])

    if (!userDetails){
        return <StubComponent/>;
    }
    return (
        <SinglePageWrapper
            header={<NavigationPanel user={userDetails}/>}
            content={<IndexContainer
                navbar={<ProfileBar userDetails={userDetails}/>}
                content={<SemiComponent title={"My messages"}
                                              content={<ChatPreviewList/>}
                                              {...state}/>
                }
            />
            }
            footer={<FooterPanel/>}
        />
    )
}


export default MyChatsPage