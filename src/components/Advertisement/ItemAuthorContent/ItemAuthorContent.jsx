import './ItemAuthorContent.css'

import React from "react";
import {createChat} from "../../../api/chatApi";
import * as chatApi from "../../../api/chatApi";
import StubComponent from "../../StubComponent/StubComponent";

const ItemAuthorContent = (props) => {

    const onSendMessageButton = () => {

        chatApi.createChat({
                "advertisementId": props.advertisementId,
                "userId": props.userRequesterId,
            }
        );
        console.log("sender")
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

                {props.advertisementOwnerId !== props.userRequesterId
                    ? <div className="item-author-actions">
                        <button onClick={onSendMessageButton}>
                            Send a message
                        </button>
                    </div>
                    : <StubComponent/>
                }
            </div>
        </div>
    );
}

export default ItemAuthorContent;