import React from "react";
import "./ChatPreviewList.css"
import {Link} from "react-router-dom";
import ChatPreview from "./ChatPreview";
import PATHNAMES from "../../constants/PATHNAMES";
import StubComponent from "../StubComponent/StubComponent";

const ChatPreviewList = ({state, ...props}) => {

    const {chatPreviews} = state;

    if (state.loading) {
        return <StubComponent/>
    }


    return (
        <div className="chat-preview-list-root">
            <div className="chat-preview-list-header">
                <h1>Messages</h1>
            </div>
            <div className="chat-preview-list-content">
                {chatPreviews.map(chat => {
                    return (
                        <Link key={chat.id}
                              className='chat-preview-link'
                              state={chat}
                              to={PATHNAMES.PROFILE_CHATS + '/' + chat.id}>
                            <ChatPreview chat={chat}/>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default ChatPreviewList;