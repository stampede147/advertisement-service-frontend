import React from "react";

import './AdvertisementPreviewList.css'
import AdvertisementPreview from "./AdvertisementPreview";


const AdvertisementPreviewList = ({state, ...props}) => {


    const advertisements = state.advertisements;
    const onClickRedirect = state.onClickRedirect;

    return (
        <div className="main-content">
            <div className="advertisement-header">
                <p>Advertisements</p>
            </div>
            <div className="card-container">
                {advertisements.map(advertisement => {
                    return (
                        <React.Fragment key={advertisement.id}>
                            <AdvertisementPreview advertisement={advertisement} onClickRedirect={onClickRedirect}/>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default AdvertisementPreviewList;