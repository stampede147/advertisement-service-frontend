import React, {Fragment, useEffect, useState} from "react";

import './AdvertisementPreviewList.css'
import AdvertisementPreview from "./AdvertisementPreview";
import * as advertisementApi from "../../api/advertisementApi";
import {useNavigate} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";


const AdvertisementPreviewList = ({state: advertisements1, ...props}) => {

    const [advertisements, setAdvertisements] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const advertisementPage = await advertisementApi.getPage(1);
            setAdvertisements(advertisementPage.content)
        }

        fetchData()
    }, []);


    let advertisementPreviewList = advertisements.map(advertisement => {
        return (
            <React.Fragment key={advertisement.id}>
                <AdvertisementPreview
                    onClickRedirect={() => navigate(PATHNAMES.ADVERTISEMENTS + '/' + advertisement.id)}
                    advertisement={advertisement}/>
            </React.Fragment>
        )
    });

    return (
        <div className="main-content">
            <div className="advertisement-header">
                <p>Advertisemenets</p>
            </div>
            <div className="card-container">
                {advertisementPreviewList}
            </div>
        </div>
    )
}

export default AdvertisementPreviewList;