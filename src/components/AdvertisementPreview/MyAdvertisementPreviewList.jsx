import React from "react";

import './AdvertisementPreviewList.css'
import MyAdvertisementPreview from "./MyAdvertisementPreview";
import SemiComponent from "../SemiComponent/SemiComponent";
import {get} from "axios";


const MyAdvertisementPreviewList = (props) => {

    const {advertisements, onClickRedirect} = props;

    return (
        <>
            {
                advertisements.map(advertisement =>
                    <React.Fragment key={advertisement.id}>
                        <MyAdvertisementPreview advertisement={advertisement} onClickRedirect={onClickRedirect}/>
                    </React.Fragment>)
            }
        </>
    );

}

export default MyAdvertisementPreviewList;