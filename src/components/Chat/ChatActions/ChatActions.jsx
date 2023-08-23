import './ChatActions.css'
import React, {useReducer, useRef, useState} from "react";
import state from "../../../redux/state";
import SendMessageAction from "./SendMessageAction";
import chatMessageReducer from "../../../reducers/chatMessageReducer";

const ChatActions = (actions) => {
    return (
        <div className="dialog-actions">
            <div className="actions-row">
                <SendMessageAction body={actions.sendMessageAction.newMessage.body}
                                   onChange={actions.sendMessageAction.onChange}
                                   onClick={actions.sendMessageAction.onClick}
                />
            </div>
        </div>
    )
}

export default ChatActions;