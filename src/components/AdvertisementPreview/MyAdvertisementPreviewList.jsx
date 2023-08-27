import React from "react";

import './AdvertisementPreviewList.css'
import MyAdvertisementPreview from "./MyAdvertisementPreview";


const MyAdvertisementPreviewList = ({state, ...props}) => {


    const advertisements = state.advertisements;
    const onClickRedirect = state.onClickRedirect;

    return (
        <div className="main-content">
            <div className="advertisement-header">
                <p>My Advertisements</p>
            </div>
            <div className="card-container">
                {advertisements.map(advertisement => {
                    return (
                        <React.Fragment key={advertisement.id}>
                            <MyAdvertisementPreview advertisement={advertisement} onClickRedirect={onClickRedirect}/>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default MyAdvertisementPreviewList;