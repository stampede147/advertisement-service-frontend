import './ItemContentRight.css'
import ImgBlock from "../../common/ImgBlock";
import SpanBlock from "../../common/SpanBlock";
import React from "react";

const ItemAuthorContent = (props) => {

    const advertisement = props.advertisement;
    return (
        <div className="author-content-container">
            <div className="item-author-details">
                <ImgBlock className="author-icon-format" src={advertisement.owner.imgSourceUrl}/>
                <SpanBlock className='item-author-name' content={advertisement.owner.name}/>

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