import './Chat.css'
import MessageContainer from "./MessageContainer/MessageContainer";
import ChatActions from "./Actions/ChatActions";
import ChatHeader from "../generic/GenericChatHeader/ChatHeader";
import React, {useEffect, useReducer, useRef, useState} from "react";

const Chat = ({state}) => {

    return (
        <div className="main-chat-root">
            <ChatHeader state={state.chat}/>
            <MessageContainer state={state.messages}/>
            <ChatActions state={state}/>
        </div>
    )
}

export default Chat;