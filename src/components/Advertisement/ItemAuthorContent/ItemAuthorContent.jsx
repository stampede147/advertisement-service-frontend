import './ItemAuthorContent.css'

import React from "react";

const ItemAuthorContent = (props) => {

    return (
        <div className="author-content-root">
            <div className="item-author-details">
                <div className="author-icon-format">
                    <img src={props.authorImage}/>
                </div>
                <div className='item-author-name'>
                    <span>{props.authorName}</span>
                </div>
            </div>
        </div>
    );
}

export default ItemAuthorContent;