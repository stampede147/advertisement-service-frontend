import './ChatActions.css'
import React, {useReducer, useRef, useState} from "react";
import state from "../../../redux/state";
import SendMessageAction from "./SendMessageAction";
import chatMessageReducer from "../../../reducers/chatMessageReducer";

const ChatActions = ({state}) => {


    return (
        <div className="dialog-actions">
            <div className="actions-row">
                <SendMessageAction body={state.newMessage.body}
                                   onChange={state.onChange}
                                   onAction={state.onAction}/>
            </div>
        </div>
    )
}

export default ChatActions;