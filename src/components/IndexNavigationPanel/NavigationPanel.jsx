import React, {useState} from "react";
import {Link} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";
import './NavigationPanel.css'
import State from "../../constants/state";
import DropdownMenuContainer from "./NavigableLinksMenuContainer/DropdownMenuContainer";
import ChatIcon from './icons/chatIcon.svg'
import PlusIcon from './icons/plusIcon.svg'
import SearchInput from "../common/SearchInput/SearchInput";

export default ({state, ...props}) => {

    const [visibleDropdownMenu, setVisibleDropdownMenu] = useState(false)

    const {showAddButton = true} = props;
    const user = {}
    user.firstName = "Eugeniy";

    function ImagedPseudoButton(params) {
        return <Link className={'index-nav-link'} to={params.to}>
            <div className={'index-block-container'}>
                <img className={'index-block-img'}
                     src={params.src}
                     alt={params.alt}/>
            </div>
        </Link>
    }

    let onMouseEnter = () => setVisibleDropdownMenu(!visibleDropdownMenu);
    return (
        <div className={'index-nav-panel-root'}>
            <div className={'index-inner'}>

                <div className={'index-input-block-left'}>
                    <SearchInput/>
                </div>

                <div className={'index-images-group-right'}>
                    <div className={'index-chat-wrapper'}>
                        <ImagedPseudoButton to={"/profile/chats"}
                                            src={ChatIcon}
                                            alt={"profile chats"}
                        />
                    </div>

                    <div className={'index-user-nav index-nav-dropdown'}
                         onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseEnter}>
                        <div className={'user-image-avatar'}>
                            <ImagedPseudoButton to={PATHNAMES.PROFILE_ADVERTISEMENTS}
                                                src={State.imgSourceUrl}
                                                alt={"user image"}/>
                        </div>
                        {visibleDropdownMenu && <DropdownMenuContainer/>}
                    </div>

                    {showAddButton
                        && <div className={'index-add-button-wrapper'}>
                            <ImagedPseudoButton to={PATHNAMES.CREATE_ADVERTISEMENT}
                                                src={PlusIcon}
                                                a={"add advertisement"}
                            />
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}