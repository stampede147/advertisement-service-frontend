import React, {useState} from "react";
import {Link} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";
import './NavigationPanel.css'
import DropdownMenuContainer from "./NavigableLinksMenuContainer/DropdownMenuContainer";
import ChatIcon from './icons/chatIcon.svg'
import SearchInput from "../common/SearchInput/SearchInput";


const NavigationalPanel = (props) => {

    const [visibleDropdownMenu, setVisibleDropdownMenu] = useState(false)

    const {showAddButton: isAddButtonActive = true, isAdvSearchActive = true} = props;

    const {user} = props;


    function ImagedPseudoButton({to, src, alt}) {
        return <LinkButton to={to}
                           Content={<img className={'index-block-img'}
                                         src={src}
                                         alt={alt}
                           />}/>;
    }

    function TextPseudoButton({to, text}) {
        return <LinkButton to={to}
                           Content={<div className={'index-block-div'}>{text}</div>}/>
    }

    function LinkButton({Content, to}) {
        return <Link className={'link-wrapper'} to={to}>
            <div className={'index-block-container'}>
                {Content}
            </div>
        </Link>
    }

    let toggleDropdownMenu = () => setVisibleDropdownMenu(!visibleDropdownMenu);

    let searchStyle = {opacity: isAdvSearchActive ? "100" : "0"};
    var addButtonStyle = {opacity: isAddButtonActive ? "100" : "0"};
    return (
        <div className={'index-nav-panel-root'}>

            <div className={'index-inner'}>

                <div className={'index-inner-brand-style index-inner-space'}>
                    <TextPseudoButton to={PATHNAMES.MAIN} text={"Adservice"}/>
                </div>


                <div style={searchStyle} className={'index-input-block-left index-inner-space'}>
                    <SearchInput/>
                </div>

                <div className={'index-group-right index-inner-space'}>
                    <div className={'index-group-nav'}>
                        <ImagedPseudoButton to={"/profile/chats"}
                                            src={ChatIcon}
                                            alt={"profile chats"}
                        />
                    </div>

                    <div className={'index-user-nav index-nav-dropdown'}
                         onMouseEnter={toggleDropdownMenu}
                         onMouseLeave={toggleDropdownMenu}>
                        <ImagedPseudoButton to={PATHNAMES.PROFILE_ADVERTISEMENTS}
                                            src={user && user.image && user.image.link}
                                            alt={"user image"}/>
                        {visibleDropdownMenu && <DropdownMenuContainer/>}
                    </div>

                    <div className={'index-group-nav'}>
                        <div style={addButtonStyle} className={"create-text-color-style"}>
                            <TextPseudoButton to={PATHNAMES.CREATE_ADVERTISEMENT} text={"Create advertisement"}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavigationalPanel;