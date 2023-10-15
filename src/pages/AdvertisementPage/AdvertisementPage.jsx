import React, {useEffect, useState} from "react";
import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import Advertisement from "../../components/Advertisement/Advertisement";
import {useParams} from "react-router-dom";
import * as userApi from "../../api/userApi";
import StubComponent from "../../components/StubComponent/StubComponent";
import SingleContainer from "../../container/SingleContainer/SingleContainer";
import NavigationPanel from "../../components/IndexNavigationPanel/NavigationPanel";
import {getAdvertisementById} from "../../api/advertisementsApi";
import FooterPanel from "../../components/FooterPanel/FooterPanel";


const AdvertisementPage = () => {

    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [advertisement, setAdvertisement] = useState({})
    const [userDetails, setUserDetails] = useState({})


    useEffect(() => {
        Promise.all([getAdvertisementById(params.advertisementId), userApi.getUserDetails()])
            .then(data => {
                setAdvertisement(data[0]);
                setUserDetails(data[1]);
                setLoading(false);
            })

    }, []);

    if (loading) {
        return <StubComponent/>;
    }

    return <SinglePageWrapper header={<NavigationPanel user={userDetails}/>}
                              content={<SingleContainer content={<Advertisement advertisement={advertisement}/>}/>}
                              footer={<FooterPanel/>}
    />
}

export default AdvertisementPage;