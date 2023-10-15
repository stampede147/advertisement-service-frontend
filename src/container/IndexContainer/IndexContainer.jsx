import React from "react";
import './IndexContainer.css'

export default ({navbar: Navbar, content: Content}) => {
    return <div className={'index-container-root'}>
            <div className={'index-left-block'}>
                {Navbar}
            </div>
            <div className={'index-right-block'}>
                {Content}
            </div>
        </div>;

}