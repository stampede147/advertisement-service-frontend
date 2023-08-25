import React from "react";

export default ({navbar: Navbar, content: Content}) => {
    return (
        <div className={'generic-container-root'}>
            <div className={'left-block-root'}>
                <Navbar/>
            </div>
            <div className={'right-content-root'}>
                <Content/>
            </div>
        </div>

    );

}