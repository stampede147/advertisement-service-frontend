import React from "react";
import './AdvertisementAuthorImg.css'

const ChatAdvertisementAuthorImg = (props) => {

    const {advertisementImg, ownerImg} = props;
    return (
        <div className='advertisement-author-block-root'>
            <div className='advertisement-image'>
                <img src={advertisementImg}/>
            </div>
            <div className='advertisement-author-image'>
                <img src={ownerImg}/>
            </div>
        </div>

    )
}

export default ChatAdvertisementAuthorImg;