import H1Block from "./common/H1Block";
import SpanBlock from "./common/SpanBlock";
import ImgBlock from "./common/ImgBlock";
import React from "react";


const AdvertisementLeftContentBlock = (props) => {

    const advertisement = props.advertisement;
    return (
        <div className='item-left-block'>
            <div className="item-header">
                <div className="item-title">
                    <H1Block className="item-name-view-info" content={advertisement.title}/>
                    <div className="item-details">
                        <SpanBlock className='item-created-view-info' content={advertisement.createdAt}/>
                        <SpanBlock className='item-id-view-info' content={`№${advertisement.id}`}/>
                    </div>
                </div>
            </div>
            <div className="item-content">
                <ImgBlock className="item-img" src={advertisement.imgSourceUrl}/>
                    <SpanBlock className="item-description-view-info" content={advertisement.description}/>
            </div>
        </div>
    );
}

function ItemHeader(advertisement) {
}

export default AdvertisementLeftContentBlock;