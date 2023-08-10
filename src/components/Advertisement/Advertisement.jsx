import React from "react";

import './Advertisement.css'


const Advertisement = ({advertisement}) => {
    return (
        <div className="item-content-container">
            <div className="item-header">
                <div className="item-title">
                    <div className="item-name-view-info">
                        <h1>{advertisement.title}</h1>
                    </div>
                    <div className="item-details">
                        <div className="item-created-view-info">
                            <p>{advertisement.createdAt}</p>
                        </div>
                        <div className="item-id-view-info">
                            <p>№{advertisement.id}</p>

                        </div>
                    </div>

                </div>
                <div className="item-price-view-info">

                    <h1>{advertisement.price}P</h1>
                </div>

            </div>

            <div className="item-content">
                <div className="item-img-wrapper">
                    <div className="item-img view-content-left">
                        <img className="item-img" src={advertisement.imgSourceUrl}/>
                    </div>
                </div>
                <div className="item-details-info">
                    <div className="item-parameters-view-info">
                        <ul className="item-parameters-list">

                        </ul>
                    </div>
                    <div className="item-description-view-info">
                        <p>
                            {advertisement.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="author-content-container">
                <div className="item-author-details view-content-right">
                    <div className="author-icon-format">
                        <img className="item-author-img" src={advertisement.owner.imgSourceUrl}/>
                    </div>
                    <div className="item-author-name">
                        <p>{advertisement.owner.name}</p>
                    </div>

                    <div className="item-author-actions">
                        <ul className="item-author-actions-list">
                            <li>
                                <button>
                                    Send a message
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advertisement;