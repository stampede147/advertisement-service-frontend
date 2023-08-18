import './Advertisement.css'
import React from "react";
import ItemDetailsContent from "./LeftBlock/ItemDetailsContent";
import ItemPrice from "./RightBlock/ItemPriceHeader";
import ItemAuthorContent from "./RightBlock/ItemAuthorContent";
import ItemTitle from "./LeftBlock/ItemTitle";
import ItemHeader from "./common/ItemHeader";


const Advertisement = ({
                           state,
                           left,
                           right
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
