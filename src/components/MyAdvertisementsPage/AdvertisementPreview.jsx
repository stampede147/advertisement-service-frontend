import React from "react";

import './AdvertisementPreview.css'
import {Link} from "react-router-dom";

const AdvertisementPreview = (props => {
    let currentPathName = window.location.pathname;
    const ADVERTISEMENT_UPDATE_PATH = '/profile/advertisements/:id/update'
    console.log(currentPathName)

    let advertisement = props.advertisement;
    return (
        <div className="advertisement-card">
            <div className="card-image">
                <img src={advertisement.imgSourceUrl}/>
            </div>
            <div className="card-info">
                <ul className="card-info-list">
                    <li>{advertisement.title}</li>
                    <li>{advertisement.price}P</li>
                    <li>{advertisement.address}</li>

                </ul>
            </div>
            <div className="card-actions">
                <Link to={ADVERTISEMENT_UPDATE_PATH}>

                    <button type="button" className="card-update-btn btn">
                    <span className="card-update-btn-text">
                        update
                    </span>
                    </button>
                </Link>
                <button type="button" className="card-delete-btn btn">
                    <span className="card-delete-btn-text">
                        delete
                    </span>
                </button>
            </div>
        </div>

    )
})

export default AdvertisementPreview;