import './Advertisement.css'
import React from "react";
import ItemDetailsContent from "./ItemDetailsContent/ItemDetailsContent";
import ItemPrice from "./ItemPriceHeader/ItemPriceHeader";
import ItemAuthorContent from "./ItemAuthorContent/ItemAuthorContent";
import ItemTitle from "./ItemTitle/ItemTitle";
import ItemHeader from "./common/ItemHeader";


const Advertisement = ({
                           state,
                       }) => {

    let advertisement = state.advertisement;

    return (
        <div className='advertisement-content-root'>
            <div className='item-left'>
                <ItemHeader advertisement={advertisement}
                            header={ItemTitle}/>
                <ItemDetailsContent advertisement={advertisement}/>
            </div>
            <div className='item-right'>
                <ItemHeader advertisement={advertisement}
                            header={ItemPrice}/>
                <ItemAuthorContent advertisement={advertisement}/>
            </div>
        </div>
    )
}

export default Advertisement;
