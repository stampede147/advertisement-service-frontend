import React, {useState} from "react";
import './SendMessageAction.css'

const SendMessageAction = (props) => {

    return (
        <>
            <div className="user-input-message-text-root">
                <form id="user-input-message-form">
                    <div className={'form-textarea-block'}>
                        <textarea value={props.body}
                                  onChange={e => props.onChange(e.target.value)}
                                  className="send-message-textarea"
                                  placeholder="send a message"
                                  rows="1"/>
                    </div>
                </form>
            </div>

            <div className="send-message-button-root">
                <button
                    onClick={props.onClick}
                    form="user-input-message-form"
                    title="send"
                    type="button"
                    className="send-message-button">
                    send
                </button>
            </div>

        </>
    );
}

export default SendMessageAction;