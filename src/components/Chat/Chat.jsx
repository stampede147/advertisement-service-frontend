import './Chat.css'
import ChatMessageList from "./ChatMessageList/ChatMessageList";
import ChatActions from "./ChatActions/ChatActions";
import ChatHeader from "./ChatHeader/ChatHeader";
import React, {useEffect, useReducer, useRef, useState} from "react";
import chatMessageReducer from "../../reducers/chatMessageReducer";

const Chat = ({state}) => {

    const [messages, dispatch] = useReducer(chatMessageReducer, state.messages)
    const [body, setBody] = useState("")

    state.newMessage = {
        messageId: messages.length + 1,
        body: body,
        senderId: 1,
        createdAt: Date.now()
    }

    state.onChange = (e) => {
        setBody(e)
        console.log(e)

    }

    state.onAction = () => {
        dispatch({
            type: "add",
            data: state.newMessage
        });

        setBody("");
        console.log(state.newMessage)
        console.log(`array length is ${messages.length}`)

    }

    return (
        <div className="main-chat-root">
            <ChatHeader state={state.chat}/>
            <ChatMessageList state={messages}/>
            <ChatActions state={state}/>
        </div>
    )
}

export default Chat;