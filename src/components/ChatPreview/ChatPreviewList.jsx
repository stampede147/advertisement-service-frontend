import React, {useEffect, useState} from "react";
import "./ChatPreviewList.css"
import {Link} from "react-router-dom";
import ChatPreview from "./ChatPreview";
import {getChatsByUserId} from "../../api/chatApi";
import {wait} from "@testing-library/user-event/dist/utils";
import {get} from "axios";
import State from "../../redux/state";

const ChatPreviewList = ({state, ...props}) => {

    const [chatPreviews, setChatPreviews] = useState([])

    const [number, setNumber] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const response = await getChatsByUserId(1);

            let content = response.content;

            content.map(chat => {
                chat.advertisement.imgSourceUrl = State.imgSourceUrl
                // for (let participant of chat.advertisement.participants) {
                //     participant.imgSourceUrl = State.imgSourceUrl
                // }
            })
            setChatPreviews([...content])
        }

        fetchData().catch(console.error)

    }, []);


    const mappedChats = chatPreviews.map(chat => {
        console.log(chat)
        return (
            <Link key={chat.id}
                  className='chat-preview-link'
                  to='#'>
                <ChatPreview chat={chat}/>
            </Link>
        )
    })

    function onClick() {
        console.log(number)
        setNumber(number+1);
    }
    return (
        <div className="chat-preview-list-root">
            <div className="chat-preview-list-header">
                <h1>Messages</h1>
            </div>
            <div className="chat-preview-list-content">
                {mappedChats}
                <button onClick={onClick}>CLICK ME</button>
            </div>

        </div>
    )
}

export default ChatPreviewList;