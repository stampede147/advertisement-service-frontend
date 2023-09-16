import React from "react";
import "./ChatPreviewList.css"
import {Link} from "react-router-dom";
import ChatPreview from "./ChatPreview";
import PATHNAMES from "../../constants/PATHNAMES";
import StubComponent from "../StubComponent/StubComponent";

const ChatPreviewList = (props) => {

    const {chatPreviews, loading} = props;

    if (loading) {
        return <StubComponent/>
    }
    return (
        <>
            {chatPreviews.length === 0
                ? <div style={{textAlign: "center"}}>
                    "No chats created yet...
                </div>
                : chatPreviews.map(chat =>
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