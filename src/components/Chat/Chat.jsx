import './Chat.css'
import ChatMessageList from "./ChatMessageList/ChatMessageList";
import ChatActions from "./ChatActions/ChatActions";
import ChatHeader from "./ChatHeader/ChatHeader";
import React, {useEffect, useReducer, useState} from "react";
import chatMessageReducer from "../../reducers/chatMessageReducer";
import State from "../../constants/state";
import * as chatMessageApi from "../../api/chatMessageApi";
import {useLocation, useParams} from "react-router-dom";
import * as chatApi from "../../api/chatApi";
import StubComponent from "../StubComponent/StubComponent";

const Chat = (props) => {

    let params = useParams()

    const [messages, setMessages] = useState([])
    const [chat, setChat] = useState(null);

    const [states, dispatch] = useReducer(chatMessageReducer, messages)

    const [body, setBody] = useState("")

    useEffect(() => {

        chatApi.getChat(params.chatId)
            .then(chat => setChat(chat));

        chatMessageApi.getChatMessages(params.chatId)
            .then(resp => {

                const input = resp.content == null ? [] : resp.content;
                input.reverse();

                setMessages([...input])

                dispatch({type: 'replace_state', data: input})
            })

    }, [states.length]);

    const newMessage = {
        chatId: params,
        body: body,
    }

    const onChange = (e) => {
        setBody(e)
    }

    const onClick = () => {
        if (body === "") {
            return
        }

        dispatch({
            type: "add",
            data: newMessage
        });

        setMessages([...messages])
        chatMessageApi.sendChatMessage(params.chatId, newMessage.body)
        setBody("");
    }

    if (!chat){
        return <StubComponent/>
    }


    let advertisement = chat.advertisement;
    let seller = advertisement.seller;
    return (
        <div className="main-chat-root">
            <ChatHeader title={advertisement.title}
                        price={advertisement.price}
                        advertisementImage={advertisement.images[0].link}
                        firstName={seller.firstName}
                        sellerImage={seller.image && seller.image.link}/>
            <ChatMessageList state={messages}/>
            <ChatActions onClick={onClick} onChange={onChange} body={newMessage.body}/>
        </div>
    )
}

export default Chat;