import React  from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import './ChatMessageList.css'
import {Fragment, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const ChatMessageList = ({state: messages}) => {

    const scrollBlockRef = useRef(null);

    function scrollToDownPosition() {
        let elem = scrollBlockRef.current;
        elem.scrollTop = elem.scrollHeight;
    }

    useEffect(() => {
        scrollToDownPosition()
    });

    const mappedMessages = messages.map(message => {
        return (
            <Fragment key={message.messageId}>
                <ChatMessage message={message}/>
            </Fragment>
        );
    });


    return (
        <div ref={scrollBlockRef} className={"dialog-container"}>
            {mappedMessages}
        </div>
    );
}

export default ChatMessageList;