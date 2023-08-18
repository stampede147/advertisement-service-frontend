import './ItemPriceHeader.css'
import React from "react";

const ItemPriceHeader = (props) => {

    const advertisement = props.advertisement;
    return (
        <>
            <div className="item-header-title" style={{textAlign:"center"}}>
                <div className='item-title-price'>
                    <h1>{advertisement.price}P</h1>
                </div>
            </div>
        </>
    );
}

export default ItemPriceHeader;