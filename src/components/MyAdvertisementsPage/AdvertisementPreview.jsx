import React from "react";

import './AdvertisementPreview.css'
import ImgBlock from "../common/ImgBlock";
import {useNavigate} from "react-router-dom";

const AdvertisementPreview = (props => {

    let navigateFunction = useNavigate();

    const onButtonClick = () => {
        navigateFunction("/advertisements/0");

    }

    let advertisement = props.advertisement;
    return (
        <div className="advertisement-card-preview">
            <ImgBlock className="card-image" src={advertisement.imgSourceUrl}/>
            <div className="card-info">
                <ul className="card-info-list">
                    <li>
                        <button onClick={onButtonClick}>
                            {advertisement.title}
                        </button>
                    </li>
                    <li>{advertisement.price}P</li>
                    <li>{advertisement.address}</li>
                </ul>
            </div>
            <div className="card-actions">
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

    )
})

export default AdvertisementPreview;