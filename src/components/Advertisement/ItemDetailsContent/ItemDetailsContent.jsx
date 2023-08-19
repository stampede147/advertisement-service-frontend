import './ItemDetailsContent.css'
import React from "react";

const ItemDetailsContent = (props) => {

    const advertisement = props.advertisement;
    return (
        <div className="item-content">
            <div className='item-img'>
                <img className='item-img' src={advertisement.imgSourceUrl}/>
            </div>
            <div className="item-description">
                <span>
                    {advertisement.description}
                </span>
            </div>
        </div>
    );
}

export default ItemDetailsContent;