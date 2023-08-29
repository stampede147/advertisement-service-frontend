import React from 'react'
import './OptionsMenuContainer.css'
import {Link} from "react-router-dom";
import PATHNAMES from "../../../constants/PATHNAMES";

export default (props) => {

    const {advertisement} = props;


    const onClickDelete = (advertisementId) => {
    }

    return (
        <div className={'options-menu-container-root'}>
            <div>
                <Link to={PATHNAMES.ADVERTISEMENT_EDIT + '/' + advertisement.id}>
                    Edit
                </Link>
            </div>

            <div>
                <button onClick={() => onclick(advertisement.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}