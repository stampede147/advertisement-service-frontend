import './ChatActions.css'
import React, {useRef, useState} from "react";
import state from "../../../redux/state";
import SendMessageAction from "./SendMessageAction";

const ChatActions = ({state}) => {


    return (
        <div className="dialog-actions">
            <div className="actions-row">
                <SendMessageAction/>
            </div>
        </div>
    )
}

export default ChatActions;