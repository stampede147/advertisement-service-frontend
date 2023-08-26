import './Chat.css'
import ChatMessageList from "./ChatMessageList/ChatMessageList";
import ChatActions from "./ChatActions/ChatActions";
import ChatHeader from "./ChatHeader/ChatHeader";
import React, {useEffect, useReducer, useState} from "react";
import chatMessageReducer from "../../reducers/chatMessageReducer";
import State from "../../constants/state";
import * as chatMessageApi from "../../api/chatMessageApi";
import {useLocation} from "react-router-dom";

const Chat = ({state: chat1, ...props}) => {

    let chat = useLocation().state;

    const [messages, setMessages] = useState([])

    const [states, dispatch] = useReducer(chatMessageReducer, messages)

    const [body, setBody] = useState("")

    useEffect(() => {

        chatMessageApi.getChatMessages(chat.id)
            .then(resp => {
                const input = resp.content == null ? [] : resp.content;
                input.reverse();
                setMessages(resp.content == null ? [] : [...input])
                dispatch({type: 'replace_state', data: input})
            })
    }, [states.length]);

    let func = {}

    func.newMessage = {
        chatId: chat.id,
        body: body,
        senderId: 1,
        createdAt: Date.now(),
        status: "CREATED"
    }


    func.onChange = (e) => {
        setBody(e)
    }
    // !!!
    func.onChange = func.onChange.bind(Chat);

    func.onClick = () => {
        body.trim();
        if (body === "") {
            return
        }

        dispatch({
            type: "add",
            data: func.newMessage
        });

        setMessages([...messages])
        chatMessageApi.sendChatMessage(func.newMessage.chatId, func.newMessage.body, func.newMessage.senderId)
        setBody("");
    }
    // !!!
    func.onClick = func.onClick.bind(Chat);


    return (
        <div className="main-chat-root">
            <ChatHeader chat={chat}/>
            <ChatMessageList state={messages}/>
            <ChatActions sendMessageAction={{
                onClick: func.onClick,
                onChange: func.onChange,
                newMessage: func.newMessage
            }}/>
        </div>
    )
}

export default Chat;