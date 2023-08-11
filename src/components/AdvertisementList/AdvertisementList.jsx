import React from "react";

import './AdvertisementList.css'
import AdvertisementCard from "./AdvertisementCard";


const AdvertisementList = (props) => {
    let advertisementCards = props.advertisements.map(advertisement => {
        return (
            <li key={advertisement.id}>
                <AdvertisementCard advertisement={advertisement}/>
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

export default AdvertisementList;