import './ItemAuthorContent.css'

import React from "react";
import {createChat} from "../../../api/chatApi";
import * as chatApi from "../../../api/chatApi";

const ItemAuthorContent = (props) => {

    const onSendMessageButton = () => {

        chatApi.createChat({
            "advertisementId": props.advertisementId,
            "userId": props.userId,
            }
        );
        console.log("sender")

        //create chat, get link from response api
        //redirect to chat

    }



    const advertisement = props.advertisement;
    return (
        <div className="author-content-root">
            <div className="item-author-details">
                <div className="author-icon-format">
                    <img src={props.authorImage}/>
                </div>
                <div className='item-author-name'>
                    <span>{props.authorName}</span>
                </div>

                <div className="item-author-actions">
                    <button onClick={onSendMessageButton}>
                        Send a message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemAuthorContent;