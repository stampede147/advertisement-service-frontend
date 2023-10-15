import React from 'react'
import './OptionsMenuContainer.css'
import {Link} from "react-router-dom";
import PATHNAMES from "../../../constants/PATHNAMES";
import * as userAdvertisementApi from "../../../api/userAdvertisementApi";

export default (props) => {

    const {advertisement} = props;
    const {onClickDelete} = props;



    return (
        <div className={'options-menu-container-root'}>
            <div>
                <Link to={PATHNAMES.ADVERTISEMENT_EDIT + '/' + advertisement.id}>
                    Edit
                </Link>
            </div>

            <div>
                <button onClick={onClickDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}