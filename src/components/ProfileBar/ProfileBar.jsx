import React  from "react";
import './ProfileBar.css'

const ProfileBar = () => {
    let props = {user: {name: "aboba"}}
    const user = props.user;
    return (
        <div className="profile-side-bar">
            <div className="profile-author-details">
                <div className="profile-icon icon">
                    <img src={props.user.sourceUrl}/>
                </div>
                <div className="profile-author-name">
                        <span className="author-name-text">
                            {user.name}
                        </span>
                </div>
                <div className="profile-reviews">
                    <a href="#">
                        <p>0 reviews!</p>
                    </a>
                </div>
            </div>
            <div className="profile-redirect-elements">
                <div className="main-profile-page element-bar">
                    <a href="#">
                        <p>my page</p>
                    </a>
                </div>
                <div className="main-profile-advertisements element-bar">
                    <a href="#">
                        <p>my advertisements</p>
                    </a>
                </div>
                <div className="main-profile-messages element-bar">
                    <a href="#">
                        <p>my messages</p>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ProfileBar;