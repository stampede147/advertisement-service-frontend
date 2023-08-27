import React, {useState} from "react";
import {Link} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";
import './NavigationPanel.css'
import State from "../../constants/state";

export default () => {

    const user = {}
    user.firstName = "Eugeniy";

    const [visibleDropdownMenu, setvisibleDropdownMenu] = useState(0)


    const entriesHolder = [entry]
    const entry = [
        {
            title: 'Chats',
            link: PATHNAMES.PROFILE_CHATS
        },
        {
            title: 'Advertisements',
            link: PATHNAMES.ADVERTISEMENTS
        }
    ];

    function DropdownMenu({entries, ...props}) {
        const mapped = entries.map(entry => <Link  className={'index-dropdown-link'} to={entry.link}>{entry.title}</Link>)
        return <div className={'dropdown-menu-popup'}>
            <ul className={'menu-block-list'}>
                <div className={'menu-block'}>
                    {mapped}
                </div>
            </ul>
        </div>
    }


    const onMouseEvent = () => setvisibleDropdownMenu(!visibleDropdownMenu);

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
                    {<DropdownMenu entries={entry}/>}
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