import H1Block from "../common/H1Block";
import React from "react";
import SpanBlock from "../common/SpanBlock";

const AdvertisementItemTitle = (props) => {

    const advertisement = props.advertisement
    return (
        <div className="item-title">
            <H1Block className="item-name-view-info" content={advertisement.title}/>
            <div className="item-details">
                <SpanBlock className='item-created-view-info' content={advertisement.createdAt}/>
                <SpanBlock className='item-id-view-info' content={`№${advertisement.id}}`}/>
            </div>
        </div>
    );
}
export default AdvertisementItemTitle;