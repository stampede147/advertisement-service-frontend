import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import React, {useEffect, useState} from "react";
import ChatPreviewList from "../../components/ChatPreview/ChatPreviewList";
import StubComponent from "../../components/StubComponent/StubComponent";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import {getChatsByUserId} from "../../api/chatApi";
import chat from "../../components/Chat/Chat";
import * as chatApi from "../../api/chatApi";
import {getLastChatMessageByChatIds} from "../../api/chatMessageApi";
import * as chatMessageApi from "../../api/chatMessageApi";
import chatPreview from "../../components/ChatPreview/ChatPreview";

const MyChatsPage = ({state}) => {

    const [loading, setLoading] = useState(true)
    const [chatPreviews, setChatPreviews] = useState([])


    useEffect(() => {
        chatApi.getChatsByUserId(1)
            .then(chatsResp => chatMessageApi.getLastChatMessageByChatIds(chatsResp.content.map(chatPreview => chatPreview.id))
                .then(messagesResp => {
                    setLoading(false);
                    const map = new Map();
                    messagesResp.forEach(message => map.set(message.chatId, message));
                    for (const chat of chatsResp.content) {
                        chat.lastMessage = map.get(chat.id);
                    }
                    setChatPreviews(chatsResp.content);
                })
            );
    }, []);

    state = {}
    state.loading = loading;
    state.chatPreviews = chatPreviews;

    return (
        <SinglePageWrapper header={StubComponent}
                           content={() => {
                               return <IndexContainer
                                   {...state}
                                   navbar={ProfileBar}
                                   content={ChatPreviewList}/>
                           }}
                           state={state}

        />
    )
}


export default MyChatsPage