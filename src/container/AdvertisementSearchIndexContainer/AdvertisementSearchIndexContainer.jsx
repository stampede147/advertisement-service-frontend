import React from "react";
import './AdvertisementSearchIndexContainer.css'
import IndexContainer from "../IndexContainer/IndexContainer";


const AdvertisementSearchIndexContainer = ({Header, Content, Navbar}) => {
    return (
        <div className={'index-item-root'}>

            <div className={'index-item-header'}>
                {Header}
            </div>

            <div className={'index-item-content'}>
                <IndexContainer content={Content} navbar={Navbar}/>
            </div>

        </div>);
}

export default AdvertisementSearchIndexContainer;