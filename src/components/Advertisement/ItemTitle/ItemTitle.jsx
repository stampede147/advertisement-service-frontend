import React from "react";
import './ItemTitle.css'

const ItemTitle = (props) => {

    const advertisement = props.advertisement;
    return (
        <div className='item-title-name'>
            <h1>
                {advertisement.title}
            </h1>
        </div>
    );
}

export default ItemTitle;
