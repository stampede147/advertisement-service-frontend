import './ChatActions.css'
import React, {useReducer, useRef, useState} from "react";
import state from "../../../constants/state";
import SendMessageAction from "./SendMessageAction";
import chatMessageReducer from "../../../reducers/chatMessageReducer";

const ChatActions = (props) => {

    const {onChange, onClick, body} = props;

    return (
        <div className="dialog-actions">
            <div className="actions-row">
                <SendMessageAction body={body}
                                   onChange={onChange}
                                   onClick={onClick}
                />
            </div>
        </div>
    )
}

export default ChatActions;