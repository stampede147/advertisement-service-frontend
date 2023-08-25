import React from "react";

import './AdvertisementPreview.css'
import {Link, useNavigate} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";

const AdvertisementPreview = props => {

    debugger
    const advertisement = props.advertisement;
    const address = advertisement.address;

    return (
        <div className="advertisement-card-preview">
            <div className="card-image">
                <img src={advertisement.imgSourceUrl}/>
            </div>
            <div className="card-info">
                <ul className="card-info-list">
                    <li>
                        <button onClick={() => props.onClickRedirect(props.advertisement.id)}>
                            {advertisement.title}
                        </button>
                    </li>
                    <li>{advertisement.price}P</li>
                    <li>{`${address.city}, st. ${address.street}, ${address.houseNumber}`}</li>
                </ul>
            </div>
            <div className="card-actions">
                <button type="button" className="card-update-btn btn">
                    <Link to={PATHNAMES.ADVERTISEMENT_EDIT}>
                       <span className="card-update-btn-text">
                          update
                      </span>
                    </Link>
                </button>
                <button type="button" className="card-delete-btn btn">
                    <span className="card-delete-btn-text">
                        delete
                    </span>
                </button>
            </div>
        </div>

    )
}

export default AdvertisementPreview;