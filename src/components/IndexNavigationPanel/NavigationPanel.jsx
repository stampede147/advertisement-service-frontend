import React, {useState} from "react";
import {Link} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";
import './NavigationPanel.css'
import State from "../../constants/state";
import DropdownMenu from "../common/DropdownMenu/DropdownMenu";
import DropdownMenuContainer from "./NavigableLinksMenuContainer/DropdownMenuContainer";

export default ({state, ...props}) => {

    const user = {}
    user.firstName = "Eugeniy";

    const [visibleDropdownMenu, setVisibleDropdownMenu] = useState(false)


    const onMouseEvent = () => setVisibleDropdownMenu(!visibleDropdownMenu);
    return (
        <div className={'index-nav-panel-root'}>
            <div className={'index-inner'}>
                <Link className={'index-nav-link index-profile'}
                      to={PATHNAMES.PROFILE_ADVERTISEMENTS}>
                    <p>Мои объявления</p>
                </Link>
                <div onMouseEnter={onMouseEvent}
                     onMouseLeave={onMouseEvent}
                     className={'index-user-nav index-nav-dropdown'}>
                    <Link className={'index-nav-link'}
                          to={PATHNAMES.PROFILE_ADVERTISEMENTS}>
                        <div className={'nav-user-img'}>
                            <img className={'nav-user-avatar'} src={State.imgSourceUrl}/>
                        </div>
                        <span>{user.firstName}</span>
                    </Link>
                    {visibleDropdownMenu && <DropdownMenuContainer/>}
                </div>

                <div className={'index-add-button-wrapper'}>
                    <Link className={'button-ofr index-nav-link'} to={PATHNAMES.CREATE_ADVERTISEMENT}>
                        <span className={"index-add-button-content"}>Создать объявление</span>
                    </Link>

                </div>

            </div>
        </div>
    );
}