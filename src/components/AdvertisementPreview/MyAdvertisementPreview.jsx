import React, {useState} from "react";

import './AdvertisementPreview.css'
import OptionsMenuContainer from "./OptionsMenuContainer/OptionsMenuContainer";

const MyAdvertisementPreview = props => {

    const [visible, setVisible] = useState(false)

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
                    <li>{`${advertisement.location.city}, ${advertisement.location.street}`}</li>
                </ul>
            </div>

            <div className="adv-actions-dropdown">
                <button onClick={() => setVisible(!visible)}>
                    <svg role="img" aria-hidden="true" data-icon="more"
                         viewBox="0 0 24 24"
                         name="more"
                         className="desktop-14a6q5n">
                        <path d="M17 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-3 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-9-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z">
                        </path>
                    </svg>
                </button>
                {visible && <OptionsMenuContainer advertisement={advertisement}/>}
            </div>
        </div>

    )
}

export default MyAdvertisementPreview;