import React from "react";
import './ItemTitle.css'

const ItemTitle = (props) => {

    const advertisement = props.advertisement;
    return (
        <>
            <div className='item-title-name'>
                <h1>
                    {advertisement.title}
                </h1>
            </div>
            <div className='item-title-created-at'>
                <p>{advertisement.createdAt}</p>
            </div>
            <div className='item-title-id'>
                <p>{`№${advertisement.id}`}</p>
            </div>
        </>
    );
}

export default ItemTitle;
