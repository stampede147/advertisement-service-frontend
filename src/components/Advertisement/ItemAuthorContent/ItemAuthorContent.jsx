import './ItemAuthorContent.css'

import React from "react";

const ItemAuthorContent = (props) => {

    const advertisement = props.advertisement;
    return (
        <div className="author-content-root">
            <div className="item-author-details">
                <div className="author-icon-format">
                    <img src={advertisement.owner.imgSourceUrl}/>
                </div>
                <div className='item-author-name'>
                    <span>{advertisement.owner.name}</span>
                </div>

                <div className="item-author-actions">
                    <button>
                        Send a message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemAuthorContent;