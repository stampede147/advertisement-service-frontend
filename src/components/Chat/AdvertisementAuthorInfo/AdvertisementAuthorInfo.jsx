import React  from "react";
import './AdvertisementAuthorInfo.css'

const AdvertisementAuthorInfo = (props) => {

    return (
        <div className='chat-advertisement-author-info-root'>
            <div className='advertisement-author-name'>
                {props.authorName}
            </div>
            <div className='advertisement-info-root'>
                <div className='advertisement-info-title'>
                    {props.title}
                </div>
                <div className='advertisement-info-price price'>
                    {props.price}
                </div>
            </div>
        </div>
    );
}

export default AdvertisementAuthorInfo;