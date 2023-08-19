import React from "react";
import './SendMessageAction.css'

const SendMessageAction = () => {
    return (
        <>
            <div className="user-input-message-text-root">
                <form id="user-input-message-form">
                        <textarea className="send-message-textarea" placeholder="send a message"
                                  rows="1"/>
                </form>
            </div>

            <div className="send-message-button-root">
                <button form="user-input-message-form"
                        title="send"
                        type="submit"
                        className="send-message-button">
                    send
                </button>
            </div>

        </>
    );
}

export default SendMessageAction;