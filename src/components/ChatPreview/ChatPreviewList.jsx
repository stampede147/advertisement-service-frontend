import React, {useEffect, useState} from "react";
import "./ChatPreviewList.css"
import {Link, useLocation} from "react-router-dom";
import ChatPreview from "./ChatPreview";
import {getChatsByUserId} from "../../api/chatApi";
import {wait} from "@testing-library/user-event/dist/utils";
import {get} from "axios";
import State from "../../redux/state";
import PATHNAMES from "../../constants/PATHNAMES";

const ChatPreviewList = () => {

    const [chatPreviews, setChatPreviews] = useState([])

    let location = useLocation();
    console.log(location.state);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getChatsByUserId(1);

            let content = response.content;
            setChatPreviews([...content])
        }

        fetchData().catch(console.error)

    }, []);

    const mappedChats = chatPreviews.map(chat => {
        return (
            <Link key={chat.id}
                  className='chat-preview-link'
                  state={chat}
                  to={PATHNAMES.CHATS + '/' + chat.id}>
                <ChatPreview chat={chat}/>
            </Link>
        )
    })

    return (
        <div className="chat-preview-list-root">
            <div className="chat-preview-list-header">
                <h1>Messages</h1>
            </div>
            <div className="chat-preview-list-content">
                {mappedChats}
            </div>

        </div>
    )
}

export default ChatPreviewList;