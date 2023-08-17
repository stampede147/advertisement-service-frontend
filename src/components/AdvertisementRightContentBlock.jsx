import ImgBlock from "./common/ImgBlock";
import SpanBlock from "./common/SpanBlock";
import React from "react";

const AdvertisementRightContentBlock = (props) => {

    const advertisement = props.advertisement
    return (
        <div className='item-right-block'>
            <div className="item-header item-header-right">
                <div className="item-price-view-info">
                    <h1>{advertisement.price}P</h1>
                </div>

            </div>
            <div className="author-content-container">
                <div className="item-author-details">
                    <ImgBlock className="author-icon-format" src={advertisement.owner.imgSourceUrl}/>
                    <SpanBlock className='item-author-name' content={advertisement.owner.name}/>

                    <div className="item-author-actions">
                        <ul className="item-author-actions-list">
                            <li>
                                <button>
                                    Send a message
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default AdvertisementRightContentBlock;