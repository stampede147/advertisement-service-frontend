import React, {useEffect, useState} from "react";
import "./ChatPreviewList.css"
import {Link} from "react-router-dom";
import ChatPreview from "./ChatPreview";
import PATHNAMES from "../../constants/PATHNAMES";
import StubComponent from "../StubComponent/StubComponent";
import * as chatApi from "../../api/chatApi";
import * as chatMessageApi from "../../api/chatMessageApi";

const ChatPreviewList = (props) => {

    const [chatPreviewsPage, setChatPreviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const chatPreviewsPage = await chatApi.getChats();

            console.log(chatPreviewsPage)

            const messages = await chatMessageApi.getLastChatMessageByChatIds(chatPreviewsPage.content.map(chat => chat.id));

            const map = new Map();
            messages.forEach(message => map.set(message.chatId, message));

            chatPreviewsPage.content.map(chat => {
                chat.lastMessage = map.get(chat.id)
                return chat;
            })

            setChatPreviews(chatPreviewsPage)
            setLoading(false)
        }

        fetchData();
    }, [])



    if (loading) {
        return <StubComponent/>
    }
    return (
        <>
            {chatPreviewsPage.length === 0
                ? <div style={{textAlign: "center"}}>
                    "No chats created yet...
                </div>
                : chatPreviewsPage.content.map(chat =>
                    <Link key={chat.id}
                          className='chat-preview-link'
                          state={chat}
                          to={PATHNAMES.PROFILE_CHATS + '/' + chat.id}>
                        <ChatPreview chat={chat}/>
                    </Link>)
            }
        </>);
}

export default ChatPreviewList;