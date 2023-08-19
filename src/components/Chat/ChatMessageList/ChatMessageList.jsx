import Message from "../ChatMessage/Message";
import './MessageContainer.css'
import {Fragment, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const MessageContainer = ({state: messages}) => {

    let navigate = useNavigate();
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
                <Message message={message}/>
            </Fragment>
        );
    });


    return (
        <div ref={scrollBlockRef} className={"dialog-container"}>
            {mappedMessages}
        </div>
    );
}

export default MessageContainer;