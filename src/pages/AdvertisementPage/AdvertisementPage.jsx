import React, {useEffect, useState} from "react";
import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import Advertisement from "../../components/Advertisement/Advertisement";
import * as advertisementApi from "../../api/advertisementApi";
import {useParams} from "react-router-dom";
import * as userApi from "../../api/userApi";
import StubComponent from "../../components/StubComponent/StubComponent";
import LOCALSTORAGE_KEYS from "../../constants/LOCALSTORAGE_KEYS";
import SingleContainer from "../../container/SingleContainer/SingleContainer";


const AdvertisementPage = () => {

    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [advertisement, setAdvertisement] = useState(null)
    const [user, setUser] = useState(null)


    useEffect(() => {
        const apiPromises = [
            advertisementApi.getOne(params.advertisementId),
            userApi.getUserByUsername(LOCALSTORAGE_KEYS.USERNAME_KEY)];

        Promise.all(apiPromises)
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

    return <SinglePageWrapper header={SearchHeader}
                              content={() => <SingleContainer content={Advertisement} {...state}/>}
                              state={state}/>
}

export default AdvertisementPage;