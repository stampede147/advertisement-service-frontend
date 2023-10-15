import React, {useEffect, useState} from "react";
import './ProfileBar.css'
import {Link, NavLink} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";
import StubComponent from "../StubComponent/StubComponent";
import * as useApi from "../../api/userApi";

const ProfileBar = (props) => {

    const {userDetails} = props;

    return (
        <div className="profile-side-bar">
            <div className="profile-side-bar-header">
                <div className="profile-icon">
                    <img src={userDetails &&
                        userDetails.image &&
                        userDetails.image.link}/>
                </div>
                <div className="profile-author-name">
                        <span className="author-name-text">
                            {userDetails.name}
                        </span>
                </div>
            </div>
            <div className="profile-side-bar-navigation-list">
                <ul>
                    <li className="element-bar">
                        <NavLink to={PATHNAMES.PROFILE_ADVERTISEMENTS}>
                            <span>My advertisements</span>
                        </NavLink>
                    </li>
                    <li className="element-bar">
                        <Link to={PATHNAMES.PROFILE_CHATS}>
                            <span>My chats</span>
                        </Link>
                    </li>
                </ul>
                <ul className={'profile-side-bar-details-list'}>
                    <li className={"element-bar"}>
                        <Link to={PATHNAMES.PROFILE_SETTINGS}>
                            <span>Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileBar;