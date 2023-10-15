import React, {useEffect, useState} from "react";
import * as userAdvertisementApi from "../../api/userAdvertisementApi";
import StubComponent from "../StubComponent/StubComponent";
import {Link} from "react-router-dom";
import './RecentlyAdvertisements.css'
import PATHNAMES from "../../constants/PATHNAMES";


const RecentAdvertisements = () => {


    const [advertisementPage, setAdvertisementPage] = useState(null);

    useEffect(() => {
        userAdvertisementApi.postViewedAdvertisements()
            .then(advertisementPage => setAdvertisementPage(advertisementPage))

    }, [])


    const RecentAdvertisement = ({id, title, price, imageLink}) => {

        return <Link className={'item-recent-root'} to={PATHNAMES.TO_ADVERTISEMENT + id}>
            <div className={'item-recent-img'}>
                <img src={imageLink} alt={"item image"}/>
            </div>
            <ul className={'item-details'}>
                <li className={'item-details-title'}>{title}</li>
                <li className={'item-details-price'}>{price}</li>
            </ul>
        </Link>
    }

    const RecentAdvertisementList = ({advertisements}) => {
        return <div className={"recent-items-items"}>
            {advertisements.map(advertisement => <RecentAdvertisement key={advertisement.id}
                                                                      id={advertisement.id}
                                                                      title={advertisement.title}
                                                                      price={advertisement.price}
                                                                      imageLink={advertisement.images[0].link}/>)}
        </div>
    }

    if (advertisementPage === null) {
        return <StubComponent/>;
    }

    return <div className={'recent-advertisements-root'}>
        <div className={'recent-advertisement-title header-style group-title-font group-title-text-size'}>
            Recent seen
        </div>
        <RecentAdvertisementList advertisements={advertisementPage && advertisementPage}/>
    </div>
}

export default RecentAdvertisements;