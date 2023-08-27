import './ItemDetailsContent.css'
import React from "react";
import State from "../../../constants/state";

const ItemDetailsContent = (props) => {

    const advertisement = props.advertisement;
    return (
        <div className="item-content">
            <div className='item-img'>
                <img className='item-img' src={State.imgSourceUrl}/>
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