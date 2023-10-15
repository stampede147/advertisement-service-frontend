import React, {useEffect, useState} from "react";
import * as userAdvertisementApi from "../../api/userAdvertisementApi";
import StubComponent from "../StubComponent/StubComponent";
import './AdvertisementRecommendation.css'
import {Link} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";


const AdvertisementRecommendation = () => {

    const [advertisementPage, setAdvertisementPage] = useState(null);

    useEffect(() => {
        userAdvertisementApi.getAdvertisementsPage()
            .then(advertisementPage => setAdvertisementPage(advertisementPage))
    }, [])

    const RecommendationHeaderTitle = () => {
        return <div className={"header-style group-title-font group-title-text-size"}>
            Recommendations for you
        </div>
    }

    function joinLocation({city, street}) {
        return `${city}, ${street}`;
    }

    const RecommendationBlock = (props) => {
        let {advertisement} = props;

        return <div
                    className={'recommendation-block-root'}>
            <header className={"block-header"}>
                <Link to={PATHNAMES.TO_ADVERTISEMENT + advertisement.id}>
                    <img className={'block-header-image'} src={advertisement.images && advertisement.images[0].link} alt={"advertisement image"}/>
                </Link>

            </header>
            <div className={'block-body'}>
                <div className={'item-title'}>{advertisement.title}</div>

                <div className={'item-price'}>{advertisement.price}</div>

                <div className={"item-location"}>{joinLocation(advertisement.location)}</div>

                <div className={"item-created-at"}>{advertisement.startTime}</div>
            </div>
        </div>

    }

    const BlockList = () => {
        return <>
            {advertisementPage.content.map(advertisement => <RecommendationBlock key={advertisement.id} advertisement={advertisement}/>)}
        </>
    }

    if (advertisementPage == null) {
        return <StubComponent/>
    }
    return <React.Fragment>
        <div className={'item-recommendation-root'}>
            <RecommendationHeaderTitle/>
            <div className={'item-recommendation-list'}>
                <BlockList/>
            </div>
        </div>
    </React.Fragment>

}

export default AdvertisementRecommendation;