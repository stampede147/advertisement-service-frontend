import './ItemDetailsContent.css'
import React from "react";
import State from "../../../constants/state";

const ItemDetailsContent = (props) => {

    const advertisement = props.advertisement;
    return (
        <div className="item-content">
            <img className='item-img' src={State.imgSourceUrl}/>
        </div>
    );
}

export default ItemDetailsContent;