import React from "react";

import './AdvertisementContainer.css'
import MyAdvertisement from "./MyAdvertisement";


const AdvertisementContainer = ({state, ...props}) => {
    const advertisements = state.advertisements;
    let advertisementCards = advertisements.map(advertisement => {
        return (
            <li key={advertisement.id}>
                <MyAdvertisement advertisement={advertisement}/>
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

export default AdvertisementContainer;