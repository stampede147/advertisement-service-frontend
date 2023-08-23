import './Chat.css'
import ChatMessageList from "./ChatMessageList/ChatMessageList";
import ChatActions from "./ChatActions/ChatActions";
import ChatHeader from "./ChatHeader/ChatHeader";
import React, {useEffect, useReducer, useState} from "react";
import chatMessageReducer from "../../reducers/chatMessageReducer";
import State from "../../redux/state";
import * as chatMessageApi from "../../api/chatMessageApi";

const Chat = ({state: chat, ...props}) => {

    const [messages, setMessages] = useState([])

    const [states, dispatch] = useReducer(chatMessageReducer, messages)

    const [body, setBody] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            let messagesPage = await chatMessageApi.getChatMessages(chat.id)

            if (!messagesPage.content) {
                messagesPage.content = []
            }

            messagesPage.content.reverse()

            setMessages(messagesPage.content)

            dispatch({type: 'replace_state', data: messagesPage.content})
        }

        fetchData();
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
        setBody(e.trim())
    }
    func.onChange = func.onChange.bind(Chat);

    func.onClick = () => {
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