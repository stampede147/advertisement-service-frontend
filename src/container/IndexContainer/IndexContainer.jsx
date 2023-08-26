import React from "react";
import './IndexContainer.css'

export default ({navbar: Navbar, content: Content, ...props}) => {
    return (
        <div className={'index-container-root'}>
            <div className={'index-left-block'}>
                <Navbar state={props}/>
            </div>
            <div className={'index-right-block'}>
                <Content state={props}/>
            </div>
        </div>

    );

}