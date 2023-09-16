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


const AdvertisementPage = () => {

    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [advertisement, setAdvertisement] = useState(null)
    const [user, setUser] = useState(null)


    useEffect(() => {
        Promise.all(Array.of(getAdvertisementById(params.advertisementId), userApi.getUserDetails()))
            .then(resp => {
                setAdvertisement(resp[0]);
                setUser(resp[1]);
                setLoading(false);
            })
    }, []);

    const state = {}
    state.advertisement = advertisement;
    state.user = user;
    state.loading = loading;

    if (loading) {
        return <StubComponent/>
    }

    return <SinglePageWrapper header={NavigationPanel}
                              content={() =>
                                  <SingleContainer content={Advertisement}
                                                   {...state}/>}
                              state={state}/>
}

export default AdvertisementPage;