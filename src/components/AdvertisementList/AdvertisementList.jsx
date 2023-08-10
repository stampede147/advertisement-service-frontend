import React from "react";

import './AdvertisementList.css'


const MyAdvertisements = () => {
    return (
        <div className="main-page-styles">
            <div className="content-container-wrapper">
                    <div className="main-content">
                        <div className="advertisement-header">
                            <p>Your advertisements</p>
                        </div>
                        <div className="card-container">
                            <div className="advertisement-card">
                                <div className="card-image">
                                </div>
                                <div className="card-info">
                                    <ul className="card-info-list">
                                        <li>Title</li>
                                        <li>1500P</li>
                                        <li>Г. Москва, ул. Алябьева, 4к3</li>

                                    </ul>
                                </div>
                                <div className="card-actions    ">
                                    <button type="button" className="card-update-btn btn">
                                    <span className="card-update-btn-text">
                                        update
                                    </span>
                                    </button>
                                    <button type="button" className="card-delete-btn btn">
                                    <span className="card-delete-btn-text">
                                        delete
                                    </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default MyAdvertisements;