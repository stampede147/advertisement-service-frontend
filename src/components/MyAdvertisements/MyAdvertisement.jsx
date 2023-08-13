import React from "react";

import './MyAdvertisement.css'

const MyAdvertisement = (props => {

    let advertisement = props.advertisement
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

    )
})

export default MyAdvertisement;