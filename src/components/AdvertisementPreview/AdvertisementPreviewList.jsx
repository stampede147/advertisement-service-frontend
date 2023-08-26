import React, {Fragment, useEffect, useState} from "react";

import './AdvertisementPreviewList.css'
import AdvertisementPreview from "./AdvertisementPreview";
import * as advertisementApi from "../../api/advertisementApi";
import {useNavigate} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";


const AdvertisementPreviewList = ({state, ...props}) => {


    const advertisements = state.advertisements;
    const onClickRedirect = state.onClickRedirect;

    let advertisementPreviewList = advertisements.map(advertisement => {
        return (
            <React.Fragment key={advertisement.id}>
                <AdvertisementPreview advertisement={advertisement} onClickRedirect={onClickRedirect}/>
            </React.Fragment>
        )
    });

    return (
        <div className="main-content">
            <div className="advertisement-header">
                <p>Advertisements</p>
            </div>
            <div className="card-container">
                {advertisementPreviewList}
            </div>
        </div>
    )
}

export default AdvertisementPreviewList;