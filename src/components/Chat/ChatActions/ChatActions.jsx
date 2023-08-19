import './ChatActions.css'
import React, {useRef, useState} from "react";
import state from "../../../redux/state";
import SendMessageAction from "./SendMessageAction";

const ChatActions = ({state}) => {


    return (
        <div className="dialog-actions">
            <div className="actions-row">
                <SendMessageAction onChange={state.onChange} onAction={state.onAction}/>
            </div>
        </div>
    )
}

export default ChatActions;