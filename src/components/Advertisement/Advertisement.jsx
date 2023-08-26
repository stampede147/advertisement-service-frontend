import './Advertisement.css'
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import ItemDetailsContent from "./ItemDetailsContent/ItemDetailsContent";
import ItemPrice from "./ItemPriceHeader/ItemPriceHeader";
import ItemAuthorContent from "./ItemAuthorContent/ItemAuthorContent";
import ItemTitle from "./ItemTitle/ItemTitle";
import ItemHeader from "./common/ItemHeader";
import State from "../../constants/state";
import stubComponent from "../StubComponent/StubComponent";
import StubComponent from "../StubComponent/StubComponent";


const Advertisement = ({state, ...props}) => {


    const itemTitleHeaderRef = useRef(null);
    const itemPriceHeaderRef = useRef(null);

    useEffect(() => {
        itemPriceHeaderRef.current.style.height = itemTitleHeaderRef.current.offsetHeight + 'px';
    }, []);

    const advertisement = state.advertisement;
    const user = state.user;

    if (props.loading) {
        return <StubComponent/>
    }

    return (
        <div className='advertisement-content-root'>
            <div className='item-left'>
                <ItemHeader ref={itemTitleHeaderRef}
                            advertisement={advertisement}
                            header={ItemTitle}/>
                <ItemDetailsContent advertisement={advertisement}/>
            </div>

            <div className='item-right'>
                <ItemHeader ref={itemPriceHeaderRef}
                            advertisement={advertisement}
                            header={ItemPrice}/>
                <ItemAuthorContent
                    advertisementId={advertisement.id}
                    userId={user.id}
                    authorImage={State.imgSourceUrl}
                    authorName={user.firstName}
                />
            </div>
        </div>
    )
}

export default Advertisement;
