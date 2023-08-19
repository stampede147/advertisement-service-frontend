import './ChatActions.css'
import React, {useRef, useState} from "react";
import state from "../../../redux/state";
import UserInputTextArea from "./UserInputTextArea";
import SendMessageButtonAction from "./SendMessageButtonAction";

const ChatActions = ({state}) => {


    return (
        <div className="dialog-actions">
            <div className="actions-row">
                
                <UserInputTextArea/>
                <SendMessageButtonAction/>
            </div>
        </div>
    )
}

export default ChatActions;