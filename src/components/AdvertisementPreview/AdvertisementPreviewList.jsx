import React, {Fragment} from "react";

import './AdvertisementPreviewList.css'
import AdvertisementPreview from "./AdvertisementPreview";
import ReactDOM from "react-dom/client";


const AdvertisementPreviewList = ({state: advertisements, ...props}) => {

    let advertisementCards = advertisements.map(advertisement => {
        return (
            <React.Fragment key={advertisement.id}>
                <AdvertisementPreview advertisement={advertisement}/>
            </React.Fragment>
        )
    });

    return (
        <div className="main-content">
            <div className="advertisement-header">
                <p>Your advertisements</p>
            </div>
            <div className="card-container">
                    {advertisementCards}
            </div>
        </div>
    )
}

export default AdvertisementPreviewList;