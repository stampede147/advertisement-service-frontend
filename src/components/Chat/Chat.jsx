import './Chat.css'
import ChatMessageList from "./ChatMessageList/ChatMessageList";
import ChatActions from "./ChatActions/ChatActions";
import ChatHeader from "./ChatHeader/ChatHeader";
import React, {useEffect, useReducer, useRef, useState} from "react";

const Chat = ({state}) => {

    return (
        <div className="main-chat-root">
            <ChatHeader state={state.chat}/>
            <ChatMessageList state={state.messages}/>
            <ChatActions state={state}/>
        </div>
    )
}

export default Chat;