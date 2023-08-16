import React from "react";

import './AdvertisementPreviewContainer.css'
import AdvertisementPreview from "./AdvertisementPreview";


const AdvertisementPreviewContainer = ({state : advertisementsPage, ...props}) => {
    const advertisements = advertisementsPage.content;
    let advertisementCards = advertisements.map(advertisement => {
        return (
            <li key={advertisement.id}>
                <AdvertisementPreview advertisement={advertisement}/>
            </li>
        )
    });

    return (
        <div className="main-page-styles">
            <div className="content-container-wrapper">
                <div className="main-content">
                    <div className="advertisement-header">
                        <p>Your advertisements</p>
                    </div>
                    <div className="card-container">
                        <ul>
                            {advertisementCards}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvertisementPreviewContainer;