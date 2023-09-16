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

const MyChatsPage = ({state}) => {

    const [loading, setLoading] = useState(true)
    const [chatPreviews, setChatPreviews] = useState([])


    useEffect(() => {

        async function fetchData() {
            const user = await userApi.getUserDetails();

            const chats = await chatApi.getChats(user.id);
            chats.content = chats.content
                ? chats.content
                : [];

            if (chats.content.length !== 0) {
                const messages = await chatMessageApi.getLastChatMessageByChatIds(chats.content.map(chat => chat.id));

                const map = new Map();
                messages.forEach(message => map.set(message.chatId, message));

                chats.content.map(chat => {
                    chat.lastMessage = map.get(chat.id)
                    return chat;
                })
            }

            setLoading(false);

            setChatPreviews(chats.content)

        }

        fetchData();
    }, []);

    state = {}
    state.loading = loading;
    state.chatPreviews = chatPreviews;

    return (
        <SinglePageWrapper
            header={NavigationPanel}
            content={() => <IndexContainer
                navbar={ProfileBar}
                content={() =>
                    <SemiComponent title={"My messages"}
                                   content={ChatPreviewList}
                                   {...state}/>
                }
            />
            }
        />
    )
}


export default MyChatsPage