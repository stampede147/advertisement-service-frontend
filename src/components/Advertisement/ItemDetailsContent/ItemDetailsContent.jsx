import './ItemDetailsContent.css'
import React from "react";
import State from "../../../constants/state";

const ItemDetailsContent = (props) => {

    const advertisement = props.advertisement;
    return (
        <div className="item-content">
            <img className='item-img' src={
                advertisement.images.length === 0
                ? null
                : advertisement.images[0].link
            }/>
        </div>
    );
}

export default ItemDetailsContent;