import React, {useEffect} from "react";
import './ProfileBar.css'
import State from "../../constants/state";
import {Link, NavLink} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";
import StubComponent from "../StubComponent/StubComponent";

const ProfileBar = (props) => {

    if (props.loading) {
        return <StubComponent/>
    }

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
                <li className="element-bar" >
                    <NavLink activeClassName={"asdasd"} to={PATHNAMES.PROFILE_ADVERTISEMENTS}>
                        <span> my advertisements</span>
                    </NavLink>
                </li>
                <li className="element-bar">
                    <Link to={PATHNAMES.PROFILE_CHATS}>
                        <span> my chats</span>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default ProfileBar;