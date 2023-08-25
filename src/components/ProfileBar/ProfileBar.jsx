import React, {useEffect} from "react";
import './ProfileBar.css'
import State from "../../redux/state";

const ProfileBar = () => {

    return (
        <div className="profile-side-bar">
            <div className="profile-side-bar-header">
                <div className="profile-icon">
                    <img src={State.imgSourceUrl}/>
                </div>
                <div className="profile-author-name">
                        <span className="author-name-text">
                            EUGENIY
                        </span>
                </div>
                <div className="profile-reviews">
                    <a href="#">
                        <p>0 reviews!</p>
                    </a>
                </div>
            </div>
            <ul className="profile-side-bar-navigation-list">
                <li className="main-profile-page element-bar">
                    <a href="#">
                        <p>my page</p>
                    </a>
                </li>
                <li className="main-profile-advertisements element-bar">
                    <a href="#">
                        <p>my advertisements</p>
                    </a>
                </li>
                <li className="main-profile-messages element-bar">
                    <a href="#">
                        <p>my messages</p>
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default ProfileBar;