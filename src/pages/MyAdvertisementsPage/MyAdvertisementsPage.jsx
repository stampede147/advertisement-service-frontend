import AdvertisementPreviewList from "../../components/AdvertisementPreview/AdvertisementPreviewList";
import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import React, {useEffect, useState} from "react";
import StubComponent from "../../components/StubComponent/StubComponent";
import {useNavigate} from "react-router-dom";
import * as advertisementApi from "../../api/advertisementApi";
import advertisement from "../../components/Advertisement/Advertisement";
import PATHNAMES from "../../constants/PATHNAMES";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import ProfileBar from "../../components/ProfileBar/ProfileBar";

const MyAdvertisementsPage = () => {

    const [loading, setLoading] = useState(true);
    const [advertisements, setAdvertisements] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        advertisementApi.getPageByUserId(1)
            .then(resp => {
                setLoading(false);
                setAdvertisements(resp.content);
            });
    }, []);


    const state = {};
    state.advertisements = advertisements;
    state.onClickRedirect = (advertisementId) => {
        navigate(PATHNAMES.ADVERTISEMENTS + '/' + advertisementId);
    };
    state.onClickRedirect = state.onClickRedirect.bind(MyAdvertisementsPage);

    return (
        <SinglePageWrapper
            header={StubComponent}
            content={() => {
                return <IndexContainer {...state}
                                       navbar={ProfileBar}
                                       content={AdvertisementPreviewList}
                />
            }}
        />
    )
}

export default MyAdvertisementsPage;